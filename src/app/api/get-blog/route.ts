import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(req: any) {
  try {
    const post = await prisma.post.findMany();

    return NextResponse.json({ status: 200, post });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  } finally {
  }
}
