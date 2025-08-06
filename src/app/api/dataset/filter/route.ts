import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

type Body = { page: number; take: number };

export const POST = async (req: NextRequest) => {
  const { page, take }: Body = await req.json();

  if (page < 1) {
    return NextResponse.json({ error: "Invalid page number" }, { status: 400 });
  }

  const skip = (page - 1) * take;

  const count = await prisma.dataset.count();
  const records = await prisma.dataset.findMany({ take, skip });

  const pagesCount = Math.ceil(count / take);

  const data = {
    data: records,
    first: pagesCount && 1,
    last: pagesCount,
    currentPage: page,
  };

  return NextResponse.json({ data }, { status: 200 });
};
