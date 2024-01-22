import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={`hsl(24.6, 95%, 53.1%)`}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="8" />
            </svg>
            <span className="self-center text-2xl m-0 font-semibold italic whitespace-nowrap dark:text-white">
              KnowQuest
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={`hsl(24.6, 95%, 53.1%)`}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="8" />
            </svg>
          </a>

          <Button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="p-3"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
            variant="outline"
            size="lg"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
