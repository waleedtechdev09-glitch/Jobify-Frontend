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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f2faf7] via-[#ecf7f4] to-[#e1f2ee] flex items-center justify-center font-sans antialiased selection:bg-[#25a873]/20 selection:text-[#25a873] p-3 sm:p-6 md:p-10 relative overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#25a873]/5 blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[#20b2aa]/5 blur-[100px] sm:blur-[150px] pointer-events-none -z-10" />

      {/* Main Signup Card */}
      {/* Responsive Width: Step 3 par grid display hone ki wajah se max-w badh kar md:max-w-3xl ho jata hai */}
      <div
        className={`w-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden transition-all duration-300 ${
          userType && signupMethod ? "max-w-md md:max-w-3xl" : "max-w-md"
        }`}
      >
        {/* Header Section */}
        <div className="relative px-5 sm:px-8 pt-8 pb-4 border-b border-gray-100/80">
          {/* Back Button */}
          {(userType || signupMethod) && (
            <button
              onClick={goBack}
              type="button"
              className="absolute left-5 sm:left-8 top-8 text-[#626262] hover:text-[#25a873] transition-colors flex items-center gap-1.5 z-10 group"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform"
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
              <span className="text-sm font-semibold hidden sm:inline">
                Back
              </span>
            </button>
          )}

          <div className="flex justify-center mb-3">
            <div className="w-11 h-11 bg-gradient-to-br from-[#25a873] to-[#1b7e56] rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">J</span>
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-[#0c0c0c] tracking-tight">
            Create an Account
          </h1>
          <p className="text-center text-[#626262] text-xs sm:text-sm mt-1 max-w-[30ch] sm:max-w-none mx-auto">
            Join our community of professionals and recruiters
          </p>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-8">
          {/* Step 1: Choose User Type */}
          {!userType && !signupMethod && (
            <div className="space-y-5 animate-fadeIn">
              <h2 className="text-base sm:text-lg font-bold text-[#0c0c0c] text-center">
                I want to sign up as a
              </h2>
              <div className="grid grid-cols-1 gap-3.5">
                {/* Seeker Button */}
                <button
                  onClick={() => setUserType("seeker")}
                  className="group relative p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#25a873] hover:shadow-md transition-all duration-300 text-left w-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#25a873]/0 to-[#1b7e56]/0 group-hover:from-[#25a873]/5 group-hover:to-[#1b7e56]/5 transition-all duration-300" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#25a873]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <svg
                        className="w-5 h-5 text-[#25a873]"
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
                    <div>
                      <h3 className="text-base font-bold text-[#0c0c0c] mb-0.5">
                        Job Seeker
                      </h3>
                      <p className="text-xs sm:text-sm text-[#626262] leading-snug">
                        Find your dream job and connect with top companies
                      </p>
                    </div>
                  </div>
                </button>

                {/* Recruiter Button */}
                <button
                  onClick={() => setUserType("recruiter")}
                  className="group relative p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#25a873] hover:shadow-md transition-all duration-300 text-left w-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#25a873]/0 to-[#1b7e56]/0 group-hover:from-[#25a873]/5 group-hover:to-[#1b7e56]/5 transition-all duration-300" />
                  <div className="relative flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#25a873]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <svg
                        className="w-5 h-5 text-[#25a873]"
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
                    <div>
                      <h3 className="text-base font-bold text-[#0c0c0c] mb-0.5">
                        Recruiter
                      </h3>
                      <p className="text-xs sm:text-sm text-[#626262] leading-snug">
                        Find the best talent for your company
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs sm:text-sm text-[#626262]">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-[#25a873] font-bold hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Choose Signup Method */}
          {userType && !signupMethod && (
            <div className="space-y-5 animate-fadeIn">
              <div className="text-right">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Step 1 of 2
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-[#0c0c0c] text-center">
                Choose how to sign up
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Email Option */}
                <button
                  onClick={() => setSignupMethod("email")}
                  className="p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#25a873] text-center hover:shadow-md transition-all duration-300 group w-full"
                >
                  <div className="w-12 h-12 bg-[#25a873]/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform">
                    <svg
                      className="w-5 h-5 text-[#25a873]"
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
                  <h3 className="font-bold text-[#0c0c0c] text-sm sm:text-base">
                    Email Address
                  </h3>
                  <p className="text-xs text-[#626262] mt-0.5">
                    Sign up with your email
                  </p>
                </button>

                {/* Phone Option */}
                <button
                  onClick={() => setSignupMethod("phone")}
                  className="p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#25a873] text-center hover:shadow-md transition-all duration-300 group w-full"
                >
                  <div className="w-12 h-12 bg-[#25a873]/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-105 transition-transform">
                    <svg
                      className="w-5 h-5 text-[#25a873]"
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
                  <h3 className="font-bold text-[#0c0c0c] text-sm sm:text-base">
                    Phone Number
                  </h3>
                  <p className="text-xs text-[#626262] mt-0.5">
                    Sign up with your phone
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Signup Form */}
          {userType && signupMethod && (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-5 animate-fadeIn"
            >
              <div className="text-right">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Step 2 of 2
                </span>
              </div>

              {/* Grid Wrapper: Desktop screen par dynamic split row banata hai */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {/* Full Name Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0c0c0c] mb-1.5">
                    {userType === "seeker"
                      ? "Full Name"
                      : "Contact Person Name"}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-2 focus:ring-[#25a873]/10 transition-all outline-none text-sm"
                    placeholder={
                      userType === "seeker" ? "John Doe" : "John Smith"
                    }
                  />
                </div>

                {/* Company Name Field (Recruiter Dynamic Component) */}
                {userType === "recruiter" && (
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0c0c0c] mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-2 focus:ring-[#25a873]/10 transition-all outline-none text-sm"
                      placeholder="Google, Microsoft, etc."
                    />
                  </div>
                )}

                {/* Email or Phone Dynamic Field Container */}
                <div
                  className={userType === "seeker" ? "md:col-span-2" : "w-full"}
                >
                  {signupMethod === "email" ? (
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-[#0c0c0c] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-2 focus:ring-[#25a873]/10 transition-all outline-none text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-[#0c0c0c] mb-1.5">
                        Phone Number
                      </label>
                      <div className="flex gap-1.5">
                        <select className="px-2 py-2.5 border border-gray-200 rounded-xl focus:border-[#25a873] outline-none bg-white text-xs sm:text-sm font-medium">
                          <option>+1</option>
                          <option>+44</option>
                          <option>+92</option>
                          <option>+91</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="flex-1 min-w-0 px-3.5 py-2.5 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-2 focus:ring-[#25a873]/10 transition-all outline-none text-sm"
                          placeholder="1234567890"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0c0c0c] mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-2 focus:ring-[#25a873]/10 transition-all outline-none text-sm"
                    placeholder="Create password"
                  />
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#0c0c0c] mb-1.5">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl focus:border-[#25a873] focus:ring-2 focus:ring-[#25a873]/10 transition-all outline-none text-sm"
                    placeholder="Confirm password"
                  />
                </div>
              </div>

              {/* Checkbox, Action Button and Footers: Centered spans on desktop via full layout properties */}
              <div className="md:col-span-2 space-y-4 pt-1">
                {/* Terms and Conditions */}
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                    className="mt-0.5 w-4 h-4 text-[#25a873] border-gray-300 rounded focus:ring-[#25a873] flex-shrink-0"
                  />
                  <label className="text-xs sm:text-sm text-[#626262] leading-tight">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[#25a873] font-semibold hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#25a873] font-semibold hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#25a873] to-[#209666] hover:from-[#1f8f61] hover:to-[#1a7d54] text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 transform active:scale-[0.99] shadow-md hover:shadow-lg"
                >
                  Create Account
                </button>

                {/* Decorative Divider */}
                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-100"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-white text-[#626262] font-medium">
                      Or sign up with
                    </span>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-xl hover:bg-gray-50/80 transition-colors w-full"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
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
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">
                      Google
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-200 rounded-xl hover:bg-gray-50/80 transition-colors w-full"
                  >
                    <svg
                      className="w-4 h-4 text-[#1877F2] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">
                      Facebook
                    </span>
                  </button>
                </div>

                {/* Footer Link */}
                <div className="text-center pt-2">
                  <p className="text-xs sm:text-sm text-[#626262]">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-[#25a873] font-bold hover:underline"
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
