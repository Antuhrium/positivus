import { useState } from "react";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import MakeThingsSection from "./sections/MakeThingsSection";
import CasesSection from "./sections/CasesSection";
import WorkingProcSection from "./sections/WorkingProcSection";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main className={`relative ${isOpen ? "w-screen overflow-y-hidden": ""}`}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <HeroSection />
            <ServicesSection />
            <MakeThingsSection />
            <CasesSection />
            <WorkingProcSection />
        </main>
    );
}

export default App;
