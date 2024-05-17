import React, { useState } from "react";
import { useNavigate } from "react-router";

const AccountVerification = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.laro.com.ph/api/v1/account/sign-up-verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pin }),
        }
      );

      if (response.ok) {
        navigate("/login"); // Navigate to success page if PIN verification is successful
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        setErrMsg("Invalid PIN"); // Set error message if PIN verification fails
      }
    } catch (error) {
      console.error("Error:", error);
      setErrMsg("Failed to verify PIN");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      // Retrieve user data from local storage
      const userData = JSON.parse(localStorage.getItem("user"));
      console.log("User Data:", userData); // Log the userData

      if (!userData || !userData.id || !userData.contact_number) {
        setErrMsg("User data is incomplete");
        return;
      }

      // Construct the URL with the user ID
      const resendOTPUrl = `https://api.laro.com.ph/api/v1.1/accounts/${userData.id}/resend-otp`;

      const response = await fetch(resendOTPUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pin }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("OTP Resent successfully");
      } else {
        console.error("Error:", responseData);
        if (responseData.message === "User not found!") {
          setErrMsg("User not found. Please check your details and try again.");
        } else {
          setErrMsg("Failed to resend OTP"); // Set error message for other error cases
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrMsg("Failed to resend OTP");
    }
  };

  return (
    <div className="bg-[#FFF6F2] flex w-full overflow-x-hidden box-border px-20 lg:px-14 sm:p-0">
      <div className="box-border mx-auto relative flex flex-col justify-center items-start gap-3 w-[50%] sm:w-[100%] pl-24 lg:pl-0 sm:items-center sm:scale-[0.9] sm:text-center">
        <h1 className="mt-[20px] text-[40px] font-Poppins font-black">
          ACCOUNT VERIFICATION
        </h1>
        <p className="font-Poppins text-sm text-[#A5A5A5] max-w-[400px]">
          Enter the PIN you received from your SMS Inbox to verify your account.
        </p>
        <form className="sm:text-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins"
          />
          <button
            type="submit"
            className={`h-[45px] outline-none bg-orange px-10 py-4 rounded-[7px] text-white font-Poppins text-[13px] w-fit
            ${loading ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
          {errMsg && (
            <p className="text-red-600 mt-2 font-Poppins text-[12px]">
              {errMsg}
            </p>
          )}
        </form>
        <button
          onClick={handleResendOTP}
          className="mt-2 outline-none bg-orange px-10 py-4 rounded-[7px] text-white font-Poppins text-[13px] w-fit"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default AccountVerification;
