// src/layouts/AppLayout.tsx
import { Outlet } from 'react-router-dom';
// import { UserButton } from '../features/auth';
import type { ReactNode } from 'react';
import { UserButton } from '@/components/common/UserButton';

interface AppLayoutProps {
  children?: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen   bg-gradient-to-br from-blue-900 py-2 via-black to-black text-white">
      {/* Navigation Header */}
      <header className="  shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl text-white font-bold text-gray-900">
AJC GALLERY              </h1>
            </div>
            
            <div className="flex  items-center space-x-4">
              <UserButton />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children || <Outlet />}
      </main>
    </div>
  );
};
