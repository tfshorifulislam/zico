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
        <main className="min-h-screen bg-background flex items-center justify-center px-6">
            <div className="w-full max-w-md rounded-3xl border border-border bg-card p-10 shadow-sm">
                {/* Logo */}
                <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                        <MessageCircleHeart size={30} />
                    </div>
                </div>

                {/* Title */}
                <div className="mt-8 text-center">
                    <h1 className="text-4xl font-bold text-foreground">Zico</h1>

                    <p className="mt-3 text-secondary text-lg">
                        Your thoughts. Your voice.
                    </p>

                    <p className="mt-8 text-sm leading-7 text-secondary">
                        Share your thoughts with the world through text or voice.
                        <br />
                        No pressure. Just be yourself.
                    </p>
                </div>

                {/* Google Button */}
                <button
                    onClick={handleLoginWithGoogle}
                    className="mt-10 flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-white px-5 py-3 font-medium text-gray-800 transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
                >


                    Continue with Google
                </button>

                {/* Footer */}
                <p className="mt-8 text-center text-xs leading-6 text-secondary">
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </main>
    );
};

export default LoginPage;