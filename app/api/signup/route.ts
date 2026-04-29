import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const res = await fetch(
      "https://api.airtable.com/v0/app6WzeDP8KVFOpWu/Abonnenter",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer REMOVED_SECRET",
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
      const err = await res.text();
      console.error("Airtable error:", err);
      return NextResponse.json({ ok: false }, { status: 500 });
    }
  } catch (e) {
    console.error("Signup error:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
