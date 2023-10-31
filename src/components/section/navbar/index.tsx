import React, { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GLOBAL_HIGHLIGHT_COLOR, GLOBAL_STYLE, NAVBAR_BG_COLOR, NAVBAR_IDENT_COLOR, NAVBAR_TEXT_COLOR } from "@/constants/colorConstant";
import { NavLinkData, profileLIinkData } from "@/constants/dummyData";
import UserProfile from "./user-profile";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { userService } from "@/services/userService";

const Navbar = () => {
    const [isLogin,setIsLogin] = useState(false);
    const [user,setUser] = useState([]);

    useEffect(() => {
        const subscription = userService.userObservable.subscribe(x =>{ 
            setIsLogin(!!x);
            setUser(x);
        });
        return () => subscription.unsubscribe();
    }, []);

    console.log('user=========',user);
    
    const activeLinkCss = "block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    const nonActiveCss = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

    return (
        <section>
            <nav className="border-gray-200 dark:bg-gray-900" style={GLOBAL_STYLE}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="/images/arya_software_tech.png" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" style={{color: NAVBAR_IDENT_COLOR}}>AryaSoftwareTech</span>
                    </a>
                    <div className="flex items-center md:order-2 gap-3">

                        {isLogin && <UserProfile profileLinkData= {profileLIinkData} />}
                        {!isLogin && <SignInForm />}
                        {!isLogin && <SignUpForm />}
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" style={GLOBAL_STYLE}>
                            {NavLinkData.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} style={item.active ? {color: GLOBAL_HIGHLIGHT_COLOR} : {color: NAVBAR_TEXT_COLOR}} className={item.active ? activeLinkCss : nonActiveCss}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </section>

    )
};

export default Navbar;
