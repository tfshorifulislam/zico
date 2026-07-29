"use client"

import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
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
import { useSession } from "@/app/lib/auth-client"

export function DropdownMenuAvatar() {

    const {data: session } = useSession()
    const user = session?.user;
console.log(user)
  return (
    <DropdownMenu>
    <DropdownMenuTrigger
  render={
    <Button variant="ghost" size="icon" className="rounded-full">
      <Avatar>
        <AvatarImage
          src={user?.image ?? undefined}
          alt={user?.name || "User Avatar"}
        />
        <AvatarFallback>
          {user?.name?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </Button>
  }
/>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheckIcon />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
