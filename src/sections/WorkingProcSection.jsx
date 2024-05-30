import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import WorkingProcItem from "../components/WorkingProcItem";
import FadeY from "../components/Animations/FadeY";

const items = [
  {
    title: "Consultation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Implementation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Monitoring and Optimization",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Reporting and Communication",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

const WorkingProcSection = () => {
  const [isOpen, setIsOpen] = useState("");
  return (
    <section id="Working Process" className="content mx-auto mt-[70px] sm:mt-[120px]">
      <SectionTitle
        title={"Our Working Process"}
        text={"Step-by-Step Guide to Achieving Your Business Goals"}
      />
      <div className="flex flex-col gap-[30px] mt-[30px] sm:mt-[80px]">
        {items.map((item, index) => (
          <FadeY fled={"top"} key={item.title}>
            <WorkingProcItem
              key={index}
              item={item}
              index={index}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </FadeY>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcSection;
