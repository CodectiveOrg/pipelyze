export default function formatTimeToHMA(dateString: string) {
  const date = new Date(dateString);

  let hours = date.getHours();

  const minutes = String(date.getMinutes()).padStart(2, "0");

  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes} ${ampm}`;
}
