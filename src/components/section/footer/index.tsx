import React from "react";
import { FacebookIcon, GithubIcon, GlobeIcon, InstragramIcon, TwitterIcon } from "@/components/svg-component";

interface FooterProps {
    footerText: string;
    footerIdentColor: string;
    footerLinkHeaderColor: string;
    footerBgColor: string;
    footerTextColor: string;
    resourcesList: { label: string; link: string }[];
    followUsList: { label: string; link: string }[];
    legalList: { label: string; link: string }[];
  }

const Footer = ({
    footerText,
    footerIdentColor,
    footerLinkHeaderColor,
    footerBgColor,
    footerTextColor,
    resourcesList,
    followUsList,
    legalList,
}:FooterProps) => {
    const footerStyle = { color: footerTextColor };
    return (
        <section>
            <footer
                className="p-4 bg-white sm:p-6 dark:bg-gray-800"
                style={{ backgroundColor: footerBgColor }}
            >
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="https://flowbite.com" className="flex items-center">
                                <img
                                    src="https://flowbite.com/docs/images/logo.svg"
                                    className="mr-3 h-8"
                                    alt="FlowBite Logo"
                                />
                                <span
                                    className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                                    style={{ color: footerIdentColor }}
                                >
                                    {footerText}
                                </span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2
                                    className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                                    style={{ color: footerLinkHeaderColor }}
                                >
                                    Resources
                                </h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    {resourcesList.map((resource, index) => (
                                        <li key={index} className="mb-4">
                                            <a
                                                href={resource.link}
                                                style={footerStyle}
                                                className="hover:underline"
                                            >
                                                {resource.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2
                                    className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                                    style={{ color: footerLinkHeaderColor }}
                                >
                                    Follow us
                                </h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    {followUsList.map((followUs, index) => (
                                        <li key={index} className="mb-4">
                                            <a
                                                href={followUs.link}
                                                style={footerStyle}
                                                className="hover:underline"
                                            >
                                                {followUs.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2
                                    className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
                                    style={{ color: footerLinkHeaderColor }}
                                >
                                    Legal
                                </h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    {legalList.map((legal, index) => (
                                        <li key={index} className="mb-4">
                                            <a
                                                href={legal.link}
                                                style={footerStyle}
                                                className="hover:underline"
                                            >
                                                {legal.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400" style={footerStyle}>© 2022 <a href="https://flowbite.com" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" style={footerStyle}>
                                <FacebookIcon />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" style={footerStyle}>
                                <InstragramIcon />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" style={footerStyle}>
                                <TwitterIcon />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" style={footerStyle}>
                                <GithubIcon />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" style={footerStyle}>
                                <GlobeIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
