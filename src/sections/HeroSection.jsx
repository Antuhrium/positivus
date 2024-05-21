import { useEffect, useState } from "react";

const logotypes = [
    "/amazon.png",
    "/dribble.png",
    "/hubspot.png",
    "/notion.png",
    "/netflix.png",
    "/zoom.png",
];

const HeroSection = () => {
    const [screenSize, setScreenSize] = useState(window.screen.width);
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
    return (
        <section className="content pt-[200px] flex flex-col gap-16 overflow-x-hidden">
            <div className="flex flex-col-reverse gap-5 sm:gap-0 lg:flex-row lg:items-center justify-between">
                <div className="flex flex-col gap-5 sm:gap-9 w-full lg:max-w-[700px]">
                    <h1 className="font-medium text-4xl sm:text-6xl">
                        Navigating the digital landscape for success
                    </h1>
                    <p className="text-base sm:text-xl">
                        Our digital marketing agency helps businesses grow and
                        succeed online through a range of services including
                        SEO, PPC, social media marketing, and content creation.
                    </p>
                    <button className="blackButton sm:w-fit">
                        Book a consultation
                    </button>
                </div>
                <img
                    src="/Hero.png"
                    alt="Illustration"
                    className="max-w-[600px]"
                />
            </div>
            <div
                className={`flex gap-9 width-full justify-between items-center transition ${
                    screenSize <= 1070 ? "mobileLine" : ""
                }`}
            >
                {logotypes.map((logotype) => (
                    <img key={logotype} src={logotype} alt="Logotype" />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
