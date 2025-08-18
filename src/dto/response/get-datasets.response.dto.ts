import { ResponseDto } from "@/dto/response/response.dto";

import { Dataset } from "@/lib/generated/prisma";

export type GetDatasetsResponseDto = ResponseDto<{
  datasets: Dataset[];
  totalPages: number;
}>;
