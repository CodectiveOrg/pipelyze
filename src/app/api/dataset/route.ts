import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

import { NextRequest, NextResponse } from "next/server";

import { dateToFilenamePrefix } from "@/utils/date.utils";

type Res = Promise<NextResponse<{ message: string } | { error: string }>>;

export const POST = async (req: NextRequest): Res => {
  const formData = await req.formData();

  const file = formData.get("dataset");

  if (!file) {
    return NextResponse.json(
      { error: "Dataset is required." },
      { status: 400 },
    );
  }

  if (typeof file === "string") {
    return NextResponse.json(
      { error: "Dataset has to be a file." },
      { status: 400 },
    );
  }

  let title = formData.get("title");

  if (typeof title !== "string") {
    return NextResponse.json(
      { error: "Title has to be a string." },
      { status: 400 },
    );
  }

  title = title.trim();
  if (!title) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }

  const filename = dateToFilenamePrefix(new Date()) + "-" + crypto.randomUUID();
  const fileExtension = file.name.split(".").pop();

  const filePath = path.join(
    process.env.DATASETS_PATH!,
    filename + "." + fileExtension,
  );

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({
      message: "File successfully imported.",
      status: 201,
    });
  } catch (error) {
    console.error("An error has been occurred.");
    console.error(error);

    return NextResponse.json({ error: "Something went wrong.", status: 500 });
  }
};
