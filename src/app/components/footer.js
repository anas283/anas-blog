import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex max-w-screen-md mx-auto items-center justify-center px-6 py-6 md:px-0 overflow-x-hidden">
      <div className="flex flex-col gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 lucide lucide-coffee flex mx-auto"
        >
          <path d="M10 2v2" />
          <path d="M14 2v2" />
          <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
          <path d="M6 2v2" />
        </svg>
        <h5 className="text-gray-800 text-sm">
          © {year} Anas
        </h5>
      </div>
    </div>
  );
};

export default Footer;
