export function getDifference<T>(
  totalItems: readonly T[],
  otherItems: readonly T[],
): T[] {
  return totalItems.filter((value) => !otherItems.includes(value));
}
