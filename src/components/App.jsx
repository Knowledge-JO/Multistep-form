import { useState } from "react";
import FormMultiStep from "./FormMultiStep.jsx";
import SideBar from "./SideBar";

const App = () => {
  const [currentStep, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const totalSteps = 4;

  const onNextStep = () => {
    if (currentStep < totalSteps) {
      if (currentStep == 1) {
        if (!name) {
          return setNameError(true);
        } else {
          setNameError(false);
        }
        if (!email) {
          return setEmailError(true);
        } else {
          setEmailError(false);
        }
        if (!phone) {
          return setPhoneError(true);
        } else {
          setPhoneError(false);
        }
        setStep((currentStep) => currentStep + 1);
      } else {
        setStep((currentStep) => currentStep + 1);
      }
    }
  };
  const onPreviousStep = () => {
    if (currentStep > 1) setStep((currentStep) => currentStep - 1);
  };

  const onName = (name) => {
    setName(name);
  };
  const onEmail = (email) => {
    setEmail(email);
  };

  const onPhone = (phone) => {
    setPhone(phone);
  };

  return (
    <div className="app font-normal box-border bg-magnolia h-screen md:flex md:justify-center md:items-center">
      <div className="w-full md:rounded-lg md:h-fit md:w-fit md:py-2 md:px-2 md:bg-white">
        <div className="md:flex">
          <SideBar currentStep={currentStep} />
          <FormMultiStep
            currentStep={currentStep}
            onNextStep={onNextStep}
            onPreviousStep={onPreviousStep}
            totalSteps={totalSteps}
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
        </div>
      </div>
    </div>
  );
};

export default App;
