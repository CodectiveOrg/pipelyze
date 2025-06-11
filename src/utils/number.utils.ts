export function byteToMegaByte(value: number): string {
  return (value / 1024 / 1024).toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
}
