import { NextRequest } from "next/server";

import { GetDatasetsSchema } from "@/app/api/dataset/route.schema";

import { Prisma } from "@/lib/generated/prisma";

import { getSearchParams } from "@/utils/api.utils";
import {
  addRangeFilter,
  addTextFilter,
} from "@/utils/prisma-where-clause.utils";

export function generateGetDatasetsWhereClause(
  req: NextRequest,
): Prisma.DatasetWhereInput {
  const params = GetDatasetsSchema.parse(getSearchParams(req));

  const whereClause: Prisma.DatasetWhereInput = {};

  addTextFilter(whereClause, {
    field: "title",
    value: params.title,
  });

  addRangeFilter(whereClause, {
    field: "size",
    value: [params.minSize, params.maxSize],
  });

  addRangeFilter(whereClause, {
    field: "createdAt",
    value: [params.minCreatedAt, params.maxCreatedAt],
  });

  addRangeFilter(whereClause, {
    field: "updatedAt",
    value: [params.minUpdatedAt, params.maxUpdatedAt],
  });

  return whereClause;
}
