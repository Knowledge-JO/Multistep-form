import { useEffect, useState } from "react";
import Button from "./Button";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { addOns, plans } from "../constants";
import Confirm from "./Confirm";

const FormMultiStep = ({
  currentStep,
  totalSteps,
  onNextStep,
  onPreviousStep,
  name,
  onName,
  email,
  onEmail,
  phone,
  onPhone,
  nameError,
  emailError,
  phoneError,
}) => {
  const [planSession, setPlanSession] = useState("monthly");
  const [selectedPlanName, setSelectedPlanName] = useState(
    plans[planSession][0]["name"]
  );
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(
    plans[planSession][0]["price"]
  );
  const [addons, setAddons] = useState(addOns[planSession]);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [finished, setFinished] = useState(false);

  const onPlanSessionChange = (session) => {
    setPlanSession(session);
    setSelectedPlanName(plans[session][0]["name"]);
    setSelectedPlanPrice(plans[session][0]["price"]);
    setAddons(addOns[session]);
    setSelectedAddOns([]);
  };

  const onSelectPlan = (plan, price) => {
    setSelectedPlanName(plan);
    setSelectedPlanPrice(price);
    setAddons(addOns[planSession]);
    setSelectedAddOns([]);
  };

  const onSelectAddOns = (id, checked) => {
    setAddons((addons) =>
      addons.map((addon) =>
        addon.id === id ? { ...addon, selected: checked } : addon
      )
    );
  };

  const onFinished = () => {
    setFinished(true);
  };

  useEffect(() => {
    setSelectedAddOns(addons.filter((addon) => addon.selected == true));
  }, [addons]);

  return (
    <div className="md:px-[90px] md:w-[520px] min-[900px]:w-[600px]">
      <div className="flex justify-center bg-magnolia ">
        <form className="bg-white w-[95%] py-10 px-8 rounded-lg relative bottom-[75px] md:px-0 md:static md:w-full md:h-fit">
          {currentStep == 1 && (
            <Step1
              name={name}
              onName={onName}
              email={email}
              onEmail={onEmail}
              phone={phone}
              onPhone={onPhone}
              nameError={nameError}
              emailError={emailError}
              phoneError={phoneError}
            />
          )}
          {currentStep == 2 && (
            <Step2
              planSession={planSession}
              onPlanSessionChange={onPlanSessionChange}
              selectedPlanName={selectedPlanName}
              onSelectPlan={onSelectPlan}
            />
          )}
          {currentStep == 3 && (
            <Step3
              planSession={planSession}
              addons={addons}
              onSelectAddOns={onSelectAddOns}
            />
          )}
          {currentStep == 4 && finished == false && (
            <Step4
              planSession={planSession}
              selectedPlanName={selectedPlanName}
              selectedPlanPrice={selectedPlanPrice}
              selectedAddOns={selectedAddOns}
            />
          )}
          {currentStep == 4 && finished == true && <Confirm />}
        </form>
      </div>
      <Button
        onNextStep={onNextStep}
        onPreviousStep={onPreviousStep}
        step={currentStep}
        lastStep={totalSteps}
        finished={finished}
        onFinished={onFinished}
      >
        Next Step
      </Button>
    </div>
  );
};

export default FormMultiStep;
