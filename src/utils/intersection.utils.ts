export function getIntersection<T>(
  selectedItems: readonly T[],
  totalItems: readonly T[],
): T[] {
  return selectedItems.filter((value) => totalItems.includes(value));
}
