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
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form className="flex flex-col gap-4 w-64" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
          className="input-style"
        />
        <div className="relative input-group">
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="input-style"
          />
          <span
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-2 top-2 cursor-pointer"
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
            className="input-style"
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-2 cursor-pointer"
          >
            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
          </span>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="btn-style " disabled={loading}>
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
