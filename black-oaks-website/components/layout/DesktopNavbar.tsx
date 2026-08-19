"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatedBackground } from "../motion-primitives/animated-background";

type NavItem = {
    label: string;
    href: string;
};

type DesktopNavbarProps = {
    items: NavItem[];
};

export default function DesktopNavbar({
    items,
}: DesktopNavbarProps) {
    const pathname = usePathname();

    const activeItem = items.find((item) => {
        if (item.href === "/") {
            return pathname === "/";
        }
        
        return (
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`)
        );
    });

    const activeHref = activeItem?.href;

    return (
        <div className="hidden lg:flex">
            <AnimatedBackground
                defaultValue={activeHref}
                className="
                    rounded-pill
                    bg-glass-highlight
                    backdrop-blur-glass-soft
                "
                transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.3,
                }}
                enableHover
            >
                {items.map((item) => {
                    const isActive = activeHref === item.href;

                    return(
                        <Link
                            key={item.href}
                            href={item.href}
                            data-id={item.href}
                            aria-current={isActive ? "page" : undefined}
                            className={`
                                relative
                                z-10
                                whitespace-nowrap
                                rounded-pill
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                transition-colors
                                duration-300
                                xl:px-5
                                xl:text-base
                                ${
                                    isActive
                                    ? "text-brand-primary"
                                    : "text-content-on-dark hover:text-brand-primary"
                                }
                            `}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </AnimatedBackground>
        </div>
    );
}