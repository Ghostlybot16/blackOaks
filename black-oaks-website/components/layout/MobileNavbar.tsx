"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type MobileNavbarProps = {
  items: NavItem[];
};

export default function MobileNavbar({
  items,
}: MobileNavbarProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="
          flex
          h-10
          w-10
          shrink-0
          flex-col
          items-center
          justify-center
          gap-1.5
          rounded-control
          transition-colors
          hover:bg-glass-highlight
          lg:hidden
        "
        aria-label="Toggle navigation menu"
        aria-expanded={navbarOpen}
      >
        <span
          className={`
            block
            h-0.5
            w-6
            bg-content-on-dark
            transition-transform
            duration-300
            ${
              navbarOpen
                ? "translate-y-2 rotate-45"
                : ""
            }
          `}
        />

        <span
          className={`
            block
            h-0.5
            w-6
            bg-content-on-dark
            transition-opacity
            duration-300
            ${
              navbarOpen
                ? "opacity-0"
                : "opacity-100"
            }
          `}
        />

        <span
          className={`
            block
            h-0.5
            w-6
            bg-content-on-dark
            transition-transform
            duration-300
            ${
              navbarOpen
                ? "-translate-y-2 -rotate-45"
                : ""
            }
          `}
        />
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`
          absolute
          left-0
          right-0
          top-[calc(100%+0.5rem)]
          overflow-hidden
          rounded-menu
          border
          border-glass-line
          bg-glass-menu
          shadow-xl
          backdrop-blur-glass-strong
          transition-all
          duration-300
          ease-in-out
          lg:hidden
          ${
            navbarOpen
              ? "visible max-h-96 translate-y-0 opacity-100"
              : "invisible max-h-0 -translate-y-2 opacity-0"
          }
        `}
      >
        <div className="flex flex-col px-5 py-2">
          
          {items.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setNavbarOpen(false)}
              className={`
                py-4
                text-base
                font-semibold
                text-content-on-dark
                transition-colors
                hover:text-brand-primary
                ${
                  index !== items.length - 1
                    ? "border-b border-glass-line"
                    : ""
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}