import React, { useEffect, useRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";
import axios from "axios";

const OrganizerLoginForm = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showPass, setShowPass] = useState(false);
  const userRef = useRef();

  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Directly navigate to organizerProfile without verification
      navigate("/organizerDashboard");
    } catch (error) {
      // Handle errors, such as displaying an error message to the user
      setError("Login failed. Please check your credentials.");
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-6 w-[85%]" onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        ref={userRef}
        value={user}
        required
        placeholder="Email Address or Mobile Number"
        className="font-Poppins p-4 bg-[#D7D7D7] rounded-md placeholder-[#8D8D8D]"
        onChange={(e) => setUser(e.target.value)}
      />

      <div className="w-full flex relative">
        <input
          type={showPass ? "text" : "password"}
          required
          value={pwd}
          placeholder="Password"
          className="font-Poppins p-4 bg-[#D7D7D7]  rounded-md relative w-full"
          onChange={(e) => setPwd(e.target.value)}
        />
        <span>
          {showPass ? (
            <Visibility
              className="absolute right-4 top-5"
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <VisibilityOff
              className="absolute right-4 top-5"
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
      </div>
    </form>
  );
};

export default OrganizerLoginForm;
