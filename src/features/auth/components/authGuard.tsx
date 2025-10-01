// src/features/auth/components/AuthGuard.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

interface AuthGuardProps {
  children: React.ReactNode;
  redirectTo: string;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children, redirectTo }) => {
  // For now, always show children (no authentication check)
  // Will implement proper auth checking in Phase 2
  const isAuthenticated = false; // Temporary
  
  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};