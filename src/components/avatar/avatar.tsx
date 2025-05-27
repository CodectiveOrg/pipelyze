import React from 'react';
import styles from '../../styles/avatar.module.css';

export interface AvatarProps {
  variant?: 'full' | 'runded' | 'square';
  size?: 'xs' | 'sm' | 'md'|'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  image?: string;
  bgColor?: string;
  className?: string;
  imageIndex?: number;
  colorIndex?: number;
  children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({
  variant = 'full',
  className,
  bgColor,
  image,
imageIndex,
colorIndex,
  size = 'lg',
  children,
}) => {

  const radiusMap: Record<string, string> = {
    full: '100%',
    runded: '0.75rem',
    square: '0rem',
  };
const colors = [
    'green-700', 
    'teal-500', 
    'green-400', 
    'orange-500', 
    'gray-800', 
    'gray-100',
  ];
  
  const sizeMap: Record<string, string> = {
  xs: '1.5rem',     
  sm: '2rem',       
  md: '2.5rem',     
  lg: '3rem',       
  xl: '3.5rem',     
  '2xl': '4rem',    
  '3xl': '5rem',    
  '4xl': '8rem',    
  };
const images = [
    'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-2.webp',
    'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-3.webp',
    'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-4.webp',
    'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-5.webp',
    'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-6.webp',
    'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-11.webp'
  ];
  const selectedColor = colorIndex !== undefined ? 
      colors[colorIndex % colors.length] 
      : 
      bgColor || 'green-400';


  const selectedImage = imageIndex !== undefined && images[imageIndex] ? images[imageIndex] : image || 'none';
  // استایل‌های اینلاین
  const avatarStyles: React.CSSProperties = {
    borderRadius: radiusMap[variant] || radiusMap.full,
    width: sizeMap[size] || sizeMap.lg,
    height: sizeMap[size] || sizeMap.lg,
    backgroundColor: selectedColor,
    backgroundImage: selectedImage !== 'none' ? `url(${selectedImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

const classNames: string[] = [styles.avatar];


if (selectedColor) {
  classNames.push(styles[selectedColor]); 
}


const classNameValue = classNames.join(' ');

  return (
    <div className={classNameValue} style={avatarStyles}>
      {children}
    </div>
  );
};

export default Avatar;