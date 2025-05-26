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
  // مپ کردن variant به مقادیر border-radius (مستقیم بدون متغیر CSS)
  const radiusMap: Record<string, string> = {
    full: '100%',
    runded: '12px',
    square: '0px',
  };
const colors = [
    '#00a76f', // سبز تیره
    '#00b8d9', // فیروزه‌ای
    '#22c55e', // سبز روشن
    '#ff5630', // نارنجی
    '#1c252e', // خاکستری تیره
    '#dfe3e8', // خاکستری روشن
  ];
  // مپ کردن size به مقادیر پیکسلی (مستقیم بدون متغیر CSS)
  const sizeMap: Record<string, string> = {
    xs: '24px',
    sm: '32px',
    md:'40px',
    lg: '48px',
    xl: '56px',
    '2xl': '64px',
    '3xl': '80px',
    '4xl': '128px',
  };
const images = [
    'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-2.webp',
    'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-3.webp',
    'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-4.webp',
    'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-5.webp',
    'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-6.webp',
    'https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-11.webp'
  ];
  const selectedColor = colorIndex !== undefined ? colors[colorIndex % colors.length] : bgColor || 'transparent';
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

  // ترکیب کلاس‌ها
  const classNameValue = `${styles.avatar}${image ? ` ${styles['avatar--image']}` : ''}${className ? ` ${className}` : ''}`;

  return (
    <div className={classNameValue} style={avatarStyles}>
      {children}
    </div>
  );
};

export default Avatar;