import React from "react";

const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

const Footer = () => {
    return (
        <div className="content mt-[140px] bg-black px-5 lg:px-[60px]  py-[55px] rounded-t-[45px]">
            <div className="flex items-center justify-between flex-col gap-10 lg:flex-row">
                <div className="flex items-center gap-3">
                    <img src="/white-logo.svg" alt="Positivus logo" />
                    <span className="font-medium text-[30px] text-white">
                        Positivus
                    </span>
                </div>
                <nav className="flex items-center flex-col lg:flex-row gap-4 lg:gap-10">
                    {navLinks.map((navLink) => (
                        <a
                            href="#"
                            className="underline text-white text-[18px] hover:no-underline"
                            key={navLink}
                        >
                            {navLink}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-5">
                    <img className="pointer" src="/socials/in.svg" alt="in" />
                    <img
                        className="pointer"
                        src="/socials/facebook.svg"
                        alt="facebook"
                    />
                    <img
                        className="pointer"
                        src="/socials/twitter.svg"
                        alt="twitter"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between flex-col gap-10 lg:flex-row mt-16">
                <div className="flex items-center flex-col lg:items-start">
                    <span className="bg-green rounded-lg px-2 font-medium text-[20px] w-fit">
                        Contact us:
                    </span>
                    <ul className="flex flex-col items-center lg:items-start lg:text-start text-center gap-[20px] mt-10 lg:mt-[27px]">
                        <li className="pointer text-white text-[18px]">
                            Email: info@positivus.com
                        </li>
                        <li className="pointer text-white text-[18px]">
                            Phone: 555-567-8901
                        </li>
                        <li className="text-white text-[18px]">
                            Address: 1234 Main St <br /> Moonstone City,
                            Stardust State 12345
                        </li>
                    </ul>
                </div>
                <div className="bg-dark h-full px-[30px] lg:px-10 py-[30px] lg:py-[58px] flex items-center flex-wrap lg:flex-nowrap rounded-[14px] gap-5">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full lg:max-w-[285px] h-[67px] px-[35px] border
                        border-white rounded-[14px] bg-dark text-white text-[18px]"
                    />
                    <button className="blackButton py-[20px] px-[35px] bg-green text-dark text-[20px] font-medium w-full">
                        Subscribe to news
                    </button>
                </div>
            </div>
            <div className="mt-[50px] pt-[50px] border-t border-white flex items-center flex-col lg:flex-row gap-4 lg:gap-10">
                <span className="text-white text-[18px]">
                    © 2024 Positivus. All Rights Reserved.
                </span>
                <a
                    href="#"
                    className="underline hover:no-underline text-white text-[18px]"
                >
                    Privacy Policy
                </a>
            </div>
        </div>
    );
};

export default Footer;
