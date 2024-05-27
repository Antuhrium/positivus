import React, { useState } from "react";
import RadioButton from "../components/ui/radioButton/RadioButton";

const ContactSection = () => {
    const [selectedOption, setSelectedOption] = useState("sayHi");

    const options = [
        { label: "Say Hi", value: "sayHi" },
        { label: "Get a Quote", value: "getQuote" },
    ];

    return (
        <section className="content mx-5 w-auto xl:w-full xl:mx-auto mt-20 bg-grey rounded-[45px] px-[30px] py-[60px] lg:pl-[100px] lg:pr-0 flex justify-between">
            <div className="w-full">
                <div className="flex items-center">
                    <RadioButton
                        options={options}
                        name="contact"
                        selectedValue={selectedOption}
                        onChange={setSelectedOption}
                    />
                </div>
                <form className="flex flex-col gap-[25px] mt-10 w-full lg:max-w-[556px]">
                    <div className="flex flex-col gap-[5px] w-full">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="contact"
                            id="name"
                            placeholder="Name"
                            className="h-[60px] px-[30px] border rounded-[14px] w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-[5px] w-full">
                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            name="contact"
                            id="email"
                            placeholder="Email"
                            className="h-[60px] px-[30px] border rounded-[14px] w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-[5px] w-full">
                        <label htmlFor="email">Message*</label>
                        <textarea
                            placeholder="Message"
                            name="contact"
                            
                            id="message"
                            cols="30"
                            rows="10"
                            className="h-[190px] px-[30px] py-[18px] border rounded-[14px] resize-none w-full"
                        ></textarea>
                    </div>
                </form>
                <button type="submit" name="contact" className="blackButton mt-10 lg:max-w-[556px] w-full">
                    Send Message
                </button>
            </div>
            <img src="/contact-image.png" alt="illustration" className="hidden lg:block" />
        </section>
    );
};

export default ContactSection;
