import { ResponseDto } from "@/dto/response/response.dto";

export type GetFileResponseDto = ResponseDto<{
  file: Buffer;
}>;
