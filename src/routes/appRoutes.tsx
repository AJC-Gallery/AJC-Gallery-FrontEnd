 
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthGuard, ClerkProtectedRoute, SignInForm, SignUpForm } from '../features/auth';
import { AuthLayout } from '../layouts/authLayout';
import { Dashboard } from '../pages/dashboard';
import { AppLayout } from '../layouts/appLayout';
import { Home } from '../pages/home';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Home Route */}
      <Route path="/" element={<Home />} />
      
      {/* Auth Routes - Keep your existing auth pages */}
      <Route 
        path="/sign-in" 
        element={
          <AuthGuard redirectTo="/dashboard">
            <AuthLayout>
              <SignInForm />
            </AuthLayout>
          </AuthGuard>
        } 
      />
      
      <Route 
        path="/sign-up" 
        element={
          <AuthGuard redirectTo="/dashboard">
            <AuthLayout>
              <SignUpForm />
            </AuthLayout>
          </AuthGuard>
        } 
      />
      
      {/* Protected Routes - Now using ClerkProtectedRoute */}
      <Route 
        path="/dashboard" 
        element={
          <ClerkProtectedRoute>
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </ClerkProtectedRoute>
        } 
      />
      
      {/* Add more protected routes as needed */}
      <Route 
        path="/profile" 
        element={
          <ClerkProtectedRoute>
            <AppLayout>
              <div>Profile Page</div>
            </AppLayout>
          </ClerkProtectedRoute>
        } 
      />
      
      <Route 
        path="/settings" 
        element={
          <ClerkProtectedRoute>
            <AppLayout>
              <div>Settings Page</div>
            </AppLayout>
          </ClerkProtectedRoute>
        } 
      />
      
      {/* Catch all route - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};