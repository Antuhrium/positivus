import FadeX from "../components/Animations/FadeX";
import FadeY from "../components/Animations/FadeY";


const logotypes = [
    "/amazon.png",
    "/dribble.png",
    "/hubspot.png",
    "/notion.png",
    "/netflix.png",
    "/zoom.png",
];

const HeroSection = () => {
    return (
        <section id="hero" className="content pt-[200px] flex flex-col gap-16 overflow-x-hidden">
            <div className="flex flex-col-reverse gap-5 sm:gap-0 lg:flex-row lg:items-center justify-between">
                <div className="flex flex-col gap-5 sm:gap-9 w-full lg:max-w-[700px]">
                    <FadeX fled={"left"} delay={0.3}>
                        <h1 className="font-medium text-4xl sm:text-6xl">
                            Navigating the digital landscape for success
                        </h1>
                    </FadeX>
                    <FadeX fled={"left"} delay={0.5}>
                        <p className="text-base sm:text-xl">
                            Our digital marketing agency helps businesses grow
                            and succeed online through a range of services
                            including SEO, PPC, social media marketing, and
                            content creation.
                        </p>
                    </FadeX>
                    <FadeX fled={"left"} delay={0.6}>
                        <button className="blackButton sm:w-fit">
                            Book a consultation
                        </button>
                    </FadeX>
                </div>
                <FadeX fled={"left"}>
                    <img
                        src="/Hero.png"
                        alt="Illustration"
                        className="max-w-[600px] w-full"
                    />
                </FadeX>
            </div>
            <div className="flex gap-9 width-full justify-between items-center transition overflow-x-auto scrollbar-none">
                {logotypes.map((logotype, i) => (
                    <FadeY fled={"top"} key={logotype} delay={i * 0.1 + 0.3}>
                        <img src={logotype} alt="Logotype" className="w-full min-w-[130px]" />
                    </FadeY>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
