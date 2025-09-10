// src/lib/clerk.ts
export const CLERK_CONFIG = {
  publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
  signInUrl: '/sign-in',
  signUpUrl: '/sign-up',
//   afterSignInUrl: '/dashboard',
//   afterSignUpUrl: '/dashboard',
    signUpFallbackRedirectUrl: "/dashboard",
        signInFallbackRedirectUrl: "/dashboard"


};

// Ensure the publishable key is available
if (!CLERK_CONFIG.publishableKey) {
  throw new Error('Missing Publishable Key');
}

// Navigation configuration for Clerk components
export const CLERK_APPEARANCE = {
  elements: {
    formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
    card: "shadow-lg",
    headerTitle: "text-2xl font-bold",
    headerSubtitle: "text-gray-600"
  }
};