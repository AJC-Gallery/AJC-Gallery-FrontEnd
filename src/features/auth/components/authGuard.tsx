
// src/features/auth/components/AuthGuard.tsx
import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import type { ProtectedRouteProps } from '../../../types/auth';

interface AuthGuardProps extends ProtectedRouteProps {
  redirectTo?: string;
  requireAuth?: boolean;
}

export const AuthGuard = ({ 
  children, 
  redirectTo = '/dashboard', 
  requireAuth = false 
}: AuthGuardProps) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If user is signed in and we're on auth pages, redirect to dashboard
  if (isSignedIn && !requireAuth) {
    return <Navigate to={redirectTo} replace />;
  }

  // If user is not signed in and we require auth, redirect to sign in
  if (!isSignedIn && requireAuth) {
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
};