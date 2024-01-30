"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className="w-full border z-[1000]  border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Button
            type="button"
            variant="link"
            onClick={() => router.push("/")}
            className="flex items-center space-x-2 no-underline hover:no-underline rtl:space-x-reverse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={`hsl(24.6, 95%, 53.1%)`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="8" />
            </svg>
            <span className="self-center text-2xl m-0 font-semibold italic whitespace-nowrap text-black dark:text-white">
              KnowQuest
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={`hsl(24.6, 95%, 53.1%)`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="8" />
            </svg>
          </Button>

          <Button
            type="button"
            className="px-5 py-4 text-lg font-semibold rounded-lg shadow-md  "
            aria-controls="navbar-hamburger"
            aria-expanded="false"
            variant="default"
            size="lg"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
