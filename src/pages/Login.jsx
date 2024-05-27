import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import PictureComponent from "../components/PictureComponent";
import { hero3 } from "../assets";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      // If logged in, redirect to the user page
      navigate("/user");
    }
  }, [navigate]);

  return (
    <div className="flex justify-between items-center h-[85vh] font-Poppins overflow-x-hidden bg-[#fff6f2]">
      {/* Left Side - Forms */}
      <div className="flex flex-col justify-center items-center gap-10 pl-[5rem] w-full h-full 1110:pl-0 sm:justify-start sm:py-5 sm:gap-5">
        <div className="flex flex-col w-full px-[5rem] 1110:items-center 1110:px-[2rem] 1110:gap-5 sm:gap-0">
          <p className="text-[40px] font-bold 1110:text-3xl 950px:text-2xl xsm:text-3xl 450:text-xl">WELCOME BACK!</p>
          <p className="text-xl text-[#8E8D8D] 1110:text-base 950px:text-[12px] 1110:text-center xsm:text-base">We’ve forwarded a code to your email. Kindly confirm to continue with the registration process.</p>
        </div>

        <div className="hidden sm:h-[40vh] sm:relative sm:z-10 sm:flex">
            <PictureComponent img={hero3} value={"login"}  />
        </div>

        <div className="flex flex-col gap-5 w-full px-[5rem] 1110:px-[2rem]">
          <LoginForm />
        </div>

        <div className="w-full px-[5rem] 1110:text-center 1110:px-[2rem] sm:pb-5">
          <p className="sm:text-[12px]">Don’t have an account? <Link to="/register" className="cursor-pointer underline">Create Account Here</Link></p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex items-center w-full h-full sm:hidden ">
        <PictureComponent img={hero3} value={"login"}  />
      </div>
      {/* <div className="bg-bgColor flex justify-between h-full pb-[5rem]">
        <div className="mx-auto relative flex flex-col justify-center items-start gap-3  w-[50%] pl-[15%] sm:w-[100%] sm:items-center sm:pl-0 sm:scale-[0.9] sm:text-center">
          <div className="mb-8">
            <h1 className="text-start sm:text-center font-Poppins font-black text-[40px] my-4 ">
              Welcome Back!
            </h1>
            <p className="font-poppins text-[#A5A5A5] text-[17px]">
              We've forwarded a code to your email.
              <br /> Kindly confirm to continue with the registration process.
            </p>
          </div>
          <div>
            <LoginForm />
            <p className="mt-12 font-poppins">
              You don't have account?
              <Link to="/register" className="underline">
                {" "}
                Create Account
              </Link>
            </p>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center sm:hidden 832px:scale-[0.8] 770px:scale-[0.7]">
          <PictureComponent img={hero3} value={"login"}  />
        </div>
      </div> */}
    </div>
  );
};

export default Login;
