import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await fetch(
      "https://hook.eu1.make.com/6855twsc3gc6pl0pkfb78uvvyio639pn",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: body.email,
          kilde: "website",
        }),
      }
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
