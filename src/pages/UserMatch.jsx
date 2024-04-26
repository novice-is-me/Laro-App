import React from "react";
import {
  emojiCool,
  emojiSad,
  emojiShock,
  emojiHeartEyes,
  ImageHighlights1,
  ImageHighlights2,
  emojiGem,
  userImg,
  people1,
  people2,
  people3,
  people4,
  people5,
  people6,
  people7,
  people8,
  people9,
} from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faLocation,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import RefreshIcon from "@mui/icons-material/Refresh";
import DashBoardCard from "../components/DashBoardCard";
import { useNavigate } from "react-router";
import UserNav from "../components/UserNav";

const UserMatch = () => {
  const navigate = useNavigate();
  const userFullName = JSON.parse(localStorage.getItem("userFullName"));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const profileImage = userInfo ? userInfo.profile_image : null;
  return (
    <div className="mb-[106px] mt-[10px] flex w-full justify-between gap-5 md:flex-col">
      {/* for profile */}
      <UserNav />

      <div className="flex flex-col border-0 border-red-500 flex-[3] h-full gap-8">
        <div className="flex gap-4 border-0 border-orange ">
          <div className="flex flex-col w-full gap-4">
            <div className="flex border-0 w-full">
              <div className="flex gap-8 w-full">
                <div className="flex flex-col gap-4 justify-between bg-black p-4 text-white w-[422px] h-[844px] rounded-[10px]">
                  <div className="flex justify-between">
                    <p className="font-Inter font-semibold text-[20px]">
                      Previous Matches
                    </p>
                  </div>
                  {/*Match Information*/}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Team
                        </p>
                        <div className="border border-orange w-[85px] h-[40px] rounded-[5px]"></div>
                      </div>
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Score
                        </p>
                        <div className="border border-orange w-[60px] h-[40px] rounded-[5px]"></div>
                      </div>
                    </div>
                    <p className="font-Inter font-semibold text-[20px] mt-3">
                      VS
                    </p>
                    <div className="flex gap-2 flex-grow">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Team
                        </p>
                        <div className="border border-orange w-[85px] h-[40px] rounded-[5px]"></div>
                      </div>
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Score
                        </p>
                        <div className="border border-orange w-[60px] h-[40px] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Team
                        </p>
                        <div className="border border-orange w-[85px] h-[40px] rounded-[5px]"></div>
                      </div>
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Score
                        </p>
                        <div className="border border-orange w-[60px] h-[40px] rounded-[5px]"></div>
                      </div>
                    </div>
                    <p className="font-Inter font-semibold text-[20px] mt-3">
                      VS
                    </p>
                    <div className="flex gap-2 flex-grow">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Team
                        </p>
                        <div className="border border-orange w-[85px] h-[40px] rounded-[5px]"></div>
                      </div>
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Score
                        </p>
                        <div className="border border-orange w-[60px] h-[40px] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Team
                        </p>
                        <div className="border border-orange w-[85px] h-[40px] rounded-[5px]"></div>
                      </div>
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Score
                        </p>
                        <div className="border border-orange w-[60px] h-[40px] rounded-[5px]"></div>
                      </div>
                    </div>
                    <p className="font-Inter font-semibold text-[20px] mt-3">
                      VS
                    </p>
                    <div className="flex gap-2 flex-grow">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Team
                        </p>
                        <div className="border border-orange w-[85px] h-[40px] rounded-[5px]"></div>
                      </div>
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Score
                        </p>
                        <div className="border border-orange w-[60px] h-[40px] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Team
                        </p>
                        <div className="border border-orange w-[85px] h-[40px] rounded-[5px]"></div>
                      </div>
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Score
                        </p>
                        <div className="border border-orange w-[60px] h-[40px] rounded-[5px]"></div>
                      </div>
                    </div>
                    <p className="font-Inter font-semibold text-[20px] mt-3">
                      VS
                    </p>
                    <div className="flex gap-2 flex-grow">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Team
                        </p>
                        <div className="border border-orange w-[85px] h-[40px] rounded-[5px]"></div>
                      </div>
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Score
                        </p>
                        <div className="border border-orange w-[60px] h-[40px] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Team
                        </p>
                        <div className="border border-orange w-[85px] h-[40px] rounded-[5px]"></div>
                      </div>
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Score
                        </p>
                        <div className="border border-orange w-[60px] h-[40px] rounded-[5px]"></div>
                      </div>
                    </div>
                    <p className="font-Inter font-semibold text-[20px] mt-3">
                      VS
                    </p>
                    <div className="flex gap-2 flex-grow">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Team
                        </p>
                        <div className="border border-orange w-[85px] h-[40px] rounded-[5px]"></div>
                      </div>
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Score
                        </p>
                        <div className="border border-orange w-[60px] h-[40px] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Team
                        </p>
                        <div className="border border-orange w-[85px] h-[40px] rounded-[5px]"></div>
                      </div>
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Score
                        </p>
                        <div className="border border-orange w-[60px] h-[40px] rounded-[5px]"></div>
                      </div>
                    </div>
                    <p className="font-Inter font-semibold text-[20px] mt-3">
                      VS
                    </p>
                    <div className="flex gap-2 flex-grow">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Team
                        </p>
                        <div className="border border-orange w-[85px] h-[40px] rounded-[5px]"></div>
                      </div>
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[14px]">
                          Score
                        </p>
                        <div className="border border-orange w-[60px] h-[40px] rounded-[5px]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Date*/}
                  <div className="flex justify-between">
                    <div>
                      <p className="font-Inter text-[#7B7B7B] text-[8px]">
                        Date 1-1-2024
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <RefreshIcon
                      fontSize="small"
                      className="bg-white text-black rounded-full"
                    />
                    <p>refresh</p>
                  </div>
                </div>
                {/* Player Information*/}
                <div>
                  <div className="bg-black p-4 text-white w-[100%] rounded-[10px]">
                    <p className="font-Inter font-semibold text-[24px]">
                      Player Information
                    </p>
                    <div className=" flex justify-between border-b-2 border-white m-4 pb-4">
                      <div>
                        <p className="font-Inter text-[#7B7B7B] text-[12px]">
                          Name
                        </p>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faUser} />
                          <p className="font-Inter text-[15px]">
                            {userFullName.full_name}{" "}
                          </p>
                        </div>
                      </div>
                      <div className="px-4">
                        <p className="font-Inter text-[#7B7B7B] text-[12px]">
                          Location
                        </p>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faLocationDot} />
                          <p className="font-Inter text-[15px]">
                            {userInfo.address}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-12">
                      <div className="flex gap-2">
                        <p className="font-Inter font-semibold text-[15px]">
                          Team
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center overflow-x-auto mt-2">
                      <img
                        src={people1}
                        alt=""
                        className=" h-[39px] w-[39px] object-cover"
                      />
                      <img
                        src={people2}
                        alt=""
                        className=" h-[39px] w-[39px] object-cover"
                      />
                      <img
                        src={people3}
                        alt=""
                        className=" h-[39px] w-[39px] object-cover"
                      />
                      <img
                        src={people4}
                        alt=""
                        className=" h-[39px] w-[39px] object-cover"
                      />
                      <img
                        src={people5}
                        alt=""
                        className=" h-[39px] w-[39px] object-cover"
                      />
                      <img
                        src={people6}
                        alt=""
                        className=" h-[39px] w-[39px] object-cover"
                      />
                      <img
                        src={people7}
                        alt=""
                        className=" h-[39px] w-[39px] object-cover"
                      />
                      <img
                        src={people8}
                        alt=""
                        className=" h-[39px] w-[39px] object-cover"
                      />
                      <img
                        src={people9}
                        alt=""
                        className=" h-[39px] w-[39px] object-cover"
                      />
                    </div>
                  </div>
                  {/* Image*/}
                  <div className="border-0 border-red-900 w-full">
                    <p className="font-Poppins font-semibold text-[16px] mb-2">
                      Image
                    </p>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-3">
                        <div className="h-[233px] w-[255px] rounded-[10px] overflow-hidden">
                          <img
                            src={ImageHighlights1}
                            alt=""
                            className=" h-full w-full object-cover"
                          />
                        </div>
                        <div className="h-[233px] w-[255px] rounded-[10px] overflow-hidden">
                          <img
                            src={ImageHighlights2}
                            alt=""
                            className=" h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-[233px] w-[255px] rounded-[10px] overflow-hidden">
                          <img
                            src={ImageHighlights1}
                            alt=""
                            className=" h-full w-full object-cover"
                          />
                        </div>
                        <div className="h-[233px] w-[255px] rounded-[10px] overflow-hidden">
                          <img
                            src={ImageHighlights2}
                            alt=""
                            className=" h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMatch;
