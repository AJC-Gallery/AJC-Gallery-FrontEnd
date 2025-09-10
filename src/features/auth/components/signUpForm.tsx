// // src/features/auth/components/SignUpForm.tsx
// import { SignUp } from "@clerk/clerk-react";
// import { CLERK_CONFIG } from "../../../lib/clerk";

// export const SignUpForm = () => {
//   return (
//     <div className="flex flex-col lg:flex-row w-full min-h-screen">
//       {/* Left side - Sign up form */}
//       <div className="flex-1 bg-gradient-to-br from-green-600 to-blue-700 flex items-center justify-center p-8 lg:p-12">
//         <div className="max-w-md text-white text-center lg:text-left">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//             Join Our Community
//           </h2>
//           <p className="text-green-100 text-lg mb-6">
//             Create your account and unlock amazing features.
//           </p>
//           <div className="hidden lg:block">
//             <div className="flex items-center space-x-2 mb-3">
//               <div className="w-2 h-2 bg-green-300 rounded-full"></div>
//               <span className="text-green-100">Free to get started</span>
//             </div>
//             <div className="flex items-center space-x-2 mb-3">
//               <div className="w-2 h-2 bg-green-300 rounded-full"></div>
//               <span className="text-green-100">
//                 Instant access to dashboard
//               </span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 bg-green-300 rounded-full"></div>
//               <span className="text-green-100">24/7 support available</span>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Right side - Form section */}
//       <div className="flex-1 bg-gray-50">
//         <div className="min-h-full flex flex-col items-center justify-center p-6 lg:p-12">
//           <div className="w-full max-w-md">
//             <div className="text-center mb-8">
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                 Create Account
//               </h1>
//               <p className="text-gray-600">
//                 Join us and start your journey today
//               </p>
//             </div>
            
//             {/* Clerk SignUp Component with enhanced styling */}
//             <div className="flex justify-center">
//                     <SignUp
//                     signInUrl={CLERK_CONFIG.signInUrl}
//             appearance={{
//               elements: {
//                 rootBox: "w-full",
//                 card: "shadow-lg border-0 w-full",
//                 headerTitle: "hidden",
//                 headerSubtitle: "hidden",
                
//               },
//             }}
//           />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// src/features/auth/components/SignUpForm.tsx
import { SignUp } from "@clerk/clerk-react";
import { CLERK_CONFIG } from "../../../lib/clerk";

export const SignUpForm = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Left side - Sign up form */}
      <div className="flex-1 bg-gradient-to-br from-blue-900 via-black to-black flex items-center justify-center p-8 lg:p-12">
        <div className="max-w-md text-white text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-green-100 text-lg mb-6">
            Create your account and unlock amazing features.
          </p>
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span className="text-green-100">Free to get started</span>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span className="text-green-100">
                Instant access to dashboard
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span className="text-green-100">24/7 support available</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Form section */}
      <div className="flex-1 bg-gray-50">
        <div className="min-h-full flex flex-col items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Create Account
              </h1>
              <p className="text-gray-600">
                Join us and start your journey today
              </p>
            </div>
            
            {/* Clerk SignUp Component with enhanced styling */}
            <div className="flex justify-center">
                    <SignUp
                    signInUrl={CLERK_CONFIG.signInUrl}
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-lg border-0 w-full",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                
              },
            }}
          />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
