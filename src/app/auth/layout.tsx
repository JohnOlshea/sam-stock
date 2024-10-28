import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full lg:grid lg:grid-cols-3 min-h-screen">
      {children}
    </div>
  )
}