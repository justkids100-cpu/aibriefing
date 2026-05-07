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
}

export async function getLatestBriefing(): Promise<Briefing | null> {
  const params = new URLSearchParams({
    "filterByFormula": "{Status}='Done'",
    "sort[0][field]": "subject",
    "sort[0][direction]": "desc",
    "maxRecords": "10",
  });
  const data = await airtableFetch(BRIEFINGS_TABLE, params.toString());
  if (!data.records?.length) return null;
  // Sort by createdTime descending to get the newest Done briefing
  const sorted = data.records.sort(
    (a: { createdTime: string }, b: { createdTime: string }) =>
      new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
  );
  const r = sorted[0];
  return {
    id: r.id,
    subject: r.fields.subject || "",
    html: r.fields.html || "",
    status: r.fields.Status || "",
    createdTime: r.createdTime,
  };
}

export async function getAllSentBriefings(): Promise<Briefing[]> {
  const params = new URLSearchParams({
    "filterByFormula": "OR({Status}='Done',{Status}='Sent')",
    "maxRecords": "50",
  });
  const data = await airtableFetch(BRIEFINGS_TABLE, params.toString());
  const records = (data.records || [])
    .map((r: { id: string; createdTime: string; fields: { subject?: string; html?: string; Status?: string } }) => ({
      id: r.id,
      subject: r.fields.subject || "",
      html: r.fields.html || "",
      status: r.fields.Status || "",
      createdTime: r.createdTime,
    }))
    .sort((a: Briefing, b: Briefing) =>
      new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
    );
  return records;
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
