import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Authenticating:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#18243a] relative overflow-hidden font-sans">
      {/* Abstract Background Glows */}
      <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-md p-6 relative z-10">
        {/* Glassmorphism Container */}
        <div className="bg-[#1e293b]/60 backdrop-blur-xl border border-slate-600/40 rounded-3xl p-8 shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-white mb-2">
              Nyaya<span className="text-[#2cd38f]">Setu</span>
            </h1>
            <p className="text-slate-300 text-sm font-medium">
              Welcome back to your legal guide
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="block w-full pl-11 pr-4 py-3 border border-slate-600/50 rounded-xl leading-5 bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2cd38f] focus:border-[#2cd38f] sm:text-sm transition-all"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  className="block w-full pl-11 pr-4 py-3 border border-slate-600/50 rounded-xl leading-5 bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2cd38f] focus:border-[#2cd38f] sm:text-sm transition-all"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-slate-900 border-slate-600 rounded text-[#2cd38f] focus:ring-[#2cd38f] cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-300 cursor-pointer">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-semibold text-[#2cd38f] hover:text-[#25b87c] transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-[#2cd38f] hover:bg-[#25b87c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#18243a] focus:ring-[#2cd38f] transition-all mt-6"
            >
              Log in
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </form>

          {/* Sign Up Redirect */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400">
              Don't have an account?{' '}
              <a href="#" className="font-bold text-white hover:text-[#2cd38f] transition-colors">
                Sign up
              </a>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;