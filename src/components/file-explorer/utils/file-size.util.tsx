const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB"];

export default function formatFileSize(bytes: number): string {
  if (bytes < 0) return "Invalid size";

  let size = bytes;

  let unitIndex = 0;

  while (size >= 1000 && unitIndex < units.length - 1) {
    size = size / 1000;
    unitIndex++;
  }

  return `${size.toFixed(1)} ${units[unitIndex]}`;
}
