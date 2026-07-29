import Link from "next/link";
import { DropdownMenuAvatar } from "./DropDownMenu";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import LoginButton from "./LoginButton";

const NAV_LINKS = [
    { name: "Home", href: "/p" },
    { name: "Communities", href: "/p" },
    { name: "Profile", href: "/p" },
];

const Navbar = async () => {
    const user = await auth.api.getSession({
        headers: await headers()
    })

    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-white/5 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto flex h-14 md:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Left: ZICO Logo & Desktop Nav */}
                <div className="flex items-center gap-8">
                    <Link href={'/'} className="text-xl md:text-2xl font-black text-white tracking-tight hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">
                        ZICO
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex items-center gap-1'>
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right: Avatar & Actions & Mobile Menu */}
                <div className="flex items-center gap-3">
                    {user ? <DropdownMenuAvatar /> : <LoginButton />}
                </div>

            </div>
        </header>
    );
};

export default Navbar;