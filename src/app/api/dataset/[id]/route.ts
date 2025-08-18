import fs from "node:fs/promises";
import path from "node:path";

import { GetFileResponseDto } from "@/dto/response/get-file.response.dto";

import prisma from "@/lib/prisma";

import { withTryCatch } from "@/utils/api.utils";

export const GET = withTryCatch(
  async ({
    params,
  }: {
    params: { id: string };
  }): Promise<GetFileResponseDto> => {
    const { id } = params;

    const dataset = await prisma.dataset.findFirst({
      where: { id: parseInt(id) },
    });

    const filePath = path.join(process.env.DATASETS_PATH!, dataset!.filename);

    const buffer = await fs.readFile(filePath);

    return {
      message: "File fetched successfully.",
      result: { file: buffer },
    };
  },
);
