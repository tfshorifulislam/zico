import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="relative flex min-h-[90vh] items-center px-6">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

                {/* Left Content */}
                <div className="flex flex-col items-start text-left">
                    <div className="space-y-2">
                        <h1 className="font-khand text-5xl font-black uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                            Elevate Your
                        </h1>

                        <h2 className="font-khand text-5xl font-black uppercase tracking-tight sm:text-6xl md:text-7xl">
                            <span className="bg-linear-to-r from-[#FFB347] via-[#FF7905] to-[#FF4D00] bg-clip-text text-transparent">
                                Gaming Life
                            </span>
                        </h2>
                    </div>

                    <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                        Welcome to the next evolution of your gaming journey.
                        Unlock an all-in-one platform built to bridge cross-play
                        communities, elevate your performance with advanced stat
                        tracking, and connect you with the squad you've been
                        searching for—no matter what game or system you play on.
                    </p>

                    <div className="mt-10">
                        <Link href={'/login'}>
                            <Button
                                size="lg"
                                className="cursor-pointer bg-[#FF7905] px-8 py-6 text-base font-semibold text-white transition hover:bg-[#e46b02]"
                            >
                                Get Started Free
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <Image
                        src="/0.png"
                        alt="Gaming Banner"
                        width={850}
                        height={850}
                        priority
                        className="h-auto w-full max-w-xl object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;