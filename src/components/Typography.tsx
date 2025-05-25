type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "button"
  | "overline"
  | "body1"
  | "body2"
  | "caption";

interface PropsTypography {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

const Typography = ({ variant, children, className }: PropsTypography) => {

  const variantClass = variant;

  return <div className={`${variantClass} ${className || ""}`}>{children}</div>;
};

export default Typography;
