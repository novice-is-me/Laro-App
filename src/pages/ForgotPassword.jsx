import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ForgotPassword = () => {
  const [pin, setPin] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validate if newPassword and confirmPassword match
      if (newPassword !== confirmPassword) {
        setError("New password and confirm password do not match.");
        setLoading(false); // Stop loading
        return;
      }

      // Validate if newPassword and confirmPassword are not empty
      if (!newPassword || !confirmPassword) {
        setError("New password and confirm password cannot be empty.");
        setLoading(false); // Stop loading
        return;
      }

      // Make API call
      await axios.post(
        "https://api.laro.com.ph/api/v1/account/forgot-password-verify-OTP",
        {
          pin,
          newPassword,
          confirmPassword,
        }
      );

      // Assuming the password reset request is successful
      alert("Password reset successfully.");
      navigate("/login"); // Redirect to the login page after password reset
    } catch (error) {
      // Handle errors, such as displaying an error message to the user
      setError("Password reset failed. Please try again later.");
      console.error("Password reset failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FFF6F2] flex w-full overflow-x-hidden box-border px-20 lg:px-14 sm:p-0">
      <div className="box-border mx-auto relative flex flex-col justify-center items-start gap-3 w-[50%] sm:w-[100%] pl-24 lg:pl-0 sm:items-center sm:scale-[0.9] sm:text-center">
        <h2 className="mt-[20px] text-[40px] font-Poppins font-black">
          Forgot Password
        </h2>
        <form className="sm:text-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
            className="bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins mb-4"
          />
          <div className="relative input-group">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins mb-4"
            />
            <span
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-[15px] top-[15px] cursor-pointer"
            >
              {showNewPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>
          <div className="relative input-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins mb-4"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-[15px] top-[15px] cursor-pointer"
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>
          {error && (
            <p className="text-red-600 mt-2 font-Poppins text-[12px]">
              {error}
            </p>
          )}
          <button
            type="submit"
            className={`h-[45px] outline-none bg-orange px-10 py-4 rounded-[7px] text-white font-Poppins text-[13px] w-fit
    ${loading ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
