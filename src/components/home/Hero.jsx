import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F9FAFB] selection:bg-[#00C4CC]/20">
      
      {/* Expansive Background Glow - Extends to screen edges */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] h-[600px] w-[600px] rounded-full bg-[#00C4CC]/5 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[5%] h-[500px] w-[500px] rounded-full bg-[#FFD166]/10 blur-[100px]"></div>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-32">
        
        {/* Left Content */}
        <div className="z-10">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#00C4CC]"></span>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#00C4CC]">
              Est. MMXXIV • Premium Learning
            </p>
          </div>

          {/* Typography: Serif for high-end "Vogue" feel */}
          <h1 className="max-w-xl font-serif text-6xl italic leading-[1.1] tracking-tight text-[#1F2937] sm:text-7xl lg:text-8xl">
            Elevate <br />
            <span className="font-sans not-italic font-black uppercase tracking-tighter text-[#00C4CC]">
              Your Mind.
            </span>
          </h1>

          <p className="mt-10 max-w-md text-lg font-light leading-relaxed tracking-wide text-[#1F2937]/70">
            A curated destination for professional excellence. Our courses are 
            meticulously crafted for those who demand distinction.
          </p>

          <div className="mt-12 flex flex-col items-center gap-10 sm:flex-row">
            <Link
              href="/courses"
              className="group relative overflow-hidden rounded-full bg-[#1F2937] px-10 py-5 text-[11px] font-bold tracking-[0.2em] text-white transition-all hover:bg-[#00C4CC] hover:shadow-2xl hover:shadow-[#00C4CC]/20"
            >
              EXPLORE THE ARCHIVE
            </Link>

            <Link
              href="/register"
              className="group text-[11px] font-bold tracking-[0.2em] text-[#1F2937] underline decoration-[#FF4F5A] decoration-2 underline-offset-[12px] transition-all hover:text-[#FF4F5A]"
            >
              CREATE ACCOUNT
            </Link>
          </div>
        </div>

        {/* Right Content: The "Stats" Gallery */}
        <div className="relative grid gap-6 sm:grid-cols-2">
          
          <div className="group rounded-3xl border border-gray-200 bg-white/50 p-10 backdrop-blur-sm transition-all duration-500 hover:border-[#00C4CC]/50 hover:bg-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1F2937]/40">Volume</p>
            <h3 className="mt-4 font-serif text-5xl text-[#1F2937]">120<span className="text-[#00C4CC]">.</span></h3>
            <p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#1F2937]/60">Curated Series</p>
          </div>

          <div className="group rounded-3xl border border-gray-200 bg-white/50 p-10 backdrop-blur-sm transition-all duration-500 hover:border-[#FF4F5A]/50 hover:bg-white sm:translate-y-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1F2937]/40">Global</p>
            <h3 className="mt-4 font-serif text-5xl text-[#1F2937]">10K<span className="text-[#FF4F5A]">.</span></h3>
            <p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#1F2937]/60">Elite Members</p>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-3xl bg-[#1F2937] p-10 shadow-2xl sm:col-span-2">
            {/* Elegant pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
            
            <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFD166]">The Standard</p>
                <h3 className="mt-4 font-serif text-3xl leading-snug text-white">
                  "The investment in <br /><span className="italic text-white/60">knowledge</span> pays the best interest."
                </h3>
              </div>
              
              <div className="flex flex-col gap-3 border-l border-white/10 pl-8">
                <div className="flex gap-1 text-[#FFD166]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/40">4.9 RATING</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}