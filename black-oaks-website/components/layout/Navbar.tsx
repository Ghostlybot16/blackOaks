import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-[#0b0b0b] text-white">
            <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-6 md:px-8 xl:px-12">
                
                {/* Left side: company + agent info */}
                <div className="flex min-w-0 items-center gap-4 md:gap-6 xl:gap-12">

                    {/* Company logo placeholder */}
                    <Link href='/' className="flex shrink-0 items-center gap-3 xl:gap-8">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-red-600 text-xs font-bold text-red-500 xl:h-20 xl:w-20">
                            BO
                        </div>
                        
                        {/* Text beside the company logo */}
                        <div className="hidden lg:block">
                            <p className="whitespace-nowrap text-base font-bold tracking-[0.18em] xl:text-lg">
                                BLACK OAKS
                            </p>

                            <p className="whitespace-nowrap text-xs uppercase tracking-[0.25em] text-red-500">
                                Real Estate
                            </p>
                        </div>
                    </Link>

                    {/* Agent Headshot Placeholder */}
                    <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs text-zinc-400 md:flex xl:h-28 xl:w-28">
                        Photo
                    </div>

                    {/* Agent Profile Information */}
                    <div className="hidden min-w-0 lg:block">
                        <p className="truncate text-base font-semibold">
                            AHSAN ALI
                        </p>
                        <p className="mt-1 whitespace-nowrap text-xs uppercase tracking-[0.15em] text-zinc-400">
                            Real Estate Broker
                        </p>

                        <div className="mt-2 space-y-1 text-xs text-zinc-400">
                            <p className="whitespace-nowrap">
                                AHSAN.ALI@BLACKOAKS.CA
                            </p>
                            
                            <p className="whitespace-nowrap">
                                (647) 886 1289
                            </p>
                        </div>
                    </div>

                </div>

                {/* Right side: User Navigation */}
                <div className="hidden shrink-0 items-center gap-5 xl:flex 2xl:gap-16">
                    <Link href="/" className="relative whitespace-nowrap text-base font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:text-red-500 hover:after:w-full">
                        Home
                    </Link>
                    
                    <Link href="/" className="relative whitespace-nowrap text-base font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:text-red-500 hover:after:w-full">
                        Listings
                    </Link>

                    <Link href="/mortgage-calculator" className="relative text-base font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:text-red-500 hover:after:w-full">
                        Mortgage Calculator
                    </Link>

                    <Link href="/contact" className="relative text-base font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:text-red-500 hover:after:w-full">
                        Contact Me
                    </Link>
                </div>
            </nav>
        </header>
    );
}