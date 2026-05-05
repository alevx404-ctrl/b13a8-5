"use client";
import { authClient, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";



export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ REAL auth state
  const { data: session, isPending } = useSession();
  const isLoggedIn = Boolean(session?.user);

  const handleLogout = async () => {
    await authClient.signOut(); // ✅ proper logout
    window.location.href = "/login";
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    ...(isLoggedIn ? [{ name: "My Profile", path: "/profile" }] : []),
  ];

  if (isPending) return null; // prevent flicker

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-[#1F2937] p-2 text-white">
            <GraduationCap size={20} />
          </div>
          <span className="font-sans text-xl font-black uppercase tracking-tighter text-[#1F2937]">
            Skill<span className="text-[#00C4CC]">Sphere</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F2937] hover:text-[#00C4CC]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-6 md:flex">
          {!isLoggedIn ? (
            <>
              <Link href="/login" className="text-[11px] font-bold uppercase text-gray-400 hover:text-[#1F2937]">
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-[#1F2937] px-8 py-3 text-[11px] font-bold text-white hover:bg-[#FF4F5A]"
              >
                JOIN NOW
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              {/* 👇 show user name */}
              <span className="text-xs font-bold text-[#1F2937]">
                {session.user.name}
              </span>

              <button
                onClick={handleLogout}
                className="rounded-full border border-gray-200 px-6 py-2 text-[11px] font-bold text-[#FF4F5A] hover:bg-[#FF4F5A] hover:text-white"
              >
                SIGN OUT
              </button>
            </div>
          )}
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            ))}

            {!isLoggedIn ? (
              <Link href="/login">Login</Link>
            ) : (
              <button onClick={handleLogout}>Logout</button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}