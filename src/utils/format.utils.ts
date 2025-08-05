const DATA_STORAGE_UNITS = ["B", "KB", "MB", "GB", "TB"];

export const hourMinuteFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  hour12: false,
  hourCycle: "h23",
  minute: "2-digit",
});

export const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatFilenamePrefix(date: Date): string {
  const parts = [
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  ];

  return parts.map((x) => x.toString().padStart(2, "0")).join("");
}

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
