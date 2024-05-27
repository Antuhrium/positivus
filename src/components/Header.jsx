import { useState, useEffect } from "react";

const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

const Header = ({ isOpen, setIsOpen }) => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () =>
            setScreenSize(window.screen.width)
        );
        return () => {
            window.removeEventListener("resize", () =>
                setScreenSize(window.screen.width)
            );
        };
    }, []);

    const openNav = () => {
        setIsOpen((prev) => !prev);
        if (!isOpen) {
            document.body.classList.add("active");
        } else {
            document.body.classList.remove("active");
        }
    };

    return (
        <header className="fixed py-4 right-1/2 translate-x-1/2 z-10 content flex items-center justify-between bg-white">
            <div className="flex items-center justify-between gap-3">
                <img src="/Logo.svg" alt="Positivus logo" />
                <span className="font-medium text-[40px]">Positivus</span>
            </div>
            {screenSize >= 1280 ? (
                <nav className="flex items-center gap-10">
                    {navLinks.map((navLink) => (
                        <a href="#" className="hover:underline" key={navLink}>
                            {navLink}
                        </a>
                    ))}
                    <button className="px-8 py-5 border rounded-[14px] border-black transition hover:bg-black hover:text-white">
                        Request a quote
                    </button>
                </nav>
            ) : (
                isOpen && (
                    <div
                        className={`fadeNav fixed z-10 flex transition-all fromRight items-center justify-center top-0 right-0 bg-black w-full md:w-2/3 lg:w-1/3 h-screen`}
                    >
                        <nav className="flex flex-col items-center gap-10">
                            {navLinks.map((navLink) => (
                                <a
                                    href="#"
                                    className="text-white hover:underline"
                                >
                                    {navLink}
                                </a>
                            ))}
                            <button className="px-8 py-5 border rounded-[14px] border-white transition text-white">
                                Request a quote
                            </button>
                        </nav>
                    </div>
                )
            )}
            <button
                onClick={openNav}
                className={`flex xl:hidden flex-col gap-2 z-20 `}
            >
                <div
                    className={`h-0.5 w-8 transition ${
                        isOpen
                            ? "bg-white rotate-45 translate-y-[12px]"
                            : "bg-black"
                    } rounded-full`}
                />
                <div
                    className={`h-0.5 w-8 transition ${
                        isOpen ? "bg-white hidden" : "bg-black"
                    } rounded-full`}
                />
                <div
                    className={`h-0.5 w-8 transition ${
                        isOpen ? "bg-white -rotate-45" : "bg-black"
                    } rounded-full`}
                />
            </button>
        </header>
    );
};

export default Header;
