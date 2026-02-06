import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-mono text-[rgba(128,255,128,0.8)]">
      
      {/* Noise */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage:
            'url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif")',
          backgroundSize: "cover",
        }}
      />

      {/* Overlay scanlines */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[repeating-linear-gradient(180deg,rgba(0,0,0,0)_0,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0)_100%)] bg-[length:auto_4px] scanline" />

      {/* Terminal */}
      <div className="relative mx-auto max-w-5xl p-16 uppercase">
        <h1 className="text-4xl mb-6">
          Error <span className="text-white">404</span>
        </h1>

        <p className="mb-4 before:content-['>_'] before:mr-2">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>

        <p className="mb-4 before:content-['>_'] before:mr-2">
          Please try to{" "}
          <Link
            to={-1}
            className="text-white before:content-['['] after:content-[']'] hover:underline"
          >
            go back
          </Link>{" "}
          or{" "}
          <Link
            to="/"
            className="text-white before:content-['['] after:content-[']'] hover:underline"
          >
            return to the homepage
          </Link>
          .
        </p>

        <p className="before:content-['>_'] before:mr-2">
          Good luck.
        </p>
      </div>

      {/* Animation */}
      <style>
        {`
          .scanline::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: linear-gradient(
              0deg,
              transparent 0%,
              rgba(32,128,32,0.2) 2%,
              rgba(32,128,32,0.8) 3%,
              rgba(32,128,32,0.2) 4%,
              transparent 100%
            );
            animation: scan 7.5s linear infinite;
          }

          @keyframes scan {
            0% { background-position: 0 -100vh; }
            100% { background-position: 0 100vh; }
          }
        `}
      </style>
    </div>
  );
};

export default NotFoundPage;
