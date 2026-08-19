import Link from "next/link";

import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Listings",
    href: "/properties",
  },
  {
    label: "Mortgage Calculator",
    href: "/mortgage-calculator",
  },
  {
    label: "Property Search",
    href: "/property-search",
  },
  {
    label: "Contact Me",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">

      {/* Glass Navbar */}
      <nav
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-site
          items-center
          justify-between
          rounded-navbar
          border 
          border-glass-line-subtle
          bg-glass-navbar
          px-4
          py-3
          shadow-navbar
          backdrop-blur-glass-strong
          sm:px-6
          lg:px-8
        "
      >

        {/* Left Side: Logo + Black Oaks */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 sm:gap-4"
        >
          {/* Temporary Logo */}
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              border
              border-brand-primary
              text-xs
              font-bold
              text-brand-primary
              sm:h-14
              sm:w-14
            "
          >
            BO
          </div>

          {/* Company Name */}
          <div>
            <p
              className="
                whitespace-nowrap
                text-sm
                font-bold
                tracking-brand
                text-content-on-dark
                sm:text-base
                lg:text-lg
              "
            >
              BLACK OAKS
            </p>

            <p
              className="
                whitespace-nowrap
                text-[10px]
                uppercase
                tracking-eyebrow
                text-brand-primary
                sm:text-xs
              "
            >
              Real Estate
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNavbar items={navItems} />

        {/* Mobile Navigation */}
        <MobileNavbar items={navItems} />

      </nav>
    </header>
  );
}