 
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthGuard,SignInForm, SignUpForm } from '../features/auth';
// import { AuthLayout } from '../layouts/AuthLayout';
// import { Dashboard } from '../pages/dashboard';
// import { AppLayout } from '../layouts/AppLayout';
// import { Home } from '../pages/HomePage';
// import { Dashboard } from '../features/dashboard/pages/DashboardPage';
import { HomePage } from '@/pages/HomePage';
import Dashboard from '@/features/dashboard/pages/DashboardPage';
import { AppLayout } from '@/layouts/appLayout';
import { AuthLayout } from '@/layouts/authLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Home Route */}
      <Route path="/" element={<HomePage />} />
      
      {/* Auth Routes - Keep your existing auth pages */}
      {/* te */}
      <Route 
        path="/login" 
        element={
             <AuthLayout>
              <SignInForm />
            </AuthLayout>
         } 
      />
      
      <Route 
        path="/register" 
        element={
          <AuthGuard redirectTo="/dashboard">
            <AuthLayout>
              <SignUpForm />
            </AuthLayout>
            
          </AuthGuard>

        } 
      />
      
      {/* Protected Routes -  */}
      <Route 
        path="/dashboard" 
        element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
        } 
      />
      
      {/* Add more protected routes as needed */}
      <Route 
        path="/profile" 
        element={
            <AppLayout>
              <div>Profile Page</div>
            </AppLayout>
        } 
      />
      
      <Route 
        path="/settings" 
        element={
            <AppLayout>
              <div>Settings Page</div>
            </AppLayout>
        } 
      />
      
      {/* Catch all route - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};