// src/app/login/page.jsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: redirectTo, // ✅ IMPORTANT
      });

      if (error) {
        setError(error.message || "Invalid email or password");
        setLoading(false);
        return;
      }

      window.location.href = redirectTo;
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: redirectTo,
      });
    } catch (err) {
      console.error(err);
      setError("Google login failed.");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#F9FAFB] px-6">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] h-[400px] w-[400px] rounded-full bg-[#00C4CC]/5 blur-[100px]"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="rounded-[2.5rem] border border-gray-100 bg-white p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
          {/* Header */}
          <div className="mb-10 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#00C4CC]">
              Welcome Back
            </p>
            <h1 className="mt-4 font-serif text-4xl italic text-[#1F2937]">
              User{" "}
              <span className="font-sans not-italic font-black uppercase tracking-tighter">
                Login
              </span>
            </h1>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 rounded-xl border border-[#FF4F5A]/20 bg-[#FF4F5A]/5 p-4 text-center">
              <p className="text-xs font-bold tracking-wide text-[#FF4F5A]">
                {error}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full rounded-full border border-gray-100 bg-[#F9FAFB] px-6 py-4 text-sm outline-none focus:border-[#00C4CC]/50 focus:bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full rounded-full border border-gray-100 bg-[#F9FAFB] px-6 py-4 text-sm outline-none focus:border-[#00C4CC]/50 focus:bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#1F2937] py-4 text-[11px] font-bold tracking-[0.2em] text-white transition-all hover:bg-[#00C4CC] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-white"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:0.2s]"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:0.4s]"></span>
                </span>
              ) : (
                "SIGN IN"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <span className="h-[1px] flex-grow bg-gray-100"></span>
            <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">
              OR
            </span>
            <span className="h-[1px] flex-grow bg-gray-100"></span>
          </div>

          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-200 bg-white py-4 text-[11px] font-bold tracking-[0.1em] text-[#1F2937] hover:bg-gray-50"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="h-4 w-4"
              alt="Google"
            />
            CONTINUE WITH GOOGLE
          </button>

          <p className="mt-8 text-center text-xs text-gray-400">
            New to the platform?{" "}
            <Link
              href="/register"
              className="font-bold tracking-widest text-[#00C4CC] hover:underline"
            >
              REGISTER
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
