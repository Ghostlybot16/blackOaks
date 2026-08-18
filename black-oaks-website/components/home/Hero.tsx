import Image from "next/image";
import PropertySearch from "./PropertySearch";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* Hero background image */}
            <Image
                src="/images/hero/black-oaks-hero.webp"
                alt="Luxury residential property"
                fill
                preload
                sizes="100vw"
                className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Hero Content Box */}
            <div 
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-screen
                    w-full
                    max-w-[1800px]
                    items-center
                    px-6
                    pb-32
                    pt-32
                    sm:px-8
                    lg:px-12
                    xl:px-16
                "
            >
                
                <div className="max-w-3xl">
                    
                    {/* Small Heading - Realtor Company Name */}
                    <p 
                    
                    className="
                        mb-5
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-red-500
                        sm:text-sm">
                        
                        Black Oaks Real Estate
                    </p>


                    {/* Main Hero Heading */}
                    <h1
                        className="
                            max-w-3xl
                            text-5xl
                            font-semibold
                            leading-[1.05]
                            tracking-tight
                            text-white
                            sm:text-6xl
                            lg:text-7xl
                            xl:text-8xl">

                                Moving You Towards What {" "}
                                <span className="text-red-500">
                                    Matters.
                                </span>
                    </h1>


                    {/* Supporting Text */}
                    <p 
                        className="
                            mt-7
                            max-w-xl
                            text-base
                            leading-7
                            text-zinc-300
                            sm:text-lg">

                                Thoughtful guidance, local expertise, and a straightforward
                                approach to helping you find your next home.
                            </p>

                </div>

                {/* Property Search */}
                <div 
                    className="
                        absolute
                        bottom-40
                        left-0
                        right-0
                        z-20
                        px-6
                        sm:px-8
                        lg:px-12
                        xl:px-16
                    "
                >
                    <div className="mx-auto w-full max-w-[1800px]">
                        <PropertySearch />

                    </div>
                </div>
        
            </div>

        </section>
    );
}