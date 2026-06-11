import React from "react";
import Image from "next/image";

const OnBoardingPage = () => {
  return (
    /* Changed min-h-screen to h-screen and forced absolute overflow suppression */
    <div className="h-screen w-screen bg-gradient-to-br from-[#f2faf7] via-[#ecf7f4] to-[#e1f2ee] flex flex-col justify-between md:justify-center items-center font-sans antialiased selection:bg-[#25a873]/20 selection:text-[#25a873] overflow-hidden relative">
      {/* Structural Decorative Background Lights */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#25a873]/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#20b2aa]/5 blur-[150px] pointer-events-none -z-10" />

      {/* Reconfigured heights to accurately split the available viewport container without scaling over */}
      <div className="w-full max-w-7xl mx-auto px-6 py-2 md:py-6 flex flex-col md:flex-row items-center justify-between h-full md:h-auto md:gap-12 lg:gap-20">
        {/* Left Side (Desktop Layout Right): Image & Floating Brand Badges Section */}
        {/* Adjusted aspect layout bounds to prevent push down on short mobile screens */}
        <div className="relative w-full flex-1 flex justify-center items-center max-w-md md:max-w-xl h-[52vh] md:h-auto aspect-[4/5] md:aspect-square md:order-2">
          {/* Radial Glowing Core Behind Hero */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#cbeee4] to-transparent rounded-full filter blur-3xl opacity-60 -z-10 transform scale-90 animate-pulse [animation-duration:8s]" />

          {/* Main Professional Character Image */}
          <div className="relative w-full h-full max-h-[450px] sm:max-h-[500px] md:max-h-[520px] lg:max-h-[580px]">
            <Image
              src="/assets/onboarding-img.png"
              alt="Find your dream job"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain drop-shadow-[0_15px_30px_rgba(37,168,115,0.12)]"
            />
          </div>

          {/* Floating Apple Badge */}
          <div className="absolute top-[6%] left-[18%] md:left-[10%] w-11 h-11 md:w-16 md:h-16 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-white/40 flex items-center justify-center animate-bounce [animation-duration:5s] hover:scale-110 transition-transform duration-300">
            <div className="relative w-5 h-5 md:w-7 md:h-7">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Floating Google Badge */}
          <div className="absolute top-[20%] right-[4%] md:right-[2%] w-11 h-11 md:w-16 md:h-16 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-white/40 flex items-center justify-center animate-bounce [animation-duration:4.2s] hover:scale-110 transition-transform duration-300">
            <div className="relative w-5 h-5 md:w-7 md:h-7">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Floating Facebook Badge */}
          <div className="absolute bottom-[25%] left-[4%] md:left-[0%] w-11 h-11 md:w-16 md:h-16 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-white/40 flex items-center justify-center animate-bounce [animation-duration:4.6s] hover:scale-110 transition-transform duration-300">
            <div className="relative w-5 h-5 md:w-7 md:h-7">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                alt="Facebook"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side (Desktop Layout Left): Content White Card Section */}
        {/* Switched padding presets to safely handle strict viewport boundaries without spilling */}
        <div className="w-full md:w-auto md:flex-1 bg-white md:bg-transparent rounded-t-[40px] md:rounded-none px-8 pt-8 pb-6 md:p-0 shadow-[0_-15px_40px_rgba(12,12,12,0.03)] md:shadow-none flex flex-col justify-center items-center md:items-start text-center md:text-left md:order-1 transition-all duration-300">
          {/* Accent Line Indicator for Mobile Sheet drag aesthetic */}
          <div className="w-12 h-1 bg-gray-200 rounded-full mb-4 md:hidden" />

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0c0c0c] leading-[1.15] max-w-[15ch] md:max-w-md">
            Find your{" "}
            <span className="bg-linear-to-r from-[#25a873] to-[#1b7e56] bg-clip-text text-transparent">
              dream jobs
            </span>{" "}
            with us
          </h1>

          <p className="mt-2 md:mt-6 text-[14px] sm:text-base md:text-lg lg:text-xl text-[#626262] font-medium leading-relaxed max-w-[32ch] sm:max-w-md">
            Create your profile now and be visible to the top recruiters in the
            world
          </p>

          <button
            type="button"
            className="w-full md:w-auto mt-6 md:mt-10 px-8 py-3.5 md:py-4 bg-gradient-to-r from-[#25a873] to-[#209666] hover:from-[#1f8f61] hover:to-[#1a7d54] text-white font-bold text-base md:text-lg rounded-2xl transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-3 shadow-[0_10px_25px_rgba(37,168,115,0.25)] hover:shadow-[0_12px_30px_rgba(37,168,115,0.35)] group relative overflow-hidden"
          >
            <span>Lets’ Start</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5l6 6m0 0l-6 6M19.5 12H9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPage;
