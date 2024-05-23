import React, { useState } from "react";
import { useNavigate } from "react-router";

const AccountVerification = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [success, setSuccess] = useState(false)
  const [regconfirmation, setRegConfirmation] = useState(false)
  const [regconfirmationcontent, setRegConfirmationContent] = useState("")

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
        const data = await response.json();
        console.log(data)
        setRegConfirmation(true)
        setRegConfirmationContent("Account verified successfully")
        setSuccess(true)
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
    <div className="bg-[#FFF6F2] flex justify-center w-full h-[85vh] overflow-x-hidden font-Poppins">
      <div className="flex flex-col sm:items-center gap-5 py-5 sm:px-10">
        <div className="flex flex-col sm:items-center sm:gap-3">
          <h1 className="text-[40px] font-black sm:text-4xl sm:text-center">
            ACCOUNT VERIFICATION
          </h1>
          <p className="text-lg sm:text-sm sm:text-center text-[#A5A5A5] w-auto">
            Enter the PIN you received from your SMS Inbox to verify your account.
          </p>
        </div>
        <form className="flex justify-between gap-5 sm:text-center sm:w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="bg-[#FFEEE6] w-full rounded-[7px] border-none p-5"
          />
          <button
            type="submit"
            className={`outline-none bg-orange px-10 py-3 rounded-xl text-white w-fit
            ${loading ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
          {errMsg && (
            <p className="text-red-600 mt-2 text-[12px]">
              {errMsg}
            </p>
          )}
        </form>
        <button
          onClick={handleResendOTP}
          className="mt-2 outline-none bg-orange px-10 py-4 rounded-xl text-white w-fit sm:w-full"
        >
          Resend OTP
        </button>
      </div>

      {regconfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center border-4 rounded-lg">
          <div className="bg-white border-2 border-orange p-8 rounded-lg shadow-lg">
            <p className="text-lg font-bold mb-4">{regconfirmationcontent}</p>
            <button
              onClick={() => {
                setShowNotification(false);
                navigate("/login");
              }}
              className="bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark transition duration-300 ease-in-out"
            >
              Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountVerification;
