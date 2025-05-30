import styles from "./avatar.module.css";

export interface AvatarProps {
  variant?: "full" | "md" | "square";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  imageIndex?: "0" | "1" | "2" | "3" | "4" | "5";
  colorIndex?: number;
  children?: React.ReactNode;
}
const Avatar: React.FC<AvatarProps> = ({
  variant = "full",
  imageIndex,
  colorIndex,
  size = "lg",
  children,
}) => {
  const radiusMap: Record<string, string> = {
    full: styles.radiusfull,
    md: styles.radiusmd,
    square: styles.radiussquare,
  };
  const colors = [
    "bgGreen700",
    "bgTeal500",
    "bgGreen400",
    "bgOrange500",
    "bgGrey800",
    "bgGrey100",
  ];
  const sizeMap: Record<string, string> = {
    xs: styles.sizeXs,
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
    xl: styles.sizeXl,
    "2xl": styles.size2xl,
    "3xl": styles.size3xl,
    "4xl": styles.size4xl,
  };
  const imageMap: Record<string, string> = {
    0: styles.image0,
    1: styles.image1,
    2: styles.image2,
    3: styles.image3,
    4: styles.image4,
    5: styles.image5,
  };
  const colorMap: Record<number, string> = {};
  colors.forEach((color, index) => {
    colorMap[index] = styles[color];
  });
  const variantClass = radiusMap[variant];
  const sizeclass = sizeMap[size];
  const imageClass =
    imageIndex && imageIndex in imageMap ? imageMap[imageIndex] : "";
  const colorClass =
    !imageClass && colorIndex !== undefined
      ? colorMap[colorIndex % colors.length] || ""
      : "";
  return (
    <div className={`${sizeclass} ${imageClass} ${variantClass} ${colorClass}`}>
      {children}
    </div>
  );
};
export default Avatar;
