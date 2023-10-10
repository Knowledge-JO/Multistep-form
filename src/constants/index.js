import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

const plans = {
  monthly: [
    {
      image: arcade,
      name: "Arcade",
      price: "$9/mo",
    },
    {
      image: advanced,
      name: "Advanced",
      price: "$12/mo",
    },
    {
      image: pro,
      name: "Pro",
      price: "$15/mo",
    },
  ],

  yearly: [
    {
      image: arcade,
      name: "Arcade",
      price: "$90/yr",
      bonus: "2 months free",
    },
    {
      image: advanced,
      name: "Advanced",
      price: "$120/yr",
      bonus: "2 months free",
    },
    {
      image: pro,
      name: "Pro",
      price: "$150/yr",
      bonus: "2 months free",
    },
  ],
};

// add-ons
const addOns = {
  monthly: [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price: "+$1/mo",
      selected: false,
      id: "1",
    },

    {
      name: "Larger storage",
      description: "Extra 1TB of cloud space",
      price: "+$2/mo",
      selected: false,
      id: "2",
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      price: "+$2/mo",
      selected: false,
      id: "3",
    },
  ],
  yearly: [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price: "+$10/yr",
      selected: false,
      id: "1",
    },

    {
      name: "Larger storage",
      description: "Extra 1TB of cloud space",
      price: "+$20/yr",
      selected: false,
      id: "2",
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      price: "+$20/yr",
      selected: false,
      id: "3",
    },
  ],
};

export { steps, plans, addOns };
