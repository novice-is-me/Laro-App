import React, { useState } from "react";
import { InfoRounded } from "@mui/icons-material";
import { useNavigate } from "react-router";

const EmailVerification = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate email
    if (!validEmail) {
      // Handle invalid email
      setLoading(false);
      return;
    }

    try {
      // Send request to API to send OTP pin
      const response = await fetch(
        "https://api.laro.com.ph/api/v1/account/sign-up-send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email_address: email }),
        }
      );

      if (response.ok) {
        // If OTP sent successfully, navigate to OTP verification page
        navigate("/register", { state: { email } });
      } else {
        // Handle error response
        console.error("Failed to send OTP pin");
        // Display error message to user
        // You can implement this according to your UI/UX design
      }
    } catch (error) {
      console.error("Error sending OTP pin:", error);
      // Display error message to user
      // You can implement this according to your UI/UX design
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Validate email format
    const isValid = /^[\w-]+(\.[\w-]+)*@((?:[\w-]+\.)+\w{2,})$/.test(
      inputEmail
    );
    setValidEmail(isValid);
  };

  return (
    <div className="bg-[#FFF6F2] flex w-full overflow-x-hidden box-border px-20 lg:px-14 sm:p-0">
      <div className="box-border mx-auto relative flex flex-col justify-center items-start gap-3 w-[50%] sm:w-[100%] pl-24 lg:pl-0 sm:items-center sm:scale-[0.9] sm:text-center">
        <h1 className="mt-[20px] text-[40px] font-Poppins font-black">
          EMAIL VERIFICATION
        </h1>
        <p className="font-Poppins text-sm text-[#A5A5A5] max-w-[400px]">
          Please enter the email address associated with your account. The PIN
          sent to email will be used to verify your account as you sign up.
        </p>
        <form className="sm:text-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email Address"
            required
            onChange={handleInputChange}
            className={`bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
              ${validEmail ? "outline-green-600" : ""}
              ${!validEmail && email ? "outline-red-600" : ""}`}
          />
          {!validEmail && email && (
            <p className="mt-2 text-red-600 font-Poppins text-[12px]">
              <InfoRounded style={{ fontSize: "20px" }} />
              Please enter a valid email address.
            </p>
          )}
          <button
            type="submit"
            className={`mt-5 h-[45px] outline-none bg-orange px-10 py-4 rounded-[7px] text-white font-Poppins text-[13px] w-fit
              ${loading ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={!validEmail || loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
