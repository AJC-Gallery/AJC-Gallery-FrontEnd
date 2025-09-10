// // src/pages/Home.tsx
// import { useAuth } from '@clerk/clerk-react';
// import { Link } from 'react-router-dom';
// import { 
//   ArrowRight, 
//   TrendingUp, 
//   Brain, 
//   BarChart3, 
//   Shield, 
//   Zap, 
//   Users,
//   CheckCircle,
//   Star
// } from 'lucide-react';

// export const Home = () => {
//   const { isSignedIn } = useAuth();

//   const features = [
//     {
//       icon: <Brain className="w-8 h-8" />,
//       title: "AI-Powered Analytics",
//       description: "Advanced machine learning algorithms analyze market patterns and provide intelligent trading insights."
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Real-Time Market Data",
//       description: "Get instant access to live market data and price movements across multiple exchanges."
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Secure & Reliable",
//       description: "Bank-grade security with encrypted data transmission and secure wallet connections."
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: "Advanced Charting",
//       description: "Professional-grade charts with technical indicators and customizable trading views."
//     }
//   ];

//   const benefits = [
//     "Reduce trading risks with AI-powered insights",
//     "Save time with automated market analysis",
//     "Access institutional-grade trading tools",
//     "Get 24/7 market monitoring and alerts"
//   ];

//   const stats = [
//     { label: "Active Traders", value: "10K+" },
//     { label: "Success Rate", value: "94%" },
//     { label: "Markets Covered", value: "50+" },
//     { label: "AI Accuracy", value: "98%" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       {/* Navigation */}
//       <nav className="relative z-10 px-6 py-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
//               <Brain className="w-5 h-5 text-white" />
//             </div>
//             <span className="text-xl font-bold text-white">Tradion AI</span>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             {isSignedIn ? (
//               <Link
//                 to="/dashboard"
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition duration-200"
//               >
//                 Dashboard
//               </Link>
//             ) : (
//               <>
//                 <Link
//                   to="/sign-in"
//                   className="text-gray-300 hover:text-white px-4 py-2 rounded-lg transition duration-200"
//                 >
//                   Sign In
//                 </Link>
//                 <Link
//                   to="/sign-up"
//                   className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition duration-200"
//                 >
//                   Get Started
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative px-6 py-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
//               <Zap className="w-4 h-4 text-blue-400" />
//               <span className="text-blue-400 text-sm font-medium">AI-Powered Trading Platform</span>
//             </div>
            
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//               Trade Smarter with
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
//                 Artificial Intelligence
//               </span>
//             </h1>
            
//             <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
//               Harness the power of advanced AI algorithms to make informed trading decisions. 
//               Get real-time market insights, automated analysis, and professional-grade tools 
//               in one powerful platform.
//             </p>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
//               {isSignedIn ? (
//                 <Link
//                   to="/dashboard"
//                   className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center space-x-2"
//                 >
//                   <span>Access Dashboard</span>
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               ) : (
//                 <>
//                   <Link
//                     to="/sign-up"
//                     className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center space-x-2"
//                   >
//                     <span>Start Trading Now</span>
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </Link>
                  
//                   <Link
//                     to="/sign-in"
//                     className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition duration-300"
//                   >
//                     Sign In
//                   </Link>
//                 </>
//               )}
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-3xl md:text-4xl font-bold text-white mb-2">
//                     {stat.value}
//                   </div>
//                   <div className="text-gray-400 text-sm">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Background decorations */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="px-6 py-20 bg-white/5 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-6">
//               Why Choose Tradion AI?
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Discover the features that make our platform the preferred choice for smart traders worldwide.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//             {features.map((feature, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition duration-300 group"
//               >
//                 <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="px-6 py-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-white mb-6">
//                 Transform Your Trading Experience
//               </h2>
//               <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//                 Join thousands of traders who have already discovered the power of AI-driven market analysis. 
//                 Our platform combines cutting-edge technology with intuitive design to give you the edge you need.
//               </p>
              
//               <div className="space-y-4 mb-8">
//                 {benefits.map((benefit, index) => (
//                   <div key={index} className="flex items-center space-x-3">
//                     <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
//                     <span className="text-gray-300">{benefit}</span>
//                   </div>
//                 ))}
//               </div>

//               {!isSignedIn && (
//                 <Link
//                   to="/sign-up"
//                   className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition duration-300"
//                 >
//                   <span>Get Started Today</span>
//                   <ArrowRight className="w-5 h-5" />
//                 </Link>
//               )}
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
//                       <TrendingUp className="w-6 h-6 text-green-400" />
//                     </div>
//                     <div>
//                       <div className="text-white font-semibold">Portfolio Performance</div>
//                       <div className="text-green-400 text-sm">+24.5% this month</div>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
//                       <Users className="w-6 h-6 text-blue-400" />
//                     </div>
//                     <div>
//                       <div className="text-white font-semibold">Community Insights</div>
//                       <div className="text-blue-400 text-sm">Connect with top traders</div>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
//                       <Star className="w-6 h-6 text-purple-400" />
//                     </div>
//                     <div>
//                       <div className="text-white font-semibold">Premium Features</div>
//                       <div className="text-purple-400 text-sm">Advanced AI algorithms</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       {!isSignedIn && (
//         <section className="px-6 py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-4xl font-bold text-white mb-6">
//               Ready to Start Your Trading Journey?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               Join our community of successful traders and experience the future of AI-powered trading.
//             </p>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Link
//                 to="/sign-up"
//                 className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center space-x-2"
//               >
//                 <span>Create Free Account</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Link>
              
//               <div className="text-gray-400 text-sm">
//                 No credit card required • Free forever
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Footer */}
//       <footer className="px-6 py-8 border-t border-white/10">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex items-center justify-center space-x-2 mb-4">
//             <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
//               <Brain className="w-4 h-4 text-white" />
//             </div>
//             <span className="text-lg font-bold text-white">Tradion AI</span>
//           </div>
//           <p className="text-gray-400 text-sm">
//             © 2025 Tradion AI. All rights reserved. Built with cutting-edge technology.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };


