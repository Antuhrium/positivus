import FadeX from "../components/Animations/FadeX";

const MakeThingsSection = () => {
  
  return (
    <section className="content mx-auto mt-[70px] sm:mt-[120px]">
      <div className="bg-grey rounded-[45px] flex flex-col lg:flex-row items-center justify-between p-[30px] sm:p-[60px] relative overflow-hidden">
        <div className="flex flex-col gap-7">
          <FadeX fled={"left"}>
            <h3 className="w-full text-[26px] sm:text-[30px] font-medium">
              Let’s make things happen
            </h3>
          </FadeX>
          <FadeX fled={"left"} delay={0.1}>
            <p className="lg:max-w-[500px]">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
          </FadeX>
          <FadeX fled={"left"} delay={0.2}>
            <button
              onClick={() => handleClickScroll("Contact")}
              className="blackButton w-full sm:w-fit text-sm sm:text-base px-5 sm:px-9"
            >
              Get your free proposal
            </button>
          </FadeX>
        </div>
        <img
          src="/MakeThingsImage.png"
          alt="illustration"
          className="hidden lg:flex absolute right-[80px]"
        />
      </div>
    </section>
  );
};

export default MakeThingsSection;
