import { useRef } from "react";
import { useInView } from "framer-motion";

const FadeX = ({ children, fled, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const transitionDelay = `${delay}s`;

    const fledDirection =
        fled === "left"
            ? "opacity-0 -translate-x-1/2"
            : "opacity-0 translate-x-1/2";

    return (
        <div
            ref={ref}
            className={`${
                isInView
                    ? "opacity-100 translate-x-0 transition-all duration-1000"
                    : fledDirection
            }`}
            style={{ transitionDelay: isInView ? transitionDelay : "0s" }}
        >
            {children}
        </div>
    );
};

export default FadeX;
