const Step1 = ({
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
  return (
    <>
      <h1 className="text-marineblue text-2xl font-bold">Personal Info</h1>
      <p className="text-coolgray my-3 md:mb-8">
        please provide your name, email address and phone number.
      </p>
      <Input
        placeholder="e.g. Stephen King"
        update={name}
        onUpdate={onName}
        inputError={nameError}
      >
        Name
      </Input>
      <Input
        placeholder="e.g. stephenking@lorem.com"
        update={email}
        onUpdate={onEmail}
        inputError={emailError}
      >
        Email Address
      </Input>
      <Input
        placeholder="e.g. +234 123 456 7890"
        update={phone}
        onUpdate={onPhone}
        inputError={phoneError}
      >
        Phone Number
      </Input>
    </>
  );
};

const Input = ({ placeholder, update, onUpdate, children, inputError }) => {
  return (
    <>
      <div className="flex justify-between">
        <label className="text-sm text-marineblue">{children}</label>
        <label
          className={`${
            inputError ? "block" : "hidden"
          } text-sm text-strawberryred`}
        >
          This field is required
        </label>
      </div>
      <input
        className="block border border-lightgray focus:outline-purplishblue rounded-lg py-2 px-4 w-full mb-4"
        type="text"
        placeholder={placeholder}
        value={update}
        onChange={(e) => onUpdate(e.target.value)}
        required
      />
    </>
  );
};

export default Step1;
