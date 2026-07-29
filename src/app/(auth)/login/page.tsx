"use client";

import { signIn } from "@/app/lib/auth-client";
import { MessageCircleHeart } from "lucide-react";

const LoginPage = () => {

    const handleLoginWithGoogle = async () => {
        console.log('clicked')
        await signIn.social({
            provider: 'google'
        })
    }

    return (
        <main className="min-h-screen bg-background relative flex items-center justify-center px-6 overflow-hidden">

            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#2a1645]/60 backdrop-blur-xl p-10 shadow-2xl relative z-10 animate-fade-in-up">
                {/* Logo */}
                <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-orange-400 to-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                        <MessageCircleHeart size={30} />
                    </div>
                </div>

                {/* Title */}
                {/* Title */}
                <div className="mt-8 text-center">
                    <h1 className="font-khand text-5xl font-black tracking-tight text-white">
                        ZICO
                    </h1>

                    <p className="mt-3 text-lg text-white/70">
                        Connect. Play. Dominate.
                    </p>

                    <p className="mt-8 text-sm leading-7 text-white/50">
                        Join the ultimate gaming community where players connect,
                        discover teammates, track their progress, and level up together.
                        <br />
                        One platform. Every game. Every gamer.
                    </p>
                </div>
                {/* Google Button */}
                <button
                    onClick={handleLoginWithGoogle}
                    className="mt-10 flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3.5 font-semibold text-white transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-[0.98] cursor-pointer"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.81 15.71 17.59V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                        <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.59C14.73 18.25 13.48 18.64 12 18.64C9.13 18.64 6.7 16.7 5.82 14.09H2.13V16.94C3.95 20.55 7.69 23 12 23Z" fill="#34A853" />
                        <path d="M5.82 14.09C5.59 13.43 5.46 12.73 5.46 12C5.46 11.27 5.59 10.57 5.82 9.91V7.06H2.13C1.38 8.56 0.95 10.23 0.95 12C0.95 13.77 1.38 15.44 2.13 16.94L5.82 14.09Z" fill="#FBBC05" />
                        <path d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.46 2.11 14.97 1 12 1C7.69 1 3.95 3.45 2.13 7.06L5.82 9.91C6.7 7.3 9.13 5.38 12 5.38Z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                </button>

                {/* Footer */}
                <p className="mt-8 text-center text-xs leading-6 text-white/40">
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </main>
    );
};

export default LoginPage;