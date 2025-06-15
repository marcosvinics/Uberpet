import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div
      className={`min-h-screen w-full bg-transparent max-w-[1440px] mx-auto px-4 py-8 overflow-x-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;