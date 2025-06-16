import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div
      className={`min-vh-100 w-100 bg-transparent container px-4 py-4 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;