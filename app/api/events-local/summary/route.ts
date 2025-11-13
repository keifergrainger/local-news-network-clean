import { NextResponse } from "next/server";

export async function GET() {
  // Temporary safe stub to avoid build-time crashes
  return NextResponse.json({
    ok: true,
    source: "events-local-summary",
    items: [],
  });
}
