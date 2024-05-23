import React, { useEffect, useRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";
import axios from "axios";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for success modal
  const userRef = useRef();

  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Access the login function from the AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://api.laro.com.ph/api/v1/account/sign-in",
        {
          email_address: user,
          password: pwd,
        }
      );

      const { token, userFullName, userInfo } = response.data;

      // Store token and user data in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userFullName", JSON.stringify(userFullName));
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      // Redirect to the user page
      navigate("/user");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    try {
      // Assuming you have an API endpoint for initiating password reset
      await axios.post(
        "https://api.laro.com.ph/api/v1/account/forgot-password",
        {
          email_address: user,
        }
      );

      // Assuming the password reset request is successful
      setShowSuccessModal(true); // Show success modal
    } catch (error) {
      // Handle errors, such as displaying an error message to the user
      console.error("Password reset failed:", error);
      alert("Password reset failed. Please try again later.");
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    // Navigate to forgot password page
    navigate("/forgot-password");
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        ref={userRef}
        value={user}
        required
        placeholder="Email Address"
        className="font-poppins p-5 bg-[#FFEEE6] w-[410px] 1110:w-full"
        onChange={(e) => setUser(e.target.value)}
      />

      <div className="w-full flex relative">
        <input
          type="password"
          required
          value={pwd}
          placeholder="Password"
          className="font-poppins p-5 bg-[#FFEEE6] relative w-[410px] 1110:w-full"
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex sm:justify-center justify-start 1110:flex-col 1110:gap-2">
        <button
          className="bg-orange px-14 py-4 rounded-[7px] text-white 1110:w-full"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <button
          type="button"
          className=" bg-gray-200 px-6 py-4 rounded-[7px] text-gray-700 underline"
          onClick={handleForgotPassword}
        >
          Forgot Password
        </button>
      </div>

      {/* Modal for password reset success */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg font-bold mb-4">
              PIN for reset password has been sent to your email.
            </p>
            <button
              className="bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark"
              onClick={handleModalClose}
            >
              Proceed
            </button>
          </div>
        </div>
      )}
    </form>
  );
};
export default LoginForm;
