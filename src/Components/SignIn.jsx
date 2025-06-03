import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-screen w-full  md:w-2/3 border border-gray-400 flex flex-col py-10 px-3 ">
        <h1 className="font-bold text-3xl mt-6 w-2/3 md:w-full  md:text-6xl">
          Signin to your PopX account
        </h1>
        <p className="my-4 w-2/3 md:w-full md:text-5xl md:my-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>

        <fieldset className="border rounded-md md:text-5xl md:rounded-2xl">
          <legend>
            {" "}
            <span className="text-[#6c25ff]">Email Address</span>
          </legend>
          <input
            readOnly
            type="text"
            placeholder="Enter email address"
            className="p-1 text-black m-auto"
          />
        </fieldset>
        <fieldset className="border my-4 md:my-6 rounded-md md:text-5xl md:rounded-2xl">
          <legend>
            {" "}
            <span className="text-[#6c25ff]">Password</span>
          </legend>
          <input
            readOnly
            type="text"
            placeholder="Enter password"
            className="p-1 text-black m-auto"
          />
        </fieldset>
        <div className="text-center text-white bg-[#cbcbcb] py-2 rounded-md md:text-5xl md:py-4 md:my-2 ">
          <Link to="/profile">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
