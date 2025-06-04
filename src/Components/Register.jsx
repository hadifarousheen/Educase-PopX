import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="h-screen w-full   md:w-2/3 border border-gray-400 flex flex-col py-10 px-3 md:px-5 ">
        <h1 className="font-bold text-3xl mt-6 w-3/5 md:w-full md:text-6xl md:mb-6">
          Create your PopX account
        </h1>
        <fieldset className="border mt-4 rounded-md md:text-5xl md:rounded-2xl">
          <legend>
            {" "}
            <span className="text-[#6c25ff] ">Full Name</span>
            <span className="text-red-600">*</span>
          </legend>
          <input
            readOnly
            type="text"
            placeholder="Marry Doe"
            className="p-1 text-black m-auto border-0 border-white "
          />
        </fieldset>
        <fieldset className="border my-4 rounded-md md:text-5xl md:rounded-2xl">
          <legend>
            {" "}
            <span className="text-[#6c25ff]">Phone number</span>
            <span className="text-red-600">*</span>
          </legend>
          <input
            readOnly
            type="text"
            placeholder="Marry Doe"
            className="p-1 text-black m-auto"
          />
        </fieldset>
        <fieldset className="border rounded-md md:text-5xl md:rounded-2xl">
          <legend>
            {" "}
            <span className="text-[#6c25ff]">Email address</span>
            <span className="text-red-600">*</span>
          </legend>
          <input
            readOnly
            type="text"
            placeholder="Marry Doe"
            className="p-1 text-black m-auto"
          />
        </fieldset>
        <fieldset className="border my-4 rounded-md md:text-5xl md:rounded-2xl">
          <legend>
            {" "}
            <span className="text-[#6c25ff]">Password</span>
            <span className="text-red-600">*</span>
          </legend>
          <input
            readOnly
            type="text"
            placeholder="Marry Doe"
            className="p-1 text-black m-auto"
          />
        </fieldset>
        <fieldset className="border mb-4 rounded-md md:text-5xl md:rounded-2xl">
          <legend>
            {" "}
            <span className="text-[#6c25ff]">Company name</span>
            <span className="text-red-600">*</span>
          </legend>
          <input
            readOnly
            type="text"
            placeholder="Marry Doe"
            className="p-1 text-black  m-auto"
          />
        </fieldset>
        <label className="md:text-5xl">
          Are you an Agency?<span className="text-red-600">*</span>
        </label>
        <div className="md:text-5xl">
          <input
            readOnly
            checked
            type="radio"
            className="bg-[#6c25ff] md:w-15 md:h-15"
          />
          <span className="mx-1 ">Yes</span>
          <input readOnly type="radio" className="md:w-15 md:h-15 md:my-auto" />
          <span className="mx-1">No</span>
        </div>
        <div className="mt-auto bg-[#6c25ff] p-2 rounded-xl text-center md:text-4xl md:p-4 ">
          <Link to="/profile" className=" text-white p-2 w-full">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
