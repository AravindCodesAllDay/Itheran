"use client";

import { useState } from "react";

interface ClickToCopyProps {
  value: string;
  label?: string;
  className?: string;
}

export default function ClickToCopy({
  value,
  label,
  className = "",
}: ClickToCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`group relative flex items-center gap-2 cursor-pointer transition-all duration-300 ${className}`}
      title="Click to copy"
    >
      {/* Label / Value Section */}
      <div className="flex flex-col items-start">
        {label && (
          <span className="text-xs font-bold uppercase tracking-widest text-muted mb-0.5">
            {label}
          </span>
        )}
        <div className="flex items-center gap-2">
          {/* Copy Icon (appears on hover left side if no icon prop provided, or next to text) */}

          <span
            className={`font-semibold transition-colors ${copied ? "text-green-600 dark:text-green-400" : "text-light group-hover:text-secondary"}`}
          >
            {copied ? "Copied!" : value}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        </div>
      </div>
    </button>
  );
}
