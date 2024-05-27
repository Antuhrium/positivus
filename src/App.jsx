import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import MakeThingsSection from "./sections/MakeThingsSection";
import CasesSection from "./sections/CasesSection";
import WorkingProcSection from "./sections/WorkingProcSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

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
            <ContactSection />
            <Footer />
        </main>
    );
}

export default App;
