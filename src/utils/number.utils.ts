const DATA_STORAGE_UNITS = ["B", "KB", "MB", "GB", "TB"];

export function formatFileSize(bytes: number): string {
  if (bytes < 0) {
    return "Invalid size";
  }

  const index = Math.floor(log(bytes, 1000));
  const size = bytes / Math.pow(1000, index);

  const formatter = new Intl.NumberFormat("en-US", {
    roundingMode: "trunc",
    maximumFractionDigits: 1,
  });

  return `${formatter.format(size)} ${DATA_STORAGE_UNITS[index]}`;
}

function log(n: number, base: number = 10): number {
  return Math.log(n) / Math.log(base);
}
