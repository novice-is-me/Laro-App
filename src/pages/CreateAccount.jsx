import React, { useEffect, useRef, useState } from "react";
import PictureComponent from "../components/PictureComponent";
import hero3 from "../assets/image/hero3.png";
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
    <div className="flex justify-between items-center h-[85vh] font-Poppins bg-[#fff6f2]">
      <div className="flex flex-col justify-center items-center gap-10 pl-[5rem] w-full h-full 1110:pl-0 950px:w-full sm:justify-start sm:py-5 sm:gap-0">
        {/* Heading Setup Account - Ok */}
        <div className="flex flex-col w-full px-[5rem] 1110:items-center 1110:px-[2rem] 1110:gap-5 950px:gap-2 sm:gap-0">
          <p className="text-[40px] font-bold 1110:text-3xl 950px:text-3xl 950px:text-center xsm:text-3xl 450:text-xl">SET-UP ACCOUNT</p>
          <p className="text-xl text-[#8E8D8D] 1110:text-base 950px:text-[12px] 1110:text-center xsm:text-base">
            You can now create your own account, just make sure that the
            information you provide is accurate.
          </p>
        </div>

        <div className="hidden sm:flex sm:justify-center sm:h-[30vh] sm:relative sm:z-10 sm:w-full">
          <PictureComponent img={hero3} value={"create"} />

        </div>
        

        <form className="flex flex-col gap-5 w-full px-[5rem] 1110:px-[1rem] 950px:items-center" onSubmit={handelSubmit}>
          <div className="flex gap-5 w-auto py-3 rounded-xl">
            <button className="text-base font-medium py-2 px-5 rounded-xl text-white bg-orange">User</button>
            <button className="text-base font-medium py-2 px-5 rounded-xl hover:bg-gray">Organizer</button>
          </div>
          <ol className="flex flex-col sm:items-center sm:w-full  gap-6 list-none relative">
            <li className="w-full">
              <input
                ref={userRef}
                type="text"
                placeholder="Email Address"
                required
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-[#FFEEE6] outline-none w-[298px] 1110:w-full h-[50px] rounded-[7px] p-5 text-base font-Poppins sm:w-full
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
                } mt-2 text-red-600 font-Poppins text-base w-[298px] 1110:w-full`}
              >
                <InfoRounded style={{ fontSize: "20px" }} />
                Input valid Email or Contact number <br />
              </p>
            </li>

            <li className="w-full">
              <input
                type="text"
                placeholder="Username"
                required
                className={`bg-[#FFEEE6] w-[298px] 1110:w-full h-[50px] rounded-[7px] border-none p-5 text-base font-Poppins sm:w-full
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
                } mt-2 text-red-600 font-Poppins text-base w-[298px] 1110:w-full`}
              >
                <InfoRounded style={{ fontSize: "20px" }} /> 4 to 24 characters.{" "}
                <br />
                Must begin with a letter. <br />
                Letters, numbers, underscores, hypens allowed.
              </p>
            </li>
            <li className="w-full">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPass(e.target.value)}
                className={`bg-[#FFEEE6] w-[298px] 1110:w-full h-[50px] rounded-[7px] border-none p-5 text-base font-Poppins sm:w-full
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
              <p
                className={`${
                  passFocus && pass && !validPass ? "block" : "hidden"
                } mt-2 text-red-600 font-Poppins text-base w-[298px] 1110:w-full`}
              >
                <InfoRounded style={{ fontSize: "20px" }} /> 8 to 24 characters.{" "}
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character. <br />
                Allowed special characters: ! @ # $ %
              </p>
            </li>
            <li className="w-full">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                onChange={(e) => setMatchPass(e.target.value)}
                className={`bg-[#FFEEE6] w-[298px] 1110:w-full h-[50px] rounded-[7px] border-none p-5 text-base font-Poppins sm:w-full
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
              <p
                className={`${
                  matchFocus && matchPass && !validMatch ? "block" : "hidden"
                } mt-2 text-red-600 font-Poppins text-base w-[298px] 1110:w-full`}
              >
                <InfoRounded style={{ fontSize: "20px" }} />
                Password not match
                <br />
              </p>
            </li>
            <li className="w-full">
              <input
                type="tel"
                required
                placeholder="Contact Number"
                onChange={(e) => setContactNum(e.target.value)}
                className={`bg-[#FFEEE6] outline-none w-[298px] 1110:w-full h-[50px] rounded-[7px] border-none p-5 text-base font-Poppins sm:w-full
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
                } mt-2 text-red-600 font-Poppins text-base w-[298px] 1110:w-full`}
              >
                <InfoRounded style={{ fontSize: "20px" }} />
                Please enter a valid phone number.
                <br />
              </p>
            </li>

            <li className="w-full">
              <div className="flex items-center justify-between w-[298px] 1110:w-full">
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
                  className="bg-[#FFEEE6] outline-none w-[160px] h-[50px] rounded-xl p-3 border-none flex justify-center item sm:w-fulls-center font-Poppins text-[#A5A5A5] ml-4 text-base"
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
            className={`px-10 py-4 mt-5 outline-none bg-orange rounded-xl text-white font-Poppins text-sm w-fit sm:self-center
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

      {/* Right Side - Image */}
      <div className="flex items-center w-full h-full pl-20 sm:hidden 950px:pl-0 950px:pr-5">
        <PictureComponent img={hero3} value={"create"}  />
      </div>
    </div>
  );
};

export default CreateAccount;
