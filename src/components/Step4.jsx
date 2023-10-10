import { useEffect, useState } from "react";

const Step4 = ({
  planSession,
  selectedPlanName,
  selectedPlanPrice,
  selectedAddOns,
}) => {
  const [totalCost, setTotalCost] = useState(0);
  const onTotalCost = () => {
    let total = Number(selectedPlanPrice.split("$")[1].split("/")[0]);
    selectedAddOns.forEach((addon) => {
      const numPrice = Number(addon.price.split("$")[1].split("/")[0]);
      total += numPrice;
    });

    setTotalCost(total);
  };

  useEffect(() => {
    onTotalCost();
  }, []);

  return (
    <>
      <h1 className="text-marineblue text-2xl font-bold">Finishing up</h1>
      <p className="text-coolgray my-3 md:mb-8">
        Double-check everything looks OK before confirming.
      </p>

      <div className=" bg-alabaster px-5 py-2 rounded-lg">
        <div className="flex justify-between items-center mb-5 pb-5  border-b-[1px] border-lightgray">
          <div>
            <h3 className="font-bold text-marineblue text-sm">
              {selectedPlanName}{" "}
              <span className="capitalize">({planSession})</span>
            </h3>
            <p className="text-xs text-coolgray underline">Change</p>
          </div>
          <p className="font-bold text-sm text-marineblue">
            {selectedPlanPrice}
          </p>
        </div>
        {selectedAddOns.map((selectedAddOn) => (
          <SelectAddOns key={selectedAddOn.id} selectedAddOn={selectedAddOn} />
        ))}
      </div>
      <div className=" px-5 py-5 flex justify-between">
        <p className="text-xs text-coolgray">
          Total {planSession == "monthly" ? "(per month)" : "(per year)"}
        </p>
        <p className="font-bold text-purplishblue">
          +${totalCost}/{planSession == "monthly" ? "mo" : "yr"}
        </p>
      </div>
    </>
  );
};

const SelectAddOns = ({ selectedAddOn }) => {
  return (
    <div className="flex justify-between mb-4">
      <p className="text-xs text-coolgray">{selectedAddOn.name}</p>
      <p className="text-xs text-marineblue">{selectedAddOn.price}</p>
    </div>
  );
};

export default Step4;
