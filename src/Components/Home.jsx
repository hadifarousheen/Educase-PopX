import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-screen  md:w-2/3 border border-gray-400 flex flex-col justify-end md:justify-center p-6">
        <h1 className="font-bold text-2xl md:text-6xl ">Welcome to PopX</h1>
        <p className="my-2 md:my-6 text-[#a5a7aa] md:text-5xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <Link
          to="/register"
          className="bg-[#6c25ff] text-white py-3 md:py-4 my-2 md:my-4 text-md rounded-lg text-center md:text-4xl "
        >
          Create Account
        </Link>
        <Link
          to="/signin"
          className="bg-[#cebafb] py-3 md:py-4 my-2 md:my-4 text-md rounded-lg text-center md:text-4xl"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
