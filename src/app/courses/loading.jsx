export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F9FAFB]">
      <div className="relative h-16 w-16">
        <div className="absolute h-full w-full rounded-full border-4 border-gray-100"></div>
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-t-[#00C4CC]"></div>
      </div>
      <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
        Accessing Archive...
      </p>
    </div>
  );
}