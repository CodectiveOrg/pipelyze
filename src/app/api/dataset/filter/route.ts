import { NextRequest, NextResponse } from "next/server";

import { z } from "zod";

import { GetDatasetsResponseDto } from "@/dto/response/get-datasets.response.dto";

import prisma from "@/lib/prisma";

import { tryCatch } from "@/utils/api.utils";

export const POST = async (
  req: NextRequest,
): Promise<NextResponse<GetDatasetsResponseDto>> => {
  return await tryCatch(200, async () => {
    const { page, pageSize } = PostSchema.parse(await req.json());

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
  });
};

const PostSchema = z.object({
  page: z.number().positive(),
  pageSize: z.number().positive(),
});
