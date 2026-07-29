import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import Link from "next/link";
import { DropdownMenuAvatar } from "./DropDownMenu";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import LoginButton from "./LoginButton";

const Navbar = async () => {

    const user = await auth.api.getSession({
        headers: await headers()
    })

    return (
        <header className="sticky top-0 z-50 w-full">
            <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Left: ZICO Logo */}
                <div className="flex items-center gap-2">
                    <Link href={'/'} className="text-xl md:text-2xl font-black text-white">
                        ZICO
                    </Link>
                </div>

                {/* Center: Navigation Menu */}
                <NavigationMenu className='hidden md:block'>
                    <NavigationMenuList>


                        <NavigationMenuItem>
                            <NavigationMenuLink className='text-[#ffffff80] hover:text-[#ffffff]' href="/p">
                                Home
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink className='text-[#ffffff80] hover:text-[#ffffff]' href="/p">
                                Communities
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink className='text-[#ffffff80] hover:text-[#ffffff]' href="/p">
                                Profile
                            </NavigationMenuLink>
                        </NavigationMenuItem>


                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right: Avatar & Actions */}
                <div>
                    {user ? <DropdownMenuAvatar /> : <LoginButton />}
                </div>

            </div>
        </header>
    );
};

export default Navbar;