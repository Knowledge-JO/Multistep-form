import { steps } from "../constants";

const SideBar = ({ currentStep }) => {
  return (
    <div className="bg-mobile bg-no-repeat bg-cover w-full h-[200px] flex justify-center md:justify-normal md:w-[220px] md:bg-desktop md:h-auto md:rounded-lg md:flex-col md:px-8 md:py-8">
      {Array.from({ length: 4 }, (_, i) => i + 1).map((item, index) => (
        <div
          key={index}
          className="flex gap-3 mt-10 px-2 md:mb-5 md:mt-0 md:px-0"
        >
          <div
            className={`${
              currentStep == index + 1
                ? "bg-lightblue border-none"
                : "text-white"
            } border  border-coolgray rounded-full flex justify-center items-center py-4 px-4 md:py-3 md:px-3  h-3 w-3`}
          >
            <p className="text-sm">{index + 1}</p>
          </div>
          <div className="hidden md:block">
            <p className="text-xs text-coolgray">STEP {index + 1}</p>
            <p className="text-white text-sm">{steps[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
