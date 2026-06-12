"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SignupPage = () => {
  const [userType, setUserType] = useState<"seeker" | "recruiter" | null>(null);
  const [signupMethod, setSignupMethod] = useState<"email" | "phone" | null>(
    null,
  );
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    companyName: "",
    agreeToTerms: false,
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
    console.log("Signup Data:", { userType, signupMethod, formData });
  };

  const goBack = () => {
    if (signupMethod) {
      setSignupMethod(null);
    } else if (userType) {
      setUserType(null);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f8faf9] flex items-stretch font-sans antialiased selection:bg-[#25a873]/20 selection:text-[#25a873] overflow-x-hidden">
      {/* LEFT SIDE: Branding & Features Panel (Visible on Desktop only) */}
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

        {/* Middle Value Proposition Dynamic Content */}
        <div className="relative z-10 max-w-md space-y-6 my-auto">
          <h2 className="text-4xl xl:text-5xl font-black text-white leading-tight tracking-tight">
            {!userType
              ? "Discover the right path for your career journey."
              : userType === "seeker"
                ? "Your dream job is just a few clicks away."
                : "Hire the absolute best talent globally."}
          </h2>
          <p className="text-white/80 text-base xl:text-lg font-medium leading-relaxed">
            {!userType
              ? "Join millions of professionals and top companies worldwide to find jobs, post requirements, and build strong pipelines."
              : userType === "seeker"
                ? "Get access to exclusive tech positions, direct communication with HR heads, and automated profile matching."
                : "Post openings effortlessly, filter candidates with precision pipelines, and schedule seamless interviews."}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
            <div>
              <p className="text-3xl font-extrabold text-white">120k+</p>
              <p className="text-xs text-white/70 font-medium uppercase tracking-wider mt-1">
                Active Users
              </p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">450+</p>
              <p className="text-xs text-white/70 font-medium uppercase tracking-wider mt-1">
                Top Companies
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer Credits */}
        <div className="relative z-10 text-white/60 text-xs font-medium">
          &copy; 2026 JobPortal Inc. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE: Dynamic Interactive Form Panel (Centered on mobile, beautifully expanded on web) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-16 bg-white relative">
        {/* Back Arrow Button Floating Wrapper */}
        {(userType || signupMethod) && (
          <button
            onClick={goBack}
            type="button"
            className="absolute  left-6 top-6 lg:left-12 lg:top-12 text-[#626262] hover:text-[#25a873] transition-colors flex items-center gap-2 z-20 group font-semibold text-sm"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back</span>
          </button>
        )}

        {/* Inner Responsive Card Container */}
        <div
          className={`w-full transition-all duration-300 mx-auto ${
            userType && signupMethod ? "max-w-xl" : "max-w-md"
          }`}
        >
          {/* Mobile Only Header Logo */}
          <div className="flex flex-col items-center mb-8 lg:hidden">
            <div className="w-12 h-12 bg-gradient-to-br from-[#25a873] to-[#1b7e56] rounded-2xl flex items-center justify-center shadow-md mb-3">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <h1 className="text-2xl font-black text-[#0c0c0c]">
              Create an Account
            </h1>
            <p className="text-[#626262] text-sm mt-1">
              Join our professional community
            </p>
          </div>

          {/* Web Header Display */}
          <div className="hidden lg:block mb-8">
            <h1 className="text-3xl font-black text-[#0c0c0c] tracking-tight">
              Get Started Safely
            </h1>
            <p className="text-[#626262] text-sm mt-2">
              Setup your institutional profile credentials to sync pipelines.
            </p>
          </div>

          {/* CONTENT DISPATCHER BASED ON STEPS */}

          {/* Step 1: Choose User Type */}
          {!userType && !signupMethod && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-lg font-medium text-[#0c0c0c]">
                I want to sign up as a...
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {/* Seeker Button */}
                <button
                  onClick={() => setUserType("seeker")}
                  className="group relative p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#25a873] hover:shadow-lg hover:shadow-[#25a873]/5 transition-all duration-300 text-left w-full overflow-hidden"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#25a873]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <svg
                        className="w-6 h-6 text-[#25a873]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-[#0c0c0c] group-hover:text-[#25a873] transition-colors">
                        Job Seeker
                      </h3>
                      <p className="text-sm text-[#626262] mt-0.5 leading-snug">
                        Find roles tailored to your exact tech stacks.
                      </p>
                    </div>
                  </div>
                </button>

                {/* Recruiter Button */}
                <button
                  onClick={() => setUserType("recruiter")}
                  className="group relative p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#25a873] hover:shadow-lg hover:shadow-[#25a873]/5 transition-all duration-300 text-left w-full overflow-hidden"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#25a873]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <svg
                        className="w-6 h-6 text-[#25a873]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-[#0c0c0c] group-hover:text-[#25a873] transition-colors">
                        Recruiter / Employer
                      </h3>
                      <p className="text-sm text-[#626262] mt-0.5 leading-snug">
                        Publish open slots and connect with engineers directly.
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="text-center pt-4 border-t border-gray-100">
                <p className="text-sm text-[#626262]">
                  Already have an account?{" "}
                  <Link
                    href="/pages/login"
                    className="text-[#25a873] font-bold hover:underline ml-1"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Choose Signup Method */}
          {userType && !signupMethod && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-[#0c0c0c]">
                  Choose dynamic validation
                </h2>
                <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-md uppercase tracking-wider">
                  Step 1 of 2
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Option */}
                <button
                  onClick={() => setSignupMethod("email")}
                  className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#25a873] text-center hover:shadow-lg transition-all duration-300 group w-full"
                >
                  <div className="w-12 h-12 bg-[#25a873]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-[#25a873]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0c0c0c] text-base">
                    Email Address
                  </h3>
                  <p className="text-xs text-[#626262] mt-1">
                    Instant magic link credentials
                  </p>
                </button>

                {/* Phone Option */}
                <button
                  onClick={() => setSignupMethod("phone")}
                  className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-[#25a873] text-center hover:shadow-lg transition-all duration-300 group w-full"
                >
                  <div className="w-12 h-12 bg-[#25a873]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-[#25a873]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0c0c0c] text-base">
                    Phone Number
                  </h3>
                  <p className="text-xs text-[#626262] mt-1">
                    One-time OTP gateway authorization
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Expanded Dynamic Signup Form */}
          {userType && signupMethod && (
            <form onSubmit={handleSubmit} className="space-y-5 animate-fadeIn">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold text-[#0c0c0c] capitalize">
                  {userType} Credentials
                </h2>
                <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-md uppercase tracking-wider">
                  Step 2 of 2
                </span>
              </div>

              {/* Form Grid Structure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name Field */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold text-[#0c0c0c] uppercase tracking-wider mb-2">
                    {userType === "seeker" ? "Full Name" : "Contact Name"}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-4 focus:ring-[#25a873]/5 transition-all outline-none text-sm bg-gray-50/50 focus:bg-white"
                    placeholder={
                      userType === "seeker" ? "e.g. Waleed" : "e.g. John Smith"
                    }
                  />
                </div>

                {/* Company Name Field */}
                {userType === "recruiter" && (
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-bold text-[#0c0c0c] uppercase tracking-wider mb-2">
                      Company Structure
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-4 focus:ring-[#25a873]/5 transition-all outline-none text-sm bg-gray-50/50 focus:bg-white"
                      placeholder="e.g. CorpTech Studio"
                    />
                  </div>
                )}

                {/* Contact Logic Wrapper */}
                <div
                  className={
                    userType === "seeker" ? "sm:col-span-2" : "sm:col-span-2"
                  }
                >
                  {signupMethod === "email" ? (
                    <div>
                      <label className="block text-xs font-bold text-[#0c0c0c] uppercase tracking-wider mb-2">
                        Institutional Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-4 focus:ring-[#25a873]/5 transition-all outline-none text-sm bg-gray-50/50 focus:bg-white"
                        placeholder="developer@example.com"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-bold text-[#0c0c0c] uppercase tracking-wider mb-2">
                        Active Phone Gateway
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
                </div>

                {/* Password Fields */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold text-[#0c0c0c] uppercase tracking-wider mb-2">
                    Security Key
                  </label>
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

                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold text-[#0c0c0c] uppercase tracking-wider mb-2">
                    Verify Security Key
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-4 focus:ring-[#25a873]/5 transition-all outline-none text-sm bg-gray-50/50 focus:bg-white"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Terms and Submits */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-4 h-4 text-[#25a873] border-gray-300 rounded focus:ring-[#25a873]"
                  />
                  <label className="text-xs text-[#626262] leading-normal">
                    I acknowledge and agree to the platform's{" "}
                    <a
                      href="#"
                      className="text-[#25a873] font-bold hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and default automated machine-learning{" "}
                    <a
                      href="#"
                      className="text-[#25a873] font-bold hover:underline"
                    >
                      Privacy Architecture
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#25a873] to-[#209666] hover:from-[#1f8f61] hover:to-[#1a7d54] text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#25a873]/10 transform active:scale-[0.99]"
                >
                  Complete Onboarding
                </button>

                {/* Third-Party Authentication Integrations */}
                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-100"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-white text-[#626262] font-medium tracking-wide uppercase text-[10px]">
                      Or accelerate via
                    </span>
                  </div>
                </div>

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

                <div className="text-center pt-2">
                  <p className="text-sm text-[#626262]">
                    Already onboard?{" "}
                    <Link
                      href="/login"
                      className="text-[#25a873] font-bold hover:underline ml-1"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
