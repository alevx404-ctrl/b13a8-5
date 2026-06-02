// src/app/register/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoUrl: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // ✅ safer + compatible signup call
const { data, error } = await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      image: formData.photoUrl, // ✅ Better-Auth uses 'image', not 'photoUrl'
    });
      // 🔥 DEBUG (important)
      console.log("SIGNUP RESPONSE:", { data, error });

      if (error) {
        setError(error.message ||"Registration failed.");
        setLoading(false);
        return;
      }
      window.location.href = "/";
      // ✅ use router instead of reload
      //router.push("/");
    } catch (err) {
      console.error("SIGNUP CRASH:", err);
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      console.error(err);
      setError("Google login failed.");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#F9FAFB] px-6 py-12">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-[#FF4F5A]/5 blur-[100px]"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="rounded-[2.5rem] border border-gray-100 bg-white p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
          {/* Header */}
          <div className="mb-10 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF4F5A]">
              Join the Elite
            </p>
            <h1 className="mt-4 font-serif text-4xl italic text-[#1F2937]">
              Create{" "}
              <span className="font-sans not-italic font-black uppercase tracking-tighter">
                Account
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
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full rounded-full border border-gray-100 bg-[#F9FAFB] px-6 py-3.5 text-sm outline-none focus:border-[#00C4CC]/50 focus:bg-white"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full rounded-full border border-gray-100 bg-[#F9FAFB] px-6 py-3.5 text-sm outline-none focus:border-[#00C4CC]/50 focus:bg-white"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Photo URL (optional)
              </label>
              <input
                type="text"
                className="w-full rounded-full border border-gray-100 bg-[#F9FAFB] px-6 py-3.5 text-sm outline-none focus:border-[#00C4CC]/50 focus:bg-white"
                onChange={(e) =>
                  setFormData({ ...formData, photoUrl: e.target.value })
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full rounded-full border border-gray-100 bg-[#F9FAFB] px-6 py-3.5 text-sm outline-none focus:border-[#00C4CC]/50 focus:bg-white"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full rounded-full bg-[#1F2937] py-4 text-[11px] font-bold tracking-[0.2em] text-white hover:bg-[#FF4F5A] disabled:opacity-50"
            >
              {loading ? "REGISTERING..." : "REGISTER NOW"}
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
            GOOGLE REGISTRATION
          </button>

          <p className="mt-8 text-center text-xs text-gray-400">
            Already a member?{" "}
            <Link
              href="/login"
              className="font-bold tracking-widest text-[#FF4F5A] hover:underline"
            >
              LOG IN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
