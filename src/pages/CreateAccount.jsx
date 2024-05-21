import React, { useEffect, useRef, useState } from "react";
import PictureComponent from "../components/PictureComponent";
import player from "../assets/image/player.png";
import { InfoRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PHONE_REGEX = /^((\+63)|0)[.\- ]?9\d{2}[.\- ]?\d{3}[.\- ]?\d{4}$/;
const EMAIL_REGEX =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$ /;
const PHONE_EMAIL_REGEX =
  /^(((\+63)|0)[.\- ]?9\d{2}[.\- ]?\d{3}[.\- ]?\d{4}$)|(([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?))$/;

const CreateAccount = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationContent, setNotificationContent] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pass, setPass] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPass, setMatchPass] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [contactNum, setContactNum] = useState("");
  const [validContact, setValidContact] = useState(false);
  const [contactFocus, setContactFocus] = useState(false);
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showMatchPassword, setShowMatchPassword] = useState(false);
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    // Check if the user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      // If logged in, redirect to the user page
      navigate("/user");
    }
  }, [navigate]);

  useEffect(() => {
    // Validation for first name (You can customize the regex pattern)
    const result = /^[a-zA-Z\s]*$/.test(firstName);
    // Update the state for first name validity
    setValidFirstName(result);
  }, [firstName]);

  useEffect(() => {
    // Validation for last name (You can customize the regex pattern)
    const result = /^[a-zA-Z\s]*$/.test(lastName);
    // Update the state for last name validity
    setValidLastName(result);
  }, [lastName]);

  useEffect(() => {
    const result = PHONE_EMAIL_REGEX.test(email);
    console.log(result); //truue false
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result); //truue false
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pass);
    console.log(result);
    console.log(pass);
    setValidPass(result);
    const match = pass === matchPass; // true false
    setValidMatch(match);
  }, [pass, matchPass]);

  useEffect(() => {
    const result = PHONE_REGEX.test(contactNum);
    console.log(result); //truue false
    console.log(contactNum);
    setValidContact(result);
  }, [contactNum]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pass]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file); // Store the file itself
    } else {
      setErrMsg("No Image Selected"); // Set an error message if no image is selected
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if all form fields are valid
    if (
      !validEmail ||
      !validName ||
      !validPass ||
      !validMatch ||
      !validContact
    ) {
      setErrMsg("Invalid Entry");
      setLoading(false); // Stop loading
      return;
    }

    // Check if a profile picture is selected
    if (!profilePic) {
      setErrMsg("No Image Selected"); // Set an error message if no image is selected
      setLoading(false); // Stop loading
      return;
    }

    // Prepare the request body
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        email_address: email,
        username: user,
        password: pass,
        contact_number: contactNum,
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        address: address,
      })
    );
    formData.append("userImage", profilePic);

    try {
      // Send the POST request to sign-up-verify-email endpoint
      const response = await fetch(
        "https://api.laro.com.ph/api/v1.1/accounts/sign-up-send-otp",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data.user));

        // Store the user ID in local storage
        console.log(data);
        setShowNotification(true);
        setNotificationContent(
          "A verification has been sent to your SMS. Please enter the PIN to continue."
        );
        setSuccess(true);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        setErrMsg("Failed to create account");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrMsg("Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FFF6F2] flex w-full overflow-x-hidden box-border px-20 lg:px-14 sm:p-0">
      <div className="box-border mx-auto relative flex flex-col justify-center items-start gap-3 w-[50%] sm:w-[100%] pl-24 lg:pl-0 sm:items-center sm:scale-[0.9] sm:text-center">
        <h1 className="mt-[20px] text-[40px] font-Poppins font-black">
          SET-UP ACCOUNT
        </h1>
        <p className="font-Poppins text-sm text-[#A5A5A5] max-w-[400px]">
          You can now create your own account, just make sure that the
          information you provide is accurate.
        </p>
        <form className="sm:text-center" onSubmit={handelSubmit}>
          <ol className="m-0 p-0 list-none  relative mx-auto">
            <li className="mb-5">
              <input
                type="text"
                placeholder="First Name"
                required
                onChange={(e) => setFirstName(e.target.value)}
                className={`bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
              ${
                firstName && validFirstName
                  ? "outline-green-600"
                  : "outline-none"
              }
              ${
                firstName && !validFirstName
                  ? "outline-red-600"
                  : "outline-none"
              }`}
              />
              {/* Error message for first name validation */}
            </li>
            <li className="mb-5">
              <input
                type="text"
                placeholder="Middle Name"
                onChange={(e) => setMiddleName(e.target.value)}
                className="bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins"
              />
            </li>
            <li className="mb-5">
              <input
                type="text"
                placeholder="Last Name"
                required
                onChange={(e) => setLastName(e.target.value)}
                className={`bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
              ${
                lastName && validLastName ? "outline-green-600" : "outline-none"
              }
              ${
                lastName && !validLastName ? "outline-red-600" : "outline-none"
              }`}
              />
              {/* Error message for last name validation */}
            </li>
            <li className="mb-5">
              <input
                type="text"
                placeholder="Address"
                required
                onChange={(e) => setAddress(e.target.value)}
                className={`bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
              ${address ? "outline-green-600" : "outline-none"}`}
              />
              {/* Error message for address validation */}
            </li>

            <li className="mb-5 ">
              <input
                ref={userRef}
                type="text"
                placeholder="Email Address"
                required
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-[#FFEEE6] outline-none w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
                                          ${
                                            emailFocus && validEmail
                                              ? "outline-green-600"
                                              : "outline-none"
                                          } ${
                  email && !validEmail ? "outline-red-600" : "outline-none"
                } `}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <p
                className={`${
                  emailFocus && email && !validEmail ? "block" : "hidden"
                } mt-2 text-red-600 font-Poppins text-[12px] w-[298px]`}
              >
                <InfoRounded style={{ fontSize: "20px" }} />
                Input valid Email or Contact number <br />
              </p>
            </li>

            <li className="mb-5">
              <input
                type="text"
                placeholder="Username"
                required
                className={`bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
                                ${
                                  userFocus && validName
                                    ? "outline-green-600"
                                    : "outline-none"
                                } ${
                  user && !validName ? "outline-red-600" : "outline-none"
                }`}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                className={`${
                  userFocus && user && !validName ? "block" : "hidden"
                } mt-2 text-red-600 font-Poppins text-[12px] w-[298px]`}
              >
                <InfoRounded style={{ fontSize: "20px" }} /> 4 to 24 characters.{" "}
                <br />
                Must begin with a letter. <br />
                Letters, numbers, underscores, hypens allowed.
              </p>
            </li>
            <li className="mb-5 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                onChange={(e) => setPass(e.target.value)}
                className={`bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
                                ${
                                  passFocus && validPass
                                    ? "outline-green-600"
                                    : "outline-none"
                                } ${
                  pass && !validPass ? "outline-red-600" : "outline-none"
                }`}
                onFocus={() => setPassFocus(true)}
                onBlur={() => setPassFocus(false)}
              />
              {showPassword ? (
                <Visibility
                  className="absolute right-3 top-4"
                  style={{ fontSize: "15px", color: "gray" }}
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <VisibilityOff
                  className="absolute right-3 top-4"
                  style={{ fontSize: "15px", color: "gray" }}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
              <p
                className={`${
                  passFocus && pass && !validPass ? "block" : "hidden"
                } mt-2 text-red-600 font-Poppins text-[12px] w-[298px]`}
              >
                <InfoRounded style={{ fontSize: "20px" }} /> 8 to 24 characters.{" "}
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character. <br />
                Allowed special characters: ! @ # $ %
              </p>
            </li>
            <li className="mb-5 relative">
              <input
                type={showMatchPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
                onChange={(e) => setMatchPass(e.target.value)}
                className={`bg-[#FFEEE6] w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
                                ${
                                  matchFocus && matchPass && validMatch
                                    ? "outline-green-600"
                                    : "outline-none"
                                } ${
                  matchPass && !validMatch ? "outline-red-600" : "outline-none"
                }`}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              {showMatchPassword ? (
                <Visibility
                  className="absolute right-3 top-4"
                  style={{ fontSize: "15px", color: "gray" }}
                  onClick={() => setShowMatchPassword(!showMatchPassword)}
                />
              ) : (
                <VisibilityOff
                  className="absolute right-3 top-4"
                  style={{ fontSize: "15px", color: "gray" }}
                  onClick={() => setShowMatchPassword(!showMatchPassword)}
                />
              )}
              <p
                className={`${
                  matchFocus && matchPass && !validMatch ? "block" : "hidden"
                } mt-2 text-red-600 font-Poppins text-[12px] w-[298px]`}
              >
                <InfoRounded style={{ fontSize: "20px" }} />
                Password not match
                <br />
              </p>
            </li>
            <li className="mb-5">
              <input
                type="tel"
                required
                placeholder="Contact Number"
                onChange={(e) => setContactNum(e.target.value)}
                className={`bg-[#FFEEE6] outline-none w-[298px] h-[45px] rounded-[7px] border-none pl-[20px] pr-[35px] text-[12px] font-Poppins
                                            ${
                                              contactFocus && validContact
                                                ? "outline-green-600"
                                                : "outline-none"
                                            } ${
                  contactNum && !validContact
                    ? "outline-red-600"
                    : "outline-none"
                }`}
                onFocus={() => setContactFocus(true)}
                onBlur={() => setContactFocus(false)}
              />
              <p
                className={`${
                  contactFocus && contactNum && !validContact
                    ? "block"
                    : "hidden"
                } mt-2 text-red-600 font-Poppins text-[12px] w-[298px]`}
              >
                <InfoRounded style={{ fontSize: "20px" }} />
                Please enter a valid phone number.
                <br />
              </p>
            </li>

            <li className="mb-5">
              <div className="flex items-center justify-end w-[298px]">
                {profilePic ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
                    <img
                      src={URL.createObjectURL(profilePic)}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">No Image</span>
                  </div>
                )}
                <label
                  htmlFor="file-upload"
                  className="bg-[#FFEEE6] outline-none w-[160px] h-[45px] rounded-[7px] border-none flex justify-center items-center font-Poppins text-[#A5A5A5] ml-4 text-[12px]"
                >
                  Upload Image
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/jpeg, image/jpg, image/jpg"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </li>
          </ol>

          <button
            type="submit"
            className={`mb-5 h-[45px] outline-none bg-orange px-10 py-4 rounded-[7px] text-white font-Poppins text-[13px] w-fit sm:self-center
    ${
      !validEmail ||
      !validName ||
      !validPass ||
      !validMatch ||
      !validContact ||
      loading
        ? "cursor-not-allowed opacity-50"
        : ""
    }`}
            disabled={
              !validEmail ||
              !validName ||
              !validPass ||
              !validMatch ||
              !validContact ||
              loading
            }
          >
            {loading ? "Loading..." : "Create Account"}
          </button>
        </form>
      </div>

      {showNotification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center border-4 rounded-lg">
          <div className="bg-white border-2 border-orange p-8 rounded-lg shadow-lg">
            <p className="text-lg font-bold mb-4">{notificationContent}</p>
            <button
              onClick={() => {
                setShowNotification(false);
                navigate("/account-verification");
              }}
              className="bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark transition duration-300 ease-in-out"
            >
              Proceed
            </button>
          </div>
        </div>
      )}

      <div className=" w-[50%] flex items-center justify-center sm:hidden 832px:scale-[0.8] 770px:scale-[0.7]">
        <PictureComponent img={player} value={"create"} />
      </div>
    </div>
  );
};

export default CreateAccount;
