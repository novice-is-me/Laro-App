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
    <div className="h-svh">
      <div className="bg-bgColor flex justify-between h-full pb-[5rem]">
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
      </div>
    </div>
  );
};

export default Login;
