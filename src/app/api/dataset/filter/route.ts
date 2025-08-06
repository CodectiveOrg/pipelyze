import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";

type Dataset = { id: number; filename: string; title: string | null };
type Body = { page: number; size: number };
type Res = Promise<
  NextResponse<
    | { result: { datasets: Dataset[]; pagesCount: number; page: number } }
    | { error: string }
  >
>;

export const POST = async (req: NextRequest): Res => {
  const { page, size }: Body = await req.json();

  if (page < 1) {
    return NextResponse.json({ error: "Invalid page number" }, { status: 400 });
  }

  try {
    const datasets = await prisma.dataset.findMany({
      take: size,
      skip: (page - 1) * size,
    });

    const datasetsCount = await prisma.dataset.count();
    const pagesCount = Math.ceil(datasetsCount / size);

    const result = {
      datasets,
      pagesCount: pagesCount,
      page,
    };

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong.", status: 500 });
  }
};
