import Link from "next/link";
import { headers } from "next/headers"; // Added
import { auth } from "@/lib/auth";     // Added
import { redirect } from "next/navigation";

// Force Next.js to check this page live every time
export const dynamic = "force-dynamic";

async function getCourses() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/courses.json`, {
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

export default async function CoursesPage() {
  // 1. Get the headers from the browser
  const reqHeaders = await headers();
  
  // 2. Check the session using those headers
  const session = await auth.api.getSession({
    headers: reqHeaders,
  });

  // 3. If no session, send them to login
  if (!session) {
    redirect("/login?redirect=/courses");
  }

  const courses = await getCourses();
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Editorial Header - Full Bleed Context */}
      <header className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[10%] -left-[5%] h-[500px] w-[500px] rounded-full bg-[#00C4CC]/5 blur-[120px]"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#00C4CC]">
              Curated Series
            </p>
            <span className="h-[1px] w-12 bg-[#FFD166]"></span>
          </div>
          
          <h1 className="font-serif text-5xl italic leading-tight text-[#1F2937] sm:text-7xl">
            The <span className="font-sans not-italic font-black text-[#1F2937]">Archive.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-gray-500">
            Explore our full suite of professional modules, designed for those 
            who prioritize mastery over completion.
          </p>
        </div>
      </header>

      {/* Courses Grid */}
      <main className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#00C4CC]/30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                   <span className="rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1F2937] shadow-sm">
                      {course.category || "Premium"}
                   </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col p-8">
                {/* Title and Instructor with alignment fix */}
                <div className="min-h-[100px]">
                  <h2 className="font-serif text-2xl leading-tight text-[#1F2937]">
                    {course.title}
                  </h2>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-widest text-[#FF4F5A]">
                    By {course.instructor}
                  </p>
                </div>

                {/* Rating & Duration divider */}
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <span className="text-[#FFD166] text-xs">★</span>
                    <span className="text-[11px] font-bold text-[#1F2937]">{course.rating}</span>
                  </div>
                  <span className="h-[1px] flex-grow bg-gray-100"></span>
                  <span className="text-[11px] font-bold tracking-widest text-gray-400">
                    {course.duration}
                  </span>
                </div>

                {/* Fixed Alignment Button */}
                <div className="mt-auto pt-8">
                  <Link
                    href={`/courses/${course.id}`}
                    className="block rounded-full bg-[#1F2937] py-4 text-center text-[11px] font-bold tracking-[0.2em] text-white transition-all hover:bg-[#00C4CC] hover:shadow-lg hover:shadow-[#00C4CC]/20"
                  >
                    VIEW MODULE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}