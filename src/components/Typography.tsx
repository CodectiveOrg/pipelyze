import styles from "../styles/typography.module.css";

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'button' | 'overline' | 'body1' | 'body2'|'caption' ;

type PropsTypography = {
    variant: Variant;
    children: React.ReactNode;
    className: string;
  };

const Typography: React.FC<PropsTypography> = ({variant,children,className}) => {
    return (zzz)
};

export default Typography;