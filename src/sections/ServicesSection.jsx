import ArrowSvg from "../components/ArrowSvg";
import SectionTitle from "../components/SectionTitle";

const cards = [
    {
        firstTitle: "Search engine",
        secondTitle: "optimization",
        image: "/1.png",
        bg: "bg-grey",
        textBg: "bg-green",
        linkColor: "black",
        arrowColor: "#B9FF66",
    },
    {
        firstTitle: "Pay-per-click",
        secondTitle: "advertising",
        image: "/2.png",
        bg: "bg-green",
        textBg: "bg-white",
        linkColor: "black",
        arrowColor: "#B9FF66",
    },
    {
        firstTitle: "Social Media",
        secondTitle: "Marketing",
        image: "/3.png",
        bg: "bg-black",
        textBg: "bg-white",
        linkColor: "white",
        arrowColor: "#191A23",
    },
    {
        firstTitle: "Email",
        secondTitle: "Marketing",
        image: "/4.png",
        bg: "bg-grey",
        textBg: "bg-green",
        linkColor: "black",
        arrowColor: "#B9FF66",
    },
    {
        firstTitle: "Content",
        secondTitle: "Creation",
        image: "/5.png",
        bg: "bg-green",
        textBg: "bg-white",
        linkColor: "black",
        arrowColor: "#B9FF66",
    },
    {
        firstTitle: "Analytics and ",
        secondTitle: "Tracking",
        image: "/6.png",
        bg: "bg-black",
        textBg: "bg-green",
        linkColor: "white",
        arrowColor: "#191A23",
    },
];

const ServicesSection = () => {
    return (
        <section className="content mt-[140px] flex flex-col w-full ">
            <SectionTitle
                title="Services"
                text="At our digital marketing agency, we offer a range of
                    services to help businesses grow and succeed online. These
                    services include:"
            />
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
                {cards.map((card) => (
                    <div
                        key={card.firstTitle}
                        className={`flex p-[30px] sm:p-[50px] justify-between items-center ${card.bg} rounded-[45px] border border-black h-[320px] md:h-[310px] relative`}
                    >
                        <div className="h-full flex flex-col justify-between">
                            <h3 className="flex flex-col">
                                <span
                                    className={`w-max text-[26px] sm:text-[30px] font-medium ${card.textBg} rounded-[7px] px-2`}
                                >
                                    {card.firstTitle}
                                </span>
                                <span
                                    className={`w-max text-[26px] sm:text-[30px] font-medium ${card.textBg} rounded-[7px] px-2`}
                                >
                                    {card.secondTitle}
                                </span>
                            </h3>
                            <a href="#" className={`flex gap-4 items-center`}>
                                <div
                                    className={`bg-${card.linkColor} rounded-full p-4 w-fit transition hover:scale-110`}
                                >
                                    <ArrowSvg fill={card.arrowColor} />
                                </div>
                                <span
                                    className={`text-${card.linkColor} text-xl w-max hidden sm:block`}
                                >
                                    Learn more
                                </span>
                            </a>
                        </div>
                        <div className="object-cover absolute right-[30px] sm:right-[50px] bottom-[30px] sm:bottom-[50px] w-[160px] sm:w-auto">
                            <img src={card.image} alt="image" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
