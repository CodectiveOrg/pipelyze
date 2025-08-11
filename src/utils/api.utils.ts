import { NextResponse } from "next/server";

import { z } from "zod";

import { ResponseDto } from "@/dto/response/response.dto";

import { ApiError } from "@/errors/api.error";

export async function tryCatch<TResult = void>(
  successStatus: number,
  callback: () => Promise<ResponseDto<TResult>>,
): Promise<NextResponse<ResponseDto<TResult>>> {
  try {
    const result = await callback();
    return NextResponse.json(result, { status: successStatus });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: err.message,
          error: "Bad Request",
        },
        { status: 400 },
      );
    } else if (err instanceof ApiError) {
      console.log(err);

      return NextResponse.json(
        {
          message: err.message,
          error: err.error,
        },
        { status: err.status },
      );
    } else if (err instanceof NextResponse) {
      return err;
    } else if (err instanceof Error) {
      return NextResponse.json(
        {
          message: err.message,
          error: "Internal Server Error",
        },
        { status: 500 },
      );
    } else if (typeof err === "string") {
      return NextResponse.json(
        {
          message: err,
          error: "Internal Server Error",
        },
        { status: 500 },
      );
    } else {
      return NextResponse.json(
        {
          message: "Unknown Error",
          error: "Internal Server Error",
        },
        { status: 500 },
      );
    }
  }
}
