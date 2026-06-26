const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = process.env.AIRTABLE_BASE_ID || "app6WzeDP8KVFOpWu";
const AGENT_LOG_TABLE = "tbl2Qlyu6iECgetWz";
const BRIEFINGS_TABLE = "Briefings";
const SUBSCRIBERS_TABLE = "Abonnenter";

async function airtableFetch(table: string, params?: string) {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${table}${params ? `?${params}` : ""}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`Airtable ${table}: ${res.status}`);
  return res.json();
}

export interface Briefing {
  id: string;
  subject: string;
  html: string;
  status: string;
  createdTime: string;
  sendt_tidspunkt: string;
}

function replaceCidWithUrls(html: string, fields: Record<string, string>): string {
  const cidMap: Record<string, string> = {
    "cid:billede1@aibriefing": fields.historie_1_billede_url || "",
    "cid:billede2@aibriefing": fields.historie_2_billede_url || "",
    "cid:billede3@aibriefing": fields.historie_3_billede_url || "",
  };
  let result = html;
  for (const [cid, url] of Object.entries(cidMap)) {
    if (url) {
      result = result.replaceAll(cid, url);
    }
  }
  return result;
}

export async function getLatestBriefing(): Promise<Briefing | null> {
  // Kun mails der faktisk er sendt: sendt_tidspunkt er udfyldt OG ligger i fortiden
  const params = new URLSearchParams({
    "filterByFormula": "AND({sendt_tidspunkt}!='',IS_BEFORE({sendt_tidspunkt},NOW()))",
    "sort[0][field]": "sendt_tidspunkt",
    "sort[0][direction]": "desc",
    "maxRecords": "1",
  });
  const data = await airtableFetch(BRIEFINGS_TABLE, params.toString());
  if (!data.records?.length) return null;
  const r = data.records[0];
  return {
    id: r.id,
    subject: r.fields.subject || "",
    html: replaceCidWithUrls(r.fields.html || "", r.fields),
    status: r.fields.Status || "",
    createdTime: r.createdTime,
    sendt_tidspunkt: r.fields.sendt_tidspunkt || "",
  };
}

export async function getAllSentBriefings(): Promise<Briefing[]> {
  // Kun mails der faktisk er sendt: sendt_tidspunkt er udfyldt OG ligger i fortiden
  const params = new URLSearchParams({
    "filterByFormula": "AND({sendt_tidspunkt}!='',IS_BEFORE({sendt_tidspunkt},NOW()))",
    "sort[0][field]": "sendt_tidspunkt",
    "sort[0][direction]": "desc",
    "maxRecords": "50",
  });
  const data = await airtableFetch(BRIEFINGS_TABLE, params.toString());
  return (data.records || []).map(
    (r: { id: string; createdTime: string; fields: Record<string, string> }) => ({
      id: r.id,
      subject: r.fields.subject || "",
      html: replaceCidWithUrls(r.fields.html || "", r.fields),
      status: r.fields.Status || "",
      createdTime: r.createdTime,
      sendt_tidspunkt: r.fields.sendt_tidspunkt || "",
    })
  );
}

export interface AgentLogEntry {
  id: string;
  agent: string;
  action: string;
  timestamp: string;
  description: string;
}

export async function getAgentLog(): Promise<AgentLogEntry[]> {
  const params = new URLSearchParams({
    "sort[0][field]": "timestamp",
    "sort[0][direction]": "desc",
    "maxRecords": "100",
  });
  const data = await airtableFetch(AGENT_LOG_TABLE, params.toString());
  return (data.records || []).map(
    (r: { id: string; fields: { agent?: string; action?: string; timestamp?: string; description?: string } }) => ({
      id: r.id,
      agent: r.fields.agent || "",
      action: r.fields.action || "",
      timestamp: r.fields.timestamp || "",
      description: r.fields.description || "",
    })
  );
}

export async function getSubscriberCount(): Promise<number> {
  const data = await airtableFetch(SUBSCRIBERS_TABLE);
  return data.records?.length || 0;
}
