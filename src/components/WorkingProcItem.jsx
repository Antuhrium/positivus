const WorkingProcItem = ({ item, index, isOpen, setIsOpen }) => {
  return (
    <div
      className={`flex flex-col gap-[30px] px-[30px] md:px-[60px] py-[30px] md:py-10 rounded-[45px] border border-dark transition-colors ${
        isOpen === item.title ? "bg-green" : "bg-grey"
      }`}
    >
      <div
        className="flex justify-between items-center"
        onClick={() => setIsOpen(isOpen === item.title ? "" : item.title)}
      >
        <h4 className="flex items-center gap-[25px] font-medium text-sm md:text-[30px]">
          <span className="font-medium text-[30px] md:text-[60px]">
            0{index + 1}
          </span>
          {item.title}
        </h4>
        <div className="flex justify-center items-center min-w-[30px] md:min-w-[60px] min-h-[30px] md:min-h-[60px] bg-grey border border-dark rounded-full transition hover:scale-105">
          <div className="w-3 md:w-4 h-0.5 md:h-1 bg-black absolute transition" />
          <div
            className={`transition-transform duration-300 w-3 md:w-4 h-0.5 md:h-1 bg-black
                        absolute ${
                          isOpen === item.title ? " rotate-90 " : "rotate-0"
                        }`}
          />
        </div>
      </div>
      {isOpen === item.title && (
        <>
          <div className="h-px bg-black" />
          <p className="text-[16px] sm:text-base">{item.text}</p>
        </>
      )}
    </div>
  );
};

export default WorkingProcItem;
