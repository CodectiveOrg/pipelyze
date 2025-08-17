import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

import { NextRequest } from "next/server";

import {
  CreateDatasetSchema,
  GetDatasetsSchema,
} from "@/app/api/dataset/route.schema";
import { generateGetDatasetsWhereClause } from "@/app/api/dataset/route.utils";

import { GetDatasetsResponseDto } from "@/dto/response/get-datasets.response.dto";
import { ResponseDto } from "@/dto/response/response.dto";

import prisma from "@/lib/prisma";

import { getSearchParams, withTryCatch } from "@/utils/api.utils";
import { formatFilenamePrefix } from "@/utils/format.utils";

export const GET = withTryCatch(
  async (req: NextRequest): Promise<GetDatasetsResponseDto> => {
    const { page, pageSize } = GetDatasetsSchema.parse(getSearchParams(req));

    const whereClause = generateGetDatasetsWhereClause(req);

    const datasets = await prisma.dataset.findMany({
      where: whereClause,
      take: pageSize,
      skip: (page - 1) * pageSize,
    });

    const datasetsCount = await prisma.dataset.count({
      where: whereClause,
    });

    const totalPages = Math.ceil(datasetsCount / pageSize);

    return {
      message: "Datasets fetched successfully.",
      result: { datasets, totalPages },
    };
  },
);

export const POST = withTryCatch(
  async (req: NextRequest): Promise<ResponseDto> => {
    const { file, title } = CreateDatasetSchema.parse(await req.formData());

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
      data: { filename: filenameWithExtension, title, size: file.size },
    });

    return { message: "Dataset imported successfully." };
  },
);
