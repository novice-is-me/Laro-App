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

  const [showPass, setShowPass] = useState(false);
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
        className="font-poppins p-4 bg-[#FFEEE6]"
        onChange={(e) => setUser(e.target.value)}
      />

      <div className="w-full flex relative">
        <input
          type={showPass ? "text" : "password"}
          required
          value={pwd}
          placeholder="Password"
          className="font-poppins p-4 bg-[#FFEEE6] relative w-full"
          onChange={(e) => setPwd(e.target.value)}
        />
        <span>
          {showPass ? (
            <Visibility
              className="absolute right-4 top-5"
              style={{ fontSize: "15px", color: "gray" }}
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <VisibilityOff
              className="absolute right-4 top-5"
              style={{ fontSize: "15px", color: "gray" }}
              onClick={() => setShowPass(!showPass)}
            />
          )}
        </span>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex mt-8 sm:justify-center justify-start">
        <button
          className="bg-orange px-10 py-4 rounded-[7px] text-white"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <button
          type="button"
          className="ml-4 bg-gray-200 px-6 py-4 rounded-[7px] text-gray-700 underline"
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
