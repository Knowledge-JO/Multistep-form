import { useEffect, useState } from "react";
import { addOns } from "../constants";

const Step3 = ({ planSession, addons, onSelectAddOns }) => {
  return (
    <>
      <h1 className="text-marineblue text-2xl font-bold">Pick add-ons</h1>
      <p className="text-coolgray my-3 md:mb-8">
        Add-ons help enhance your gaming experience
      </p>

      <div>
        {addOns[planSession].map((addon, index) => (
          <AddOn
            addOn={addon}
            key={index}
            selected={addons[index].selected}
            onSelectAddOns={onSelectAddOns}
          />
        ))}
      </div>
    </>
  );
};

const AddOn = ({ addOn, index, selected, onSelectAddOns }) => {
  return (
    <div
      key={index}
      className={` ${
        selected ? "bg-alabaster border-purplishblue" : "border-lightgray"
      } border rounded-lg flex justify-between items-center py-4 px-3 mb-3 hover:border-purplishblue`}
    >
      <div className="flex items-center gap-4">
        <input
          className="h-[17px] w-[17px] cursor-pointer "
          type="checkbox"
          value={selected}
          checked={selected}
          onChange={(e) => onSelectAddOns(addOn.id, e.target.checked)}
        />
        <div className="leading-4">
          <h3 className="font-bold text-sm text-marineblue">{addOn.name}</h3>
          <p className="text-xs text-coolgray">{addOn.description}</p>
        </div>
      </div>
      <p className="text-xs text-purplishblue">{addOn.price}</p>
    </div>
  );
};

export default Step3;
