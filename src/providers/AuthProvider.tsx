import { AuthContext } from '@/features/auth/contexts/AuthContext';
import React, { type ReactNode } from 'react';
// import { AuthContext } from '@/contexts/AuthContext';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user] = React.useState<User | null>(null);
  const [isLoading] = React.useState(false);

  const login = async (email: string, password: string) => {
    console.log('Login called with:', email, password);
  };

  const register = async (userData: unknown) => {
    console.log('Register called with:', userData);
  };

  const logout = async () => {
    console.log('Logout called');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};