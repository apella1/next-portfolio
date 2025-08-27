import { getLabs } from "@/utils/labs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const labs = await getLabs();
    return NextResponse.json(labs);
  } catch (error) {
    console.error("Error fetching labs:", error);
    return NextResponse.json(
      { error: "Failed to fetch labs" },
      { status: 500 },
    );
  }
}
