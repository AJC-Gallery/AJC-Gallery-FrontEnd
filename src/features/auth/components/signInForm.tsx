// // src/features/auth/components/SignInForm.tsx
// import { SignIn } from "@clerk/clerk-react";
// import { CLERK_CONFIG } from "../../../lib/clerk";

// export const SignInForm = () => {
//   return (
//     <div className="flex w-full min-h-screen">
//       {/* Left side - Brand/Info section */}
//       <div className="flex-1  bg-gradient-to-br from-green-600 to-blue-700 flex items-center justify-center p-8 lg:p-12">
//         <div className="text-white text-center lg:text-left max-w-md">
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

//       {/* Right side - Sign in form */}
//       <div className="flex-2 flex items-center justify-center p-6 lg:p-12 bg-gray-50">
//         <div className="w-full max-w-md">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
//           </div>
//           <SignIn
//             signUpUrl={CLERK_CONFIG.signUpUrl}
//             appearance={{
//               elements: {
//                 rootBox: "mx-auto",
//                 card: "shadow-lg border-0 w-full",
//               },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };



// src/features/auth/components/SignInForm.tsx
import { SignIn } from "@clerk/clerk-react";
import { CLERK_CONFIG } from "../../../lib/clerk";

export const SignInForm = () => {
  return (
    <div className="flex w-full min-h-screen">
      {/* Left side - Brand/Info section */}
      <div className="flex-1 bg-gradient-to-br from-blue-900 via-black to-black flex items-center justify-center p-8 lg:p-12">
        <div className="text-white text-center lg:text-left max-w-md">
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

      {/* Right side - Sign in form */}
      <div className="flex-2 flex items-center justify-center p-6 lg:p-12 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          </div>
          <SignIn
            signUpUrl={CLERK_CONFIG.signUpUrl}
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-lg border-0 w-full",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
