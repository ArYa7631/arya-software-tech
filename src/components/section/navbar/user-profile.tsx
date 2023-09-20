import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link";
interface UserProfileProps {
    profileLinkData: {
        name: string;
        active: boolean;
        href: string;
    }[];
}

const UserProfile = ({profileLinkData}:UserProfileProps) => {
  return (
    <HoverCard>
    <HoverCardTrigger asChild>
        <Avatar id="user-menu-button">
            <AvatarImage src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            <AvatarFallback>AST</AvatarFallback>
        </Avatar>
    </HoverCardTrigger>
    <HoverCardContent>
        <div>
            <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul className="py-2">
                {profileLinkData.map((item) => (
                    <li>
                        <Link key={item.name} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">{item.name}</Link>
                    </li>

                ))}
            </ul>
        </div>
    </HoverCardContent>
</HoverCard>
  )
};

export default UserProfile;