// src/pages/Home.tsx
import { useAuth } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  Users,
  CheckCircle,
  Star
} from 'lucide-react';

export const Home = () => {
  const { isSignedIn } = useAuth();

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze market patterns and provide intelligent trading insights."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-Time Market Data",
      description: "Get instant access to live market data and price movements across multiple exchanges."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Bank-grade security with encrypted data transmission and secure wallet connections."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Charting",
      description: "Professional-grade charts with technical indicators and customizable trading views."
    }
  ];

  const benefits = [
    "Reduce trading risks with AI-powered insights",
    "Save time with automated market analysis",
    "Access institutional-grade trading tools",
    "Get 24/7 market monitoring and alerts"
  ];

  const stats = [
    { label: "Active Traders", value: "10K+" },
    { label: "Success Rate", value: "94%" },
    { label: "Markets Covered", value: "50+" },
    { label: "AI Accuracy", value: "98%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-black">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-black rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Tradion AI</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-blue-600 to-black text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition duration-200"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/sign-in"
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg transition duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="bg-gradient-to-r from-blue-600 to-black text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition duration-200"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">AI-Powered Trading Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Trade Smarter with
              <span className="bg-gradient-to-r from-blue-400 to-black bg-clip-text text-transparent block">
                Artificial Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Harness the power of advanced AI algorithms to make informed trading decisions. 
              Get real-time market insights, automated analysis, and professional-grade tools 
              in one powerful platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              {isSignedIn ? (
                <Link
                  to="/dashboard"
                  className="group bg-gradient-to-r from-blue-600 to-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center space-x-2"
                >
                  <span>Access Dashboard</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/sign-up"
                    className="group bg-gradient-to-r from-blue-600 to-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center space-x-2"
                  >
                    <span>Start Trading Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    to="/sign-in"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition duration-300"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-black/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Tradion AI?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the features that make our platform the preferred choice for smart traders worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition duration-300 group"
              >
                <div className="text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Trading Experience
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of traders who have already discovered the power of AI-driven market analysis. 
                Our platform combines cutting-edge technology with intuitive design to give you the edge you need.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {!isSignedIn && (
                <Link
                  to="/sign-up"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-black text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition duration-300"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600/20 to-black/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Portfolio Performance</div>
                      <div className="text-green-400 text-sm">+24.5% this month</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Community Insights</div>
                      <div className="text-white text-sm">Connect with top traders</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Premium Features</div>
                      <div className="text-purple-400 text-sm">Advanced AI algorithms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isSignedIn && (
        <section className="px-6 py-20 bg-gradient-to-r from-blue-600/10 to-black/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Trading Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of successful traders and experience the future of AI-powered trading.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/sign-up"
                className="group bg-gradient-to-r from-blue-600 to-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex items-center space-x-2"
              >
                <span>Create Free Account</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="text-gray-400 text-sm">
                No credit card required • Free forever
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-black rounded flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Tradion AI</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Tradion AI. All rights reserved. Built with cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
};
