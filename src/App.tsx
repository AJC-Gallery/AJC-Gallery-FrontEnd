// src/App.tsx
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';
// import { AppRoutes } from './routes/AppRoutes';
import { CLERK_CONFIG } from './lib/clerk';
import './App.css';
import { AppRoutes } from './routes/appRoutes';

function App() {
  return (
<ClerkProvider 
  publishableKey={CLERK_CONFIG.publishableKey}
  signInFallbackRedirectUrl={CLERK_CONFIG.signInFallbackRedirectUrl}
  signUpFallbackRedirectUrl={CLERK_CONFIG.signUpFallbackRedirectUrl}
>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;