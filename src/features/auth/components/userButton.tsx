
// src/features/auth/components/UserButton.tsx
import { UserButton as ClerkUserButton } from '@clerk/clerk-react';

export const UserButton = () => {
  return (
    <ClerkUserButton 
      appearance={{
        elements: {
          avatarBox: "w-10 h-10"
          
        }
      }}
      afterSignOutUrl="/"
    />
  );
};
