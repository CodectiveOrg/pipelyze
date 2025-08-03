export function formatTimeToHMA(dateString: string): string {
  const date = new Date(dateString);

  let hours = date.getHours();

  const minutes = String(date.getMinutes()).padStart(2, "0");

  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes} ${ampm}`;
}

export function formatDateToYMD(dateString: string): string {
  const date = new Date(dateString);

  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
