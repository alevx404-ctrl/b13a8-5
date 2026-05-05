// src/components/shared/Footer.jsx

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Contact Info */}
        <div>
          <h2 className="mb-5 text-xl font-bold text-[#00C4CC]">
            Contact Info
          </h2>

          <div className="space-y-3 text-sm text-gray-300">
            <p>Email: support@skillsphere.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="mb-5 text-xl font-bold text-[#FF4F5A]">
            Social Links
          </h2>

          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Facebook">
              <Image
                src="/assets/fb.png"
                alt="Facebook"
                width={28}
                height={28}
                className="transition duration-200 hover:scale-110"
              />
            </Link>

            <Link href="#" aria-label="Instagram">
              <Image
                src="/assets/instagram.png"
                alt="Instagram"
                width={28}
                height={28}
                className="transition duration-200 hover:scale-110"
              />
            </Link>

            <Link href="#" aria-label="LinkedIn">
              <Image
                src="/assets/linkedin.png"
                alt="LinkedIn"
                width={28}
                height={28}
                className="transition duration-200 hover:scale-110"
              />
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h2 className="mb-5 text-xl font-bold text-[#FFD166]">
            Legal
          </h2>

          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <Link href="#" className="transition hover:text-white">
              Terms & Conditions
            </Link>

            <Link href="#" className="transition hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 px-4 py-4 text-center text-sm text-gray-400">
        © 2026 SkillSphere. All rights reserved.
      </div>
    </footer>
  );
}