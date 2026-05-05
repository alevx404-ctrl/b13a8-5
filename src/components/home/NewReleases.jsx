import Link from "next/link";

const newModules = [
  {
    id: 101,
    title: "Minimalist Architecture",
    category: "Design",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    date: "May 2026"
  },
  {
    id: 102,
    title: "The Ethics of AI",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    date: "April 2026"
  }
];

export default function NewReleases() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#00C4CC]">
              Fresh Perspectives
            </p>
            <h2 className="mt-4 font-serif text-5xl italic text-[#1F2937] sm:text-6xl">
              New <span className="font-sans not-italic font-black uppercase tracking-tighter">Arrivals.</span>
            </h2>
          </div>
          <Link 
            href="/courses" 
            className="text-[11px] font-bold tracking-widest text-[#1F2937] underline decoration-2 underline-offset-8 transition-colors hover:text-[#00C4CC]"
          >
            VIEW FULL CATALOGUE
          </Link>
        </div>

        {/* Featured Staggered Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {newModules.map((item, idx) => (
            <Link 
              key={item.id} 
              href={`/courses/${item.id}`}
              className={`group relative overflow-hidden rounded-[3rem] ${idx % 2 !== 0 ? 'lg:mt-20' : ''}`}
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-10 text-white">
                  <div className="flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-[#00C4CC]"></span>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#00C4CC]">
                      {item.category}
                    </p>
                  </div>
                  <h3 className="mt-4 font-serif text-3xl italic leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] opacity-60">
                    Released {item.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}