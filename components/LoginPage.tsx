"use client";
import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data Submitted:", { loginMethod, formData });
  };

  return (
    <div className="min-h-screen w-full bg-[#f8faf9] flex items-stretch font-sans antialiased selection:bg-[#25a873]/20 selection:text-[#25a873] overflow-x-hidden">
      {/* LEFT SIDE: Matching Branding Panel (Visible on Desktop only) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1b7e56] via-[#25a873] to-[#209666] relative p-12 flex-col justify-between overflow-hidden">
        {/* Abstract Background Overlays */}
        <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-black/10 blur-[80px] pointer-events-none" />

        {/* Top Branding Header */}
        <div className="relative flex items-center gap-3 z-10">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
            <span className="text-[#25a873] font-black text-xl">J</span>
          </div>
          <span className="text-white font-bold text-lg tracking-wide">
            Jobify
          </span>
        </div>

        {/* Middle Value Proposition */}
        <div className="relative z-10 max-w-md space-y-6 my-auto">
          <h2 className="text-4xl xl:text-5xl font-black text-white leading-tight tracking-tight">
            Welcome back to your professional space.
          </h2>
          <p className="text-white/80 text-base xl:text-lg font-medium leading-relaxed">
            Bridge the gap between opportunity and execution. Log in to monitor
            pipelines, publish requirements, and manage matches.
          </p>

          {/* Quick Info/Trust Badges */}
          <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-white/90 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-white/80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>End-to-End Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-white/80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>Real-time Sync</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer Credits */}
        <div className="relative z-10 text-white/60 text-xs font-medium">
          &copy; 2026 JobPortal Inc. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE: Interactive Login Form Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-16 bg-white relative">
        {/* Inner Web Form Wrapper */}
        <div className="w-full max-w-md mx-auto space-y-6">
          {/* Mobile Header Display */}
          <div className="flex flex-col items-center mb-6 lg:hidden">
            <div className="w-12 h-12 bg-gradient-to-br from-[#25a873] to-[#1b7e56] rounded-2xl flex items-center justify-center shadow-md mb-3">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <h1 className="text-2xl font-black text-[#0c0c0c]">Welcome Back</h1>
            <p className="text-[#626262] text-sm mt-1">
              Sign in to your dashboard console
            </p>
          </div>

          {/* Web Desktop Header Display */}
          <div className="hidden lg:block">
            <h1 className="text-3xl font-black text-[#0c0c0c] tracking-tight">
              Account Authentication
            </h1>
            <p className="text-[#626262] text-sm mt-2">
              Enter your access credentials to safely enter your operational
              workspace.
            </p>
          </div>

          {/* Sub-tabs to Switch Login Method (Email vs Phone) */}
          <div className="grid grid-cols-2 p-1 bg-gray-100 rounded-xl">
            <button
              type="button"
              onClick={() => setLoginMethod("email")}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                loginMethod === "email"
                  ? "bg-white text-[#25a873] shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Email Gateway
            </button>
            <button
              type="button"
              onClick={() => setLoginMethod("phone")}
              className={`py-2 text-xs font-bold rounded-lg transition-all ${
                loginMethod === "phone"
                  ? "bg-white text-[#25a873] shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Phone Gateway
            </button>
          </div>

          {/* Main Action Form */}
          <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
            {/* Dynamic Contact Method Inputs */}
            {loginMethod === "email" ? (
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#0c0c0c] uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-4 focus:ring-[#25a873]/5 transition-all outline-none text-sm bg-gray-50/50 focus:bg-white"
                  placeholder="name@company.com"
                />
              </div>
            ) : (
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#0c0c0c] uppercase tracking-wider">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select className="px-3 py-3 border border-gray-200 rounded-xl focus:border-[#25a873] outline-none bg-gray-50 text-sm font-semibold">
                    <option>+92</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-4 focus:ring-[#25a873]/5 transition-all outline-none text-sm bg-gray-50/50 focus:bg-white"
                    placeholder="3001234567"
                  />
                </div>
              </div>
            )}

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-[#0c0c0c] uppercase tracking-wider">
                  Password Key
                </label>
                <a
                  href="#"
                  className="text-xs font-bold text-[#25a873] hover:underline"
                >
                  Forgot Key?
                </a>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-4 focus:ring-[#25a873]/5 transition-all outline-none text-sm bg-gray-50/50 focus:bg-white"
                placeholder="••••••••"
              />
            </div>

            {/* Remember Me Validation Check */}
            <div className="flex items-center gap-2.5 pt-1">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 text-[#25a873] border-gray-300 rounded focus:ring-[#25a873]"
              />
              <label
                htmlFor="rememberMe"
                className="text-xs font-medium text-[#626262] select-none cursor-pointer"
              >
                Keep session authenticated on this terminal
              </label>
            </div>

            {/* Submit Authorization */}
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#25a873] to-[#209666] hover:from-[#1f8f61] hover:to-[#1a7d54] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#25a873]/10 transform active:scale-[0.99]"
            >
              Authorize Secure Sign In
            </button>

            {/* Social Authentication Dividers */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-[#626262] font-medium tracking-wide uppercase text-[10px]">
                  Or sign in with
                </span>
              </div>
            </div>

            {/* Alternative Social Logins */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-700"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-700"
              >
                <svg
                  className="w-4 h-4 text-[#1877F2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </button>
            </div>

            {/* Bottom Form Redirection */}
            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-sm text-[#626262]">
                New to the platform?{" "}
                <Link
                  href="/signup"
                  className="text-[#25a873] font-bold hover:underline ml-1"
                >
                  Create institution account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
