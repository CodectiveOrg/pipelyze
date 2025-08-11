import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

import { NextRequest, NextResponse } from "next/server";

import { ResponseDto } from "@/dto/response/response.dto";

import { ApiError } from "@/errors/api.error";

import prisma from "@/lib/prisma";

import { tryCatch } from "@/utils/api.utils";
import { formatFilenamePrefix } from "@/utils/format.utils";

export async function POST(
  req: NextRequest,
): Promise<NextResponse<ResponseDto>> {
  return tryCatch(201, async () => {
    const formData = await req.formData();

    const file = formData.get("dataset");

    if (!file) {
      throw new ApiError("Dataset is required.", 400);
    }

    if (typeof file === "string") {
      throw new ApiError("Dataset has to be a file.", 400);
    }

    let title = formData.get("title");

    if (typeof title !== "string") {
      throw new ApiError("Title has to be a string.", 400);
    }

    title = title.trim();
    if (!title) {
      throw new ApiError("Title is required.", 400);
    }

    const filename =
      formatFilenamePrefix(new Date()) + "-" + crypto.randomUUID();
    const fileExtension = file.name.split(".").pop();
    const filenameWithExtension = filename + "." + fileExtension;

    const filePath = path.join(
      process.env.DATASETS_PATH!,
      filenameWithExtension,
    );

    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    await prisma.dataset.create({
      data: { filename: filenameWithExtension, title },
    });

    return { message: "File successfully imported." };
  });
}
