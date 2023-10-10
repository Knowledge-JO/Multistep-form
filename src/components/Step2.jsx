import { useState } from "react";
import { plans } from "../constants";

const Step2 = ({
  planSession,
  onPlanSessionChange,
  selectedPlanName,
  onSelectPlan,
}) => {
  return (
    <>
      <h1 className="text-marineblue text-2xl font-bold">Select your plan</h1>
      <p className="text-coolgray my-3 md:mb-8">
        You have the option of monthly or yearly billing.
      </p>

      <div className="flex flex-col md:flex-row">
        {plans[planSession].map((plan, index) => (
          <Plan
            key={index}
            plan={plan}
            index={index}
            planSession={planSession}
            selectedPlanName={selectedPlanName}
            onSelectPlan={onSelectPlan}
          />
        ))}
      </div>

      <Slider
        planSession={planSession}
        onPlanSessionChange={onPlanSessionChange}
      />
    </>
  );
};

const Plan = ({ plan, index, planSession, onSelectPlan, selectedPlanName }) => {
  return (
    <div
      key={index}
      onClick={() => onSelectPlan(plan.name, plan.price)}
      className={`${
        selectedPlanName === plan.name
          ? "border-purplishblue bg-alabaster"
          : "border-lightgray"
      } cursor-pointer w-full border hover:border-purplishblue  h-auto rounded-lg flex gap-5 py-4 px-4 mb-3 md:mb-0 md:mr-3 md:w-[130px] md:h-[160px] md:flex-col md:py-3 md:px-3 md:justify-between`}
    >
      <img
        className={`md:w-10 ${
          planSession == "monthly" ? "self-center" : "self-start"
        } md:self-start`}
        src={plan.image}
        alt=""
      />
      <div className="">
        <h3 className="text-marineblue font-bold text-sm">{plan.name}</h3>
        <p className="text-sm text-coolgray leading-6">{plan.price}</p>
        {planSession == "yearly" && (
          <p className="text-xs text-marineblue">{plan.bonus}</p>
        )}
      </div>
    </div>
  );
};

const Slider = ({ planSession, onPlanSessionChange }) => {
  return (
    <div className="bg-alabaster mt-8 py-3 text-center rounded-lg">
      <span
        className={`text-sm ${
          planSession == "monthly" ? "text-marineblue" : "text-coolgray"
        } mr-5`}
      >
        Monthly
      </span>
      <label className="step2-check relative inline-block h-[20px] w-[60px] top-1">
        <input
          type="checkbox"
          className="peer w-0 h-0 opacity-0"
          value={planSession == "monthly" ? false : true}
          checked={planSession == "monthly" ? false : true}
          onChange={(e) =>
            onPlanSessionChange(e.target.checked ? "yearly" : "monthly")
          }
        />
        <span className="transition before:transition absolute inset-x-0 inset-y-0 duration-400 cursor-pointer bg-marineblue rounded-2xl before:rounded-full before:content-[''] before:absolute before:h-[13px] before:w-[13px] before:left-[4px] before:bottom-[3.6px] before:duration-400 before:bg-white peer-checked:before:translate-x-[39px]"></span>
      </label>
      <span
        className={`text-sm ${
          planSession == "yearly" ? "text-marineblue" : "text-coolgray"
        } ml-5`}
      >
        Yearly
      </span>
    </div>
  );
};

export default Step2;
