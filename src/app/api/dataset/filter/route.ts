import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

type Records = { id: number; filename: string; title: string | null }[];
type Body = { page: number; take: number };
type Res = Promise<
  NextResponse<
    | {
        data: {
          data: Records;
          first: number;
          last: number;
          currentPage: number;
        };
      }
    | { error: string }
  >
>;

export const POST = async (req: NextRequest): Res => {
  const { page, take }: Body = await req.json();

  if (page < 1) {
    return NextResponse.json({ error: "Invalid page number" }, { status: 400 });
  }

  const skip = (page - 1) * take;

  try {
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
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong.", status: 500 });
  }
};
