
// hooks/useAuth.ts
// import { useContext } from 'react';
// import { AuthContext, AuthContextType } from '@/contexts/AuthContext';

import { AuthContext, type AuthContextType } from "@/features/auth/contexts/AuthContext";
import { useContext } from "react";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

