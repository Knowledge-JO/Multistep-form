import thankYou from "../assets/images/icon-thank-you.svg";

const Confirm = () => {
  return (
    <div className=" flex justify-center text-center items-center h-[400px]">
      <div className="w-[90%]">
        <div className="flex justify-center mb-4">
          <img src={thankYou} alt="" />
        </div>
        <h3 className="font-bold text-2xl mb-4">Thank you!</h3>
        <p className="text-sm text-coolgray">
          Thank you for confirming you subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  );
};

export default Confirm;
