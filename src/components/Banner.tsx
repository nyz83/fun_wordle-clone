import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BannerProps {
  status: string;
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ status, children }: BannerProps) => {
  const className = twMerge(
    'fixed right-12 bottom-16 w-full max-w-72 mx-auto p-4 text-center will-change-transform animate-slideUp',
    status,
  );

  return <div className={className}>{children}</div>;
};

export default Banner;
