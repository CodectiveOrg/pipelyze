import fs from "node:fs";
import path from "node:path";

import { NextRequest } from "next/server";

import { GetFileResponseDto } from "@/dto/response/get-file.response.dto";

import prisma from "@/lib/prisma";

import { withTryCatch } from "@/utils/api.utils";

type GetFileContext = { params: Promise<{ id: string }> };

export const GET = withTryCatch(
  async (
    _: NextRequest,
    { params }: GetFileContext,
  ): Promise<GetFileResponseDto> => {
    const { id } = await params;

    const dataset = await prisma.dataset.findUnique({
      where: { id: parseInt(id) },
    });

    if (!dataset) {
      return {
        message: "File doesn't exist.",
      };
    }

    const filePath = path.join(process.env.DATASETS_PATH!, dataset.filename);

    const filename = `${dataset.title}.xlsx`;

    if (!fs.existsSync(filePath)) {
      return {
        message: "Not found.",
      };
    }

    const fileBuffer = fs.readFileSync(filePath);

    const headers = new Headers();
    headers.set("Content-Type", "application/octet-stream");
    headers.set("Content-Disposition", `attachment; filename="${filename}"`);

    return {
      message: "File is ready to download.",
      result: { file: fileBuffer, headers },
    };
  },
);
