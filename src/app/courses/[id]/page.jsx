import { redirect } from "next/navigation";
import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

// Force the page to be dynamic so it always checks the session
export const dynamic = "force-dynamic";

async function getCourses() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/courses.json`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export default async function CourseDetailsPage({ params }) {
  // Await the params
  const { id } = await params;

  // Get headers to extract the session cookie
  const reqHeaders = await headers(); 
  const session = await auth.api.getSession({
    headers: reqHeaders,
  });

  // Check this in your VS Code terminal
  console.log(`Checking session for ID ${id}:`, session ? "✅ FOUND" : "❌ MISSING");

  if (!session) {
    redirect(`/login?redirect=/courses/${id}`);
  }

  const courses = await getCourses();
  // Ensure we compare ID correctly (numbers vs strings)
  const course = courses.find((c) => String(c.id) === String(id));

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F9FAFB]">
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#FF4F5A]">Error 404</p>
          <h1 className="mt-4 font-serif text-3xl italic text-[#1F2937]">Module not found.</h1>
          <Link href="/courses" className="mt-8 inline-block text-[10px] font-bold tracking-widest text-[#00C4CC] underline decoration-2 underline-offset-8">
            RETURN TO ARCHIVE
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-24">
      {/* Hero Header Section */}
      <div className="relative h-[70vh] w-full overflow-hidden bg-[#1F2937]">
        <img
          src={course.image}
          className="h-full w-full object-cover opacity-50 transition-transform duration-1000 hover:scale-105"
          alt={course.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9FAFB] via-[#1F2937]/20 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="rounded-full bg-[#00C4CC] px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                {course.category || "Professional Series"}
              </span>
              <span className="text-[11px] font-bold text-white/80 tracking-widest">
                ⭐ {course.rating} / 5.0
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-5xl italic leading-[1.1] text-[#1F2937] sm:text-7xl lg:text-8xl">
              {course.title.split(' ').slice(0, -1).join(' ')} <span className="font-sans not-italic font-black text-[#1F2937] uppercase tracking-tighter">{course.title.split(' ').pop()}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Split Layout */}
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:grid lg:grid-cols-3 lg:gap-24 lg:px-8">
        
        {/* Left: Description & Curriculum */}
        <div className="lg:col-span-2">
          <section className="border-b border-gray-100 pb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#00C4CC]">The Curated Overview</p>
            <p className="mt-8 text-2xl font-light leading-relaxed text-[#1F2937]/90">
              {course.description || "Master the fundamental principles and advanced techniques of this series through a rigorous, project-based curriculum designed for professionals."}
            </p>
          </section>

          <section className="mt-16">
            <h2 className="font-serif text-4xl text-[#1F2937]">Syllabus <span className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-gray-300 ml-4">— 04 Chapters</span></h2>
            <div className="mt-12 space-y-6">
              {[
                { title: "Introduction", desc: "Foundational theory and core philosophy." },
                { title: "Core Concepts", desc: "In-depth technical breakdown and analysis." },
                { title: "Hands-on Projects", desc: "Application of skills in real-world scenarios." },
                { title: "Final Assessment", desc: "Certification and mastery validation." },
              ].map((item, idx) => (
                <div key={idx} className="group flex items-center justify-between rounded-[2rem] border border-gray-50 bg-white p-8 transition-all hover:border-[#00C4CC]/40 hover:shadow-xl hover:shadow-gray-200/50">
                  <div className="flex items-center gap-8">
                    <span className="font-serif text-2xl italic text-gray-100 group-hover:text-[#00C4CC] transition-colors">0{idx + 1}</span>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-[#1F2937]">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-50 text-gray-300 group-hover:bg-[#1F2937] group-hover:text-white transition-all">
                    →
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Sidebar Info */}
        <div className="mt-16 lg:mt-0">
          <div className="sticky top-24 overflow-hidden rounded-[3rem] border border-gray-100 bg-white p-10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.06)]">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300">Lead Mentor</p>
              <h3 className="mt-3 font-serif text-3xl text-[#1F2937]">{course.instructor}</h3>
              <div className="mt-6 flex justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00C4CC]"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF4F5A]"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#1F2937]"></span>
              </div>
            </div>

            <div className="my-10 h-[1px] w-full bg-gray-50" />

            <div className="space-y-5">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Time Investment</span>
                <span className="font-bold text-[#1F2937]">{course.duration}</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Certification</span>
                <span className="font-bold text-[#1F2937]">Professional ID</span>
              </div>
            </div>

            <button className="mt-12 w-full rounded-full bg-[#1F2937] py-5 text-[11px] font-bold tracking-[0.3em] text-white transition-all hover:bg-[#FF4F5A] hover:shadow-2xl hover:shadow-[#FF4F5A]/30">
              ENROLL IN MODULE
            </button>

            <p className="mt-8 text-center text-[9px] font-medium tracking-[0.2em] text-gray-400 uppercase">
              Limited Enrolment • Secure Archive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}