import fs from "node:fs";
import path from "node:path";

import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

type GetFileContext = { params: Promise<{ id: string }> };

export const GET = async (
  _: NextRequest,
  { params }: GetFileContext,
): Promise<NextResponse> => {
  const { id } = await params;

  const dataset = await prisma.dataset.findUnique({
    where: { id: parseInt(id) },
  });

  if (!dataset) {
    return NextResponse.json({ error: "idk" });
  }

  const filePath = path.join(process.env.DATASETS_PATH!, dataset.filename);

  const filename = `${dataset.title}.xlsx`;

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "not found" });
  }

  const fileBuffer = fs.readFileSync(filePath);

  const headers = new Headers();
  headers.set("Content-Type", "application/octet-stream");
  headers.set("Content-Disposition", `attachment; filename="${filename}"`);

  return new NextResponse(fileBuffer, { headers });
};
