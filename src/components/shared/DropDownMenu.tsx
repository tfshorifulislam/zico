"use client"

import {
    HomeIcon,
    UsersIcon,
    UserIcon,
    LogOutIcon,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut, useSession } from "@/app/lib/auth-client"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"

export function DropdownMenuAvatar() {
    const handleLogout = async () => {
        try {
            await signOut();
            toast.success("Logged out successfully!");
            redirect('/')
        } catch (error) {
            console.error(error);
        }
    };

    const { data: session } = useSession()
    const user = session?.user;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-9 w-9 md:h-10 md:w-10">
                        <Avatar className="h-8 w-8 md:h-9 md:w-9 border border-white/10 hover:border-white/30 transition-colors">
                            <AvatarImage
                                src={user?.image ?? undefined}
                                alt={user?.name || "User Avatar"}
                                className="object-cover"
                            />
                            <AvatarFallback className="bg-primary/20 text-white font-medium">
                                {user?.name?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                }
            />
            <DropdownMenuContent align="end" className="w-56 bg-[#2a1645]/95 backdrop-blur-xl border-white/10 text-white shadow-xl rounded-xl p-1.5 overflow-hidden">
                <DropdownMenuGroup className="mb-1">
                    {user?.name && (
                        <div className="px-2 py-1.5 text-sm font-semibold text-white/90 truncate">
                            {user.name}
                        </div>
                    )}
                    {user?.email && (
                        <div className="px-2 pb-2 text-xs text-white/50 truncate">
                            {user.email}
                        </div>
                    )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-white/10 -mx-1.5 my-1" />
                <DropdownMenuGroup className="space-y-0.5">
                    <DropdownMenuItem className="focus:bg-white/10 focus:text-white rounded-lg cursor-pointer transition-colors px-3 py-2 text-sm text-white/80">
                        <HomeIcon className="mr-2 h-4 w-4" />
                        <span>Home</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-white/10 focus:text-white rounded-lg cursor-pointer transition-colors px-3 py-2 text-sm text-white/80">
                        <UsersIcon className="mr-2 h-4 w-4" />
                        <span>Communities</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-white/10 focus:text-white rounded-lg cursor-pointer transition-colors px-3 py-2 text-sm text-white/80">
                        <UserIcon className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-white/10 -mx-1.5 my-1" />
                <DropdownMenuItem onClick={handleLogout} className="focus:bg-red-500/20 focus:text-red-400 text-red-400/90 rounded-lg cursor-pointer transition-colors px-3 py-2 text-sm mt-0.5">
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
