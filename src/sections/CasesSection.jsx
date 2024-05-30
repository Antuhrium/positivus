import FadeX from "../components/Animations/FadeX";
import ArrowSvg from "../components/ArrowSvg";
import SectionTitle from "../components/SectionTitle";

const content = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

const CasesSection = () => {
  return (
    <section id="Use Cases" className="content mx-auto mt-[140px]">
      <SectionTitle
        title="Case Studies"
        text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <div className="flex flex-col lg:flex-row items-center px-[40px] lg:px-[60px] py-[50px] lg:py-[70px] rounded-[45px] gap-6 lg:gap-16 bg-black mt-10 lg:mt-20">
        {content.map((text, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-5 items-center">
            <div className="flex flex-col gap-[20px]">
              <FadeX fled={"left"} delay={0.1 * index}>
                <p className="text-white text-base">{text}</p>
              </FadeX>
              <FadeX fled={"left"} delay={0.2 * index}>
                <a href="#" className="flex gap-4 items-center text-green">
                  Learn more
                  <ArrowSvg fill="#B9FF66" />
                </a>
              </FadeX>
            </div>
            {index === content.length - 1 ? null : (
              <div className="h-px w-full lg:h-full lg:min-h-[186px] lg:w-px bg-white" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasesSection;
