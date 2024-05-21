const SectionTitle = ({ title, text }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-10">
            <h2 className="font-medium text-[40px] bg-green px-[7px] rounded-lg">
                {title}
            </h2>
            <p className="text-[18px] max-w-[580px] text-center sm:text-start">
                {text}
            </p>
        </div>
    );
};

export default SectionTitle;
