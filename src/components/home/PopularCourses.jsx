import Link from "next/link";

export default function PopularCourses({ courses }) {
  return (
    <section className="bg-[#F9FAFB] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-[#00C4CC]"></span>
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#00C4CC]">
              The Collection
            </p>
            <span className="h-[1px] w-8 bg-[#00C4CC]"></span>
          </div>

          <h2 className="font-serif text-4xl italic text-[#1F2937] sm:text-5xl">
            Curated <span className="font-sans not-italic font-black text-[#1F2937]">Curriculum</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm tracking-wide text-gray-500">
            Selected for depth, delivered by industry masters. 
            Begin your transformation today.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#00C4CC]/30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00C4CC]">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-[#FFD166]">★</span>
                    <span className="text-[10px] font-bold tracking-tighter text-[#1F2937]">
                      {course.rating}
                    </span>
                  </div>
                </div>

                <h3 className="mt-4 font-serif text-2xl leading-tight text-[#1F2937]">
                  {course.title}
                </h3>

                <p className="mt-3 text-xs font-medium uppercase tracking-widest text-gray-400">
                  By {course.instructor}
                </p>

                <div className="flex-grow">
                  <div className="mt-6 flex items-center gap-4">
                    <span className="text-[11px] font-bold tracking-widest text-[#1F2937]/40">
                      {course.duration}
                    </span>
                    <span className="h-[1px] flex-grow bg-gray-100"></span>
                  </div>
                </div>

                <Link
                  href={`/courses/${course.id}`}
                  className="mt-8 block rounded-full bg-[#1F2937] py-4 text-center text-[11px] font-bold tracking-[0.2em] text-white transition-all hover:bg-[#00C4CC] hover:shadow-lg hover:shadow-[#00C4CC]/20"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ NEW BUTTON (placed correctly under grid) */}
        <div className="mt-16 text-center">
          <Link
            href="/courses"
            className="inline-block rounded-full bg-[#00C4CC] px-10 py-4 text-[11px] font-bold tracking-[0.2em] text-white transition hover:bg-[#1F2937] hover:shadow-lg"
          >
            VIEW ALL COURSES
          </Link>
        </div>

      </div>
    </section>
  );
}