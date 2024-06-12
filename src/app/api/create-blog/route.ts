import { NextResponse } from "next/server";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import prisma from "@/utils/prisma";

// const sharp = require("sharp");
const pump = promisify(pipeline);

export async function POST(req: any) {
  try {
    const formData = await req.formData();

    let filePath;
    const file = formData.get("thumbnail");
    const title = formData.get("title");
    const content = formData.get("content");
    const published = formData.get("published");
    const keywords = formData.get("keywords");
    const meta_title = formData.get("meta_title");

    if (file) {
      // Resize using Sharp

      filePath = `./public/${file.name}`;
      await pump(file.stream(), fs.createWriteStream(filePath));
      console.log(formData);
    } else {
      return NextResponse.json({ status: "error", data: "Image File not found" });
    }
    const post = await prisma.post.create({
      data: {
        image: `/${file.name}`,
        title,
        content,
        // published,
        // meta_title,
        // keywords,
      },
    });

    return NextResponse.json({ status: 201, post });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  } finally {
  }
}
