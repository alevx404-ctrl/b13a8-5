// src/app/loading.js

export default function Loading() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center bg-[#F9FAFB]">
      <div className="relative flex flex-col items-center">
        
        {/* Animated Branded Icon */}
        <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
          {/* Outer Ping Effect */}
          <div className="absolute inset-0 animate-ping rounded-full bg-[#00C4CC]/10"></div>
          
          {/* Rotating/Pulsing Border */}
          <div className="absolute inset-0 animate-pulse rounded-full border border-[#00C4CC]/30"></div>
          
          {/* Central Logo Box */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F2937] text-white shadow-2xl">
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
        </div>

        {/* Minimalist Branded Text */}
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#1F2937]">
            Curating <span className="text-[#00C4CC]">Experience</span>
          </p>
          
          {/* Progress Bar using the CSS class we added to globals.css */}
          <div className="mt-5 h-[1px] w-40 overflow-hidden bg-gray-100">
            <div className="animate-loading-bar h-full bg-[#FF4F5A]"></div>
          </div>
        </div>

        {/* Floating details */}
        <div className="mt-10">
           <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-gray-300">
             SkillSphere Intelligence
           </p>
        </div>
      </div>
    </div>
  );
}