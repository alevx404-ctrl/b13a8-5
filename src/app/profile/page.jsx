"use client";

import { useState } from "react";
import { useSession } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();

  const [isEditing, setIsEditing] = useState(false);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 font-bold">You are not logged in.</p>
      </div>
    );
  }

  // ✅ REAL USER DATA FROM AUTH
  const userData = {
    name: session.user.name || "No Name",
    email: session.user.email || "No Email",
    image:
      session.user.image ||
      "https://via.placeholder.com/150",
    role: "Member",
    joined: "Recently",
  };

  const [tempData, setTempData] = useState(userData);

  const handleUpdate = (e) => {
    e.preventDefault();

    // ⚠️ currently local only (no DB update yet)
    alert("Profile updated locally (DB update not connected yet)");

    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-20 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#00C4CC]">
            Account Space
          </p>
          <h1 className="mt-4 font-serif text-5xl italic text-[#1F2937]">
            Personal{" "}
            <span className="font-sans not-italic font-black">
              Profile.
            </span>
          </h1>
        </div>

        <div className="overflow-hidden rounded-[3rem] border border-gray-100 bg-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)]">
          
          {/* Cover */}
          <div className="h-32 w-full bg-gradient-to-r from-[#1F2937] to-[#374151]"></div>

          <div className="relative px-8 pb-12 lg:px-12">
            
            {/* Image */}
            <div className="relative -mt-16 mb-8 flex justify-center">
              <div className="h-32 w-32 overflow-hidden rounded-[2rem] border-4 border-white bg-gray-100 shadow-xl">
                <img
                  src={tempData.image}
                  alt={tempData.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {!isEditing ? (
              // ✅ VIEW MODE
              <div className="text-center">
                <h2 className="font-serif text-3xl text-[#1F2937]">
                  {tempData.name}
                </h2>

                <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-[#FF4F5A]">
                  {userData.role}
                </p>

                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-50 pt-10 text-left">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Email Address
                    </p>
                    <p className="mt-1 font-medium text-[#1F2937]">
                      {tempData.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Member Since
                    </p>
                    <p className="mt-1 font-medium text-[#1F2937]">
                      {userData.joined}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-12 rounded-full border border-[#1F2937] px-10 py-4 text-[10px] font-bold tracking-[0.3em] text-[#1F2937] hover:bg-[#1F2937] hover:text-white"
                >
                  EDIT PROFILE
                </button>
              </div>
            ) : (
              // ✏️ EDIT MODE
              <form onSubmit={handleUpdate} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={tempData.name}
                      onChange={(e) =>
                        setTempData({ ...tempData, name: e.target.value })
                      }
                      className="w-full rounded-2xl border border-gray-100 bg-[#F9FAFB] px-6 py-4 text-sm outline-none focus:border-[#00C4CC]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Profile Image URL
                    </label>
                    <input
                      type="text"
                      value={tempData.image}
                      onChange={(e) =>
                        setTempData({ ...tempData, image: e.target.value })
                      }
                      className="w-full rounded-2xl border border-gray-100 bg-[#F9FAFB] px-6 py-4 text-sm outline-none focus:border-[#00C4CC]"
                    />
                  </div>

                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="submit"
                    className="flex-1 rounded-full bg-[#00C4CC] py-4 text-[10px] font-bold tracking-[0.3em] text-white shadow-lg"
                  >
                    SAVE CHANGES
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="flex-1 rounded-full border border-gray-100 py-4 text-[10px] font-bold tracking-[0.3em] text-gray-400 hover:bg-gray-50"
                  >
                    CANCEL
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}