import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const res = await fetch(
      "https://api.airtable.com/v0/app6WzeDP8KVFOpWu/Abonnenter",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                email: body.email,
                kilde: "website",
              },
            },
          ],
        }),
      }
    );

    if (res.ok) {
      return NextResponse.json({ ok: true });
    } else {
      return NextResponse.json({ ok: false }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
