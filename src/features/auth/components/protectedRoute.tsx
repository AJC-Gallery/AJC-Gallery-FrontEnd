// src/features/auth/components/ClerkProtectedRoute.tsx
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import type { ReactNode } from 'react';
// import { ReactNode } from 'react';

interface ClerkProtectedRouteProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export const ClerkProtectedRoute = ({ 
  children, 
  fallback = <RedirectToSignIn /> 
}: ClerkProtectedRouteProps) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>{fallback}</SignedOut>
    </>
  );
};