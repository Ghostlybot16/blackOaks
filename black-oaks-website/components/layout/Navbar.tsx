import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

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
    href: "property-search",
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
          max-w-[1800px]
          items-center
          justify-between
          rounded-2xl
          border border-white/7
          bg-black/20
          px-4
          py-3
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
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
              border-red-600
              text-xs
              font-bold
              text-red-500
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
                tracking-[0.18em]
                text-white
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
                tracking-[0.25em]
                text-red-500
                sm:text-xs
              "
            >
              Real Estate
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div
          className="
            hidden
            items-center
            gap-6
            lg:flex
            xl:gap-10
            2xl:gap-14
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative
                whitespace-nowrap
                text-sm
                font-semibold
                text-white
                transition-colors
                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-red-500
                after:transition-all
                after:duration-300
                hover:text-red-500
                hover:after:w-full
                xl:text-base
              "
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <MobileNavbar items={navItems} />

      </nav>
    </header>
  );
}