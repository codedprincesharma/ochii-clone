import React from "react";

function Footer() {
  return (
    <div className="w-full min-h-screen bg-zinc-200 flex flex-col md:flex-row p-6 md:p-10 gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-between">
        <h1 className="uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-tight">
          eye-opening
        </h1>

        {/* Logo */}
        <div className="mt-10 md:mt-0">
          <svg
            width="72"
            height="30"
            viewBox="0 0 72 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG paths remain unchanged */}
            <path d="M9.8393 10.2032C4.22951..." fill="currentColor" />
            <path d="M62.8086 29.4855H67.1222..." fill="currentColor" />
            <path d="M67.6816 0.172852V6.13439..." fill="currentColor" />
            <path d="M31.5648 25.7016C28.5393..." fill="currentColor" />
            <path d="M52.4097 10.1387C51.2512..." fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-between">
        <h1 className="uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight">
          presentations
        </h1>
        <div className="mt-6">
          {/* Add future contact/info content here if needed */}
          <p className="text-sm text-zinc-600">© 2025 Ochi Studios. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
