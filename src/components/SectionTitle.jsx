import FadeX from "./Animations/FadeX";
import FadeY from "./Animations/FadeY";

const SectionTitle = ({ title, text }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-10">
      <FadeX fled="left">
        <h2 className="font-medium text-[40px] bg-green px-[7px] rounded-lg">
          {title}
        </h2>
      </FadeX>
      <FadeY fled="top" delay={0.1}>
        <p className="text-base max-w-[580px] text-center sm:text-start">
          {text}
        </p>
      </FadeY>
    </div>
  );
};

export default SectionTitle;
