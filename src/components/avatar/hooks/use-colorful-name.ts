import { COLORS, ColorType } from "@/types/color.type";

const COLORS_EXCEPT_INHERIT = COLORS.filter((x) => x !== "inherit");

export function useColorfulName(name?: string): {
  initials: string;
  color: ColorType;
} {
  if (!name) {
    return { initials: "", color: "error" };
  }

  const words = name.trim().replace(/\s+/g, " ").split(" ");
  const firstInitial = words[0][0];
  const secondInitial = words.length > 1 ? words[1][0] : "";
  const initials = `${firstInitial}${secondInitial}`.toUpperCase();

  const letterNumber = Math.min(Math.max(65, initials.charCodeAt(0)), 90);
  const colorIndex = letterNumber % COLORS_EXCEPT_INHERIT.length;
  const color = COLORS_EXCEPT_INHERIT[colorIndex];

  return { initials, color };
}
