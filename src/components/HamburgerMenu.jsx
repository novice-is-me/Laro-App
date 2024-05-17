import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function HamburgerMenu({ toggleMenu }){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userLoggedIn = localStorage.getItem("token") !== null;
        setIsLoggedIn(userLoggedIn);
      }, []);
    
    const handleLogout = () => {
        navigate("/login");
        console.log("Logging out...");
        // Clear user data from localStorage and log out
        localStorage.removeItem("token");
        localStorage.removeItem("userFullName");
        localStorage.removeItem("userInfo");
        setIsLoggedIn(false);
        // Redirect to the login page
        console.log("Navigating to login page...");
    };

    return(
        <div className="1110:flex justify-between w-full p-5 bg-white shadow-xl hidden">
            <div onClick={toggleMenu} className="w-fit p-3 rounded-xl bg-orange">
                <p className="text-white font-bold text-2xl">&#9776;</p>
            </div>

            <div onClick={handleLogout} className="flex items-center justify-center">
                <svg
                    width="45"
                    height="50"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.2197 21.0001C28.2197 20.6521 28.0814 20.3182 27.8353 20.0721C27.5892 19.8259 27.2553 19.6876 26.9072 19.6876H7.70448L11.1362 16.7476C11.2672 16.6355 11.3748 16.4986 11.4529 16.3449C11.5311 16.1912 11.5781 16.0235 11.5914 15.8516C11.6048 15.6797 11.5841 15.5068 11.5306 15.3429C11.4771 15.1789 11.3919 15.0271 11.2797 14.8961C11.1676 14.7652 11.0307 14.6575 10.877 14.5794C10.7232 14.5013 10.5556 14.4543 10.3837 14.4409C10.2118 14.4276 10.0389 14.4483 9.87496 14.5018C9.71102 14.5552 9.55922 14.6405 9.42823 14.7526L3.30323 20.0026C3.15914 20.1259 3.04346 20.2788 2.96414 20.451C2.88482 20.6232 2.84375 20.8106 2.84375 21.0001C2.84375 21.1897 2.88482 21.3771 2.96414 21.5493C3.04346 21.7215 3.15914 21.8744 3.30323 21.9976L9.42823 27.2476C9.69278 27.4741 10.0365 27.5863 10.3837 27.5594C10.7309 27.5324 11.0532 27.3687 11.2797 27.1041C11.5062 26.8396 11.6183 26.4959 11.5914 26.1487C11.5645 25.8015 11.4008 25.4791 11.1362 25.2526L7.70623 22.3126H26.9072C27.2553 22.3126 27.5892 22.1744 27.8353 21.9282C28.0814 21.6821 28.2197 21.3482 28.2197 21.0001Z"
                    fill="#FF0000"/>
                    <path
                    d="M16.4063 14C16.4063 15.2285 16.4062 15.8427 16.702 16.2855C16.8294 16.4759 16.9929 16.6394 17.1833 16.7668C17.626 17.0625 18.2402 17.0625 19.4688 17.0625H26.9062C27.9505 17.0625 28.9521 17.4773 29.6905 18.2158C30.4289 18.9542 30.8438 19.9557 30.8438 21C30.8438 22.0443 30.4289 23.0458 29.6905 23.7842C28.9521 24.5227 27.9505 24.9375 26.9062 24.9375H19.4688C18.2402 24.9375 17.626 24.9375 17.1833 25.2315C16.9927 25.3594 16.8292 25.5235 16.702 25.7145C16.4062 26.1573 16.4063 26.7715 16.4063 28C16.4063 32.949 16.4062 35.4253 17.9445 36.9618C19.481 38.5 21.9555 38.5 26.9045 38.5H28.6545C33.607 38.5 36.0798 38.5 37.618 36.9618C39.1562 35.4253 39.1562 32.949 39.1562 28V14C39.1562 9.051 39.1562 6.57475 37.618 5.03825C36.0798 3.5 33.6052 3.5 28.6562 3.5H26.9062C21.9555 3.5 19.481 3.5 17.9445 5.03825C16.4062 6.57475 16.4063 9.051 16.4063 14Z"
                    fill="#FF0000"/>
                </svg>
            </div>
        </div>
    )
}