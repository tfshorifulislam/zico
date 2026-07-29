import React from 'react';
import Image from 'next/image';
import { Gamepad2, Sparkles, ChevronRight, } from 'lucide-react';
import { Button } from '../ui/button';

const Banner = () => {
    return (
        <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center pt-24 pb-16 lg:py-0">
           
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Text & CTAs */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up">
                        
                        {/* Badges */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-white shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                                <Gamepad2 className="w-4 h-4 text-purple-400" />
                                <span>All Platforms</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-white shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                                <Sparkles className="w-4 h-4 text-orange-400" />
                                <span>All Games</span>
                            </div>
                        </div>

                        {/* Headline */}
                        <h1 className="font-khand text-5xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                            Elevate Your <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-orange-500 to-amber-500 drop-shadow-sm">
                                Gaming Life
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl font-light leading-relaxed">
                            Discover the ultimate hub to connect with players, track your stats, and build your community across every platform and game you love.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <Button className="w-full sm:w-auto px-8 h-12 lg:h-14 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300 text-base font-semibold border-0 cursor-pointer">
                                Get Started Free
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Image & UI Elements */}
                    <div className="relative w-full aspect-square max-w-125 lg:max-w-none lg:w-[120%] lg:-right-[10%] mx-auto animate-fade-in-up mt-8 lg:mt-0">
                        
                       
                        
                        {/* Main Image Container */}
                        <div className="relative w-full h-full z-10 flex items-center justify-center">
                            <Image 
                                src="/mask-group-1-min.png" 
                                alt="Gaming App Preview" 
                                fill
                                className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
                                priority
                            />
                        </div>

                        {/* Floating Glass Cards */}
                        <div className="absolute top-[20%] -left-[5%] md:-left-[10%] p-4 rounded-2xl bg-[#2a1645]/80 border border-white/10 backdrop-blur-md shadow-2xl z-20 hidden sm:block" >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-black text-lg shadow-inner">
                                    99
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-0.5">Match Score</div>
                                    <div className="text-sm font-bold text-white">Perfect Synergy</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-[25%] -right-[5%] md:right-[5%] p-4 rounded-2xl bg-white/5 border border-purple-500/30 backdrop-blur-xl  z-20  hidden sm:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/20">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-0.5">Achievement</div>
                                    <div className="text-sm font-bold text-white">Godlike Streak</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;