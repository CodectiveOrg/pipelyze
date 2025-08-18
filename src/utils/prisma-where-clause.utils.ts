/* eslint-disable @typescript-eslint/no-explicit-any */

type TextFilter = {
  field: string;
  value: string | undefined;
};

export function addTextFilter(
  whereClause: Record<string, any>,
  filter: TextFilter,
): void {
  if (filter.value) {
    whereClause[filter.field] = {
      contains: filter.value,
      mode: "insensitive",
    };
  }
}

type RangeFilter = {
  field: string;
  value: [number | Date | undefined, number | Date | undefined];
};

export function addRangeFilter(
  whereClause: Record<string, any>,
  filter: RangeFilter,
): void {
  if (filter.value[0] !== undefined || filter.value[1] !== undefined) {
    whereClause[filter.field] = {};

    if (filter.value[0] !== undefined) {
      whereClause[filter.field].gte = filter.value[0];
    }

    if (filter.value[1] !== undefined) {
      whereClause[filter.field].lte = filter.value[1];
    }
  }
}
