// src/components/home/TopInstructors.jsx

export default function TopInstructors() {
  const instructors = [
    {
      id: 1,
      name: "Sophia Rodriguez",
      role: "Mobile App Expert",
      image: "https://i.ibb.co.com/cKXW3Zj5/Teacher.jpg",
      rating: 4.9,
      courses: 12,
    },
    {
      id: 2,
      name: "James Carter",
      role: "Web Development Mentor",
      image: "https://i.ibb.co.com/pv0K8SVP/New-Brainrot.jpg",
      rating: 4.8,
      courses: 18,
    },
    {
      id: 3,
      name: "Ava Thompson",
      role: "UI/UX Designer",
      image: "https://i.ibb.co.com/fzXCSfwT/download.jpg",
      rating: 4.9,
      courses: 10,
    },
    {
      id: 4,
      name: "Daniel Lee",
      role: "Marketing Strategist",
      image: "https://i.ibb.co.com/x8MzCK6Q/daniel-lee.jpg",
      rating: 4.7,
      courses: 14,
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="mb-20 flex flex-col items-start justify-between gap-6 border-b border-gray-100 pb-10 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#00C4CC]">
                The Faculty
              </p>
            </div>
            <h2 className="font-serif text-5xl italic leading-tight text-[#1F2937] sm:text-6xl">
              World-Class <span className="font-sans not-italic font-black text-[#1F2937]">Mentors.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            Learn from industry architects who have built the products you use every day.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="group flex flex-col">
              
              {/* Image Container - Fixed Aspect Ratio */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[3rem] rounded-bl-[3rem] bg-gray-100">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                
                {/* Floating Rating Badge */}
                <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm shadow-sm">
                   <p className="text-[10px] font-bold text-[#1F2937]">⭐ {instructor.rating}</p>
                </div>
              </div>

              {/* Text Content Area - Flex Grow ensures vertical alignment */}
              <div className="flex flex-1 flex-col pt-8">
                <div className="min-h-[80px]"> {/* Keeps titles aligned even if 1 vs 2 lines */}
                  <h3 className="font-serif text-2xl text-[#1F2937] transition-colors group-hover:text-[#00C4CC]">
                    {instructor.name}
                  </h3>
                  
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF4F5A]">
                    {instructor.role}
                  </p>
                </div>

                {/* Bottom Section - Always stays at the very bottom of the card */}
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    {instructor.courses} Modules
                  </span>
                  
                  <div className="h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1F2937] group-hover:text-white group-hover:border-[#1F2937]">
                    <span className="text-xs">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}