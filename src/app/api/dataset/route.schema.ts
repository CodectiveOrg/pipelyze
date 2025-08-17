import { z } from "zod";
import { zfd } from "zod-form-data";

export const GetDatasetsSchema = z.object({
  title: z.string().optional(),
  minSize: z.coerce.number().int().positive().optional(),
  maxSize: z.coerce.number().int().positive().optional(),
  minCreatedAt: z.coerce.date().optional(),
  maxCreatedAt: z.coerce.date().optional(),
  minUpdatedAt: z.coerce.date().optional(),
  maxUpdatedAt: z.coerce.date().optional(),
  sortField: z.string().optional(),
  sortMode: z.union([z.literal("asc"), z.literal("desc")]).default("asc"),
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().default(10),
});

export const CreateDatasetSchema = zfd.formData({
  file: zfd.file(),
  title: zfd.text(z.string().trim()),
});
