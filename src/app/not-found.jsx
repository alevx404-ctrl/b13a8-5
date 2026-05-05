// src/app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#F9FAFB] px-6">
      
      {/* Full-bleed background accents to match Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C4CC]/5 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[5%] h-[400px] w-[400px] rounded-full bg-[#FF4F5A]/5 blur-[100px]"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Subtle decorative label */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-[1px] w-8 bg-[#FF4F5A]"></span>
          <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#FF4F5A]">
            Error Code 404
          </p>
          <span className="h-[1px] w-8 bg-[#FF4F5A]"></span>
        </div>

        {/* Large Editorial Typography */}
        <h1 className="font-serif text-[12rem] italic leading-none text-[#1F2937]/5 sm:text-[16rem]">
          404
        </h1>
        
        <div className="-mt-12 sm:-mt-20">
          <h2 className="font-serif text-4xl italic text-[#1F2937] sm:text-6xl">
            Path not <span className="font-sans not-italic font-black text-[#00C4CC]">found.</span>
          </h2>
          
          <p className="mx-auto mt-8 max-w-md text-lg font-light leading-relaxed text-gray-500">
            The module you are looking for has been moved or archived. 
            Let us guide you back to the main collection.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row">
          <Link
            href="/"
            className="group relative overflow-hidden rounded-full bg-[#1F2937] px-10 py-5 text-[11px] font-bold tracking-[0.2em] text-white transition-all hover:bg-[#00C4CC] hover:shadow-2xl hover:shadow-[#00C4CC]/20"
          >
            RETURN HOME
          </Link>

          <Link
            href="/courses"
            className="text-[11px] font-bold tracking-[0.2em] text-[#1F2937] underline decoration-[#FFD166] decoration-2 underline-offset-8 transition-colors hover:text-[#00C4CC]"
          >
            BROWSE COURSES
          </Link>
        </div>
      </div>

      {/* Subtle branding footer */}
      <div className="absolute bottom-10">
        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-300">
          Premium Education • Distinguished Results
        </p>
      </div>
    </main>
  );
}