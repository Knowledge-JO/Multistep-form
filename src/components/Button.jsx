const Button = ({
  step,
  lastStep,
  onNextStep,
  onPreviousStep,
  finished,
  onFinished,
}) => {
  return (
    <div
      className={`${step > 1 ? "flex justify-between" : "text-end"}  ${
        step == 4 && finished == true ? "hidden" : ""
      } py-5 px-5 md:p-0 md:mt-5 h-20`}
    >
      {step > 1 && (
        <button
          onClick={onPreviousStep}
          className="h-fit py-2 px-3 bg-white hover:text-marineblue text-coolgray border-none rounded-lg"
        >
          Go Back
        </button>
      )}
      {step < lastStep ? (
        <button
          className={`py-2 px-3 bg-marineblue h-fit text-white border-none rounded-lg`}
          onClick={onNextStep}
        >
          Next Step
        </button>
      ) : (
        <button
          className={`py-2 px-3 bg-marineblue h-fit text-white border-none rounded-lg`}
          onClick={onFinished}
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default Button;
