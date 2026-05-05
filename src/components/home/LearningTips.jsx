// src/components/home/LearningTips.jsx

export default function LearningTips() {
  const tips = [
    {
      title: "Study Techniques",
      color: "#00C4CC",
      items: [
        "Active recall instead of passive reading",
        "Teach what you learn (Feynman technique)",
        "Break topics into small chunks",
        "Use practice projects instead of theory-only",
      ],
    },
    {
      title: "Time Management",
      color: "#FF4F5A",
      items: [
        "Study in focused 25–50 min blocks",
        "Avoid multitasking while learning",
        "Set clear daily learning goals",
        "Review before sleeping for retention",
      ],
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F9FAFB] py-20 lg:py-32">
      {/* Decorative full-bleed background element */}
      <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#FFD166]/5 blur-[100px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#1F2937]/40">
              Methodology
            </p>
            <span className="h-[1px] w-12 bg-[#FFD166]"></span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <h2 className="font-serif text-5xl italic leading-tight text-[#1F2937] sm:text-6xl">
              Master the <br />
              <span className="font-sans not-italic font-black uppercase tracking-tighter text-[#1F2937]">
                Learning Process.
              </span>
            </h2>
            <p className="max-w-md text-lg font-light leading-relaxed text-gray-500">
              Excellence is not an accident; it is the result of intentional 
              habits and proven cognitive strategies.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {tips.map((group, idx) => (
            <div 
              key={idx}
              className="group relative rounded-[2.5rem] border border-gray-200 bg-white p-10 transition-all duration-500 hover:border-transparent hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]"
            >
              {/* Subtle number indicator */}
              <span className="absolute right-10 top-10 font-serif text-4xl italic text-gray-100 transition-colors group-hover:text-[#F9FAFB]">
                0{idx + 1}
              </span>

              <h3 
                className="font-sans text-[11px] font-bold uppercase tracking-[0.3em]"
                style={{ color: group.color }}
              >
                {group.title}
              </h3>

              <div className="mt-10 h-[1px] w-full bg-gray-100"></div>

              <ul className="mt-10 space-y-6">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    {/* Elegant custom marker */}
                    <span 
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" 
                      style={{ backgroundColor: group.color }}
                    ></span>
                    <span className="text-sm font-medium tracking-wide text-[#1F2937]/80 group-hover:text-[#1F2937]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Bottom decorative bar that grows on hover */}
              <div 
                className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 transition-all duration-500 group-hover:w-1/3"
                style={{ backgroundColor: group.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}