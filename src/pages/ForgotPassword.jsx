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
  const [showModal, setShowModal] = useState(false); // State for success modal

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
      setShowModal(true); // Show success modal
    } catch (error) {
      // Handle errors, such as displaying an error message to the user
      setError("Password reset failed. Please try again later.");
      console.error("Password reset failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/login"); // Redirect to the login page after password reset
  };

  return (
    <div className="bg-[#FFF6F2] flex justify-center w-full h-[85vh] font-Poppins">
      <div className="flex flex-col items-start gap-3 sm:w-full sm:p-10 sm:gap-5 sm:h-auto">
        <div className="flex flex-col gap-3 sm:w-full">
          <h1 className="text-[40px] font-black sm:text-4xl sm:text-center">
            Forgot Password
          </h1>
          <p className="text-lg sm:text-sm sm:text-center text-[#A5A5A5] w-[500px] sm:w-full">
            Enter the PIN you received from your Email Inbox to reset your
            password.
          </p>
        </div>
        <form className="flex flex-col gap-5 sm:text-center sm:w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
            className="bg-[#FFEEE6] w-[298px] p-5 rounded-xl border-none sm:w-full"
          />
          <div className="relative input-group">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="bg-[#FFEEE6] w-[298px] p-5 rounded-xl border-none sm:w-full"
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
              className="bg-[#FFEEE6] w-[298px] p-5 rounded-xl border-none sm:w-full"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-[15px] top-[15px] cursor-pointer"
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>
          {error && (
            <p className="text-red-600 mt-2 font-Poppins">
              {error}
            </p>
          )}
          <button
            type="submit"
            className={`outline-none bg-orange px-10 py-4 rounded-xl text-white font-Poppins w-fit sm:w-full
            ${loading ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg font-bold mb-4">
                Password reset successfully. Please login with your new
                password.
              </p>
              <button
                className="bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark"
                onClick={handleModalClose}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
