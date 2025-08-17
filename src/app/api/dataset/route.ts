import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

import { NextRequest } from "next/server";

import { z } from "zod";
import { zfd } from "zod-form-data";

import { GetDatasetsResponseDto } from "@/dto/response/get-datasets.response.dto";
import { ResponseDto } from "@/dto/response/response.dto";

import prisma from "@/lib/prisma";

import { getSearchParams, withTryCatch } from "@/utils/api.utils";
import { formatFilenamePrefix } from "@/utils/format.utils";

export const GET = withTryCatch(
  async (req: NextRequest): Promise<GetDatasetsResponseDto> => {
    const { page, pageSize } = GetSchema.parse(getSearchParams(req));

    const datasets = await prisma.dataset.findMany({
      take: pageSize,
      skip: (page - 1) * pageSize,
    });

    const datasetsCount = await prisma.dataset.count();
    const totalPages = Math.ceil(datasetsCount / pageSize);

    return {
      message: "Datasets fetched successfully.",
      result: { datasets, totalPages },
    };
  },
);

export const POST = withTryCatch(
  async (req: NextRequest): Promise<ResponseDto> => {
    const { file, title } = PostSchema.parse(await req.formData());

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

    return { message: "Dataset imported successfully." };
  },
);

const GetSchema = z.object({
  page: z.coerce.number().positive().default(1),
  pageSize: z.coerce.number().positive().default(10),
});

const PostSchema = zfd.formData({
  file: zfd.file(),
  title: zfd.text(z.string().trim()),
});
