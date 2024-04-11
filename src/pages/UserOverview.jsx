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
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import RefreshIcon from "@mui/icons-material/Refresh";
import DashBoardCard from "../components/DashBoardCard";
import { useNavigate } from "react-router";

const UserOverview = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex border border-0 w-full p-4 gap-4">
        {/* for profile */}
        <div className=" flex border border-0 flex-[1.1] gap-4">
          <div
            className=" mt-4 hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            <svg
              width="22"
              height="35"
              viewBox="0 0 22 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.85827 20.0176C1.19113 19.3497 0.816406 18.4442 0.816406 17.5001C0.816406 16.5561 1.19113 15.6506 1.85827 14.9826L15.2913 1.54488C15.9596 0.876882 16.8659 0.501731 17.8108 0.501953C18.2787 0.502063 18.7419 0.594327 19.1742 0.773476C19.6064 0.952626 19.9991 1.21515 20.3298 1.54607C20.6606 1.87698 20.9229 2.2698 21.1019 2.70211C21.2808 3.13441 21.3729 3.59772 21.3728 4.06559C21.3727 4.53347 21.2804 4.99674 21.1012 5.42896C20.9221 5.86117 20.6596 6.25387 20.3286 6.58463L9.41552 17.5001L20.331 28.4156C20.6714 28.7441 20.943 29.1371 21.1299 29.5716C21.3168 30.0062 21.4153 30.4736 21.4197 30.9466C21.424 31.4196 21.3341 31.8888 21.1551 32.3267C20.9762 32.7646 20.7119 33.1625 20.3776 33.4971C20.0432 33.8318 19.6456 34.0965 19.2079 34.2758C18.7701 34.4552 18.3011 34.5455 17.828 34.5416C17.355 34.5377 16.8875 34.4397 16.4528 34.2532C16.018 34.0667 15.6248 33.7955 15.296 33.4554L1.85352 20.0176H1.85827Z"
                fill="#545454"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-8 border-0 w-full">
            <div className="flex flex-col gap-8">
              <div className="flex gap-2 border-0 border-red-600 w-full">
                <div className="h-[130px] w-full rounded-[10px] overflow-hidden">
                  <img
                    src={userImg}
                    alt=""
                    className=" h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between w-full m-2 border-0 border-green-500">
                  <div className="border-0 w-full">
                    <div className="flex gap-25 items-center justify-between">
                      <p className="font-poppins text-[20px] font-semibold">
                        Juan Dela Cruz.
                      </p>
                      <svg
                        width="17"
                        height="17"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                          fill="#545454"
                        />
                      </svg>{" "}
                    </div>
                    <p className="font-poppins text-[#787878] text-sm">
                      Pasig City, Philippines
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-0 w-full">
                    <p className="font-poppins text-sm font-semibold">Share</p>
                    <div className="flex gap-2">
                      <svg
                        width="25"
                        height="25"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                          fill="#6F6F6F"
                        />
                      </svg>
                      <svg
                        width="25"
                        height="25"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          fill="#6F6F6F"
                        />
                      </svg>
                      <svg
                        width="25"
                        height="25"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          fill="#6F6F6F"
                        />
                      </svg>
                      <svg
                        width="35"
                        height="25"
                        viewBox="0 0 31 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.0362 13.9998C5.0362 12.0048 6.83161 10.3832 9.04037 10.3832H14.207V8.1665H9.04037C5.47536 8.1665 2.58203 10.7798 2.58203 13.9998C2.58203 17.2198 5.47536 19.8332 9.04037 19.8332H14.207V17.6165H9.04037C6.83161 17.6165 5.0362 15.9948 5.0362 13.9998ZM10.332 15.1665H20.6654V12.8332H10.332V15.1665ZM21.957 8.1665H16.7904V10.3832H21.957C24.1658 10.3832 25.9612 12.0048 25.9612 13.9998C25.9612 15.9948 24.1658 17.6165 21.957 17.6165H16.7904V19.8332H21.957C25.522 19.8332 28.4154 17.2198 28.4154 13.9998C28.4154 10.7798 25.522 8.1665 21.957 8.1665Z"
                          fill="#6F6F6F"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div
                  className="flex items-center justify-between hover:cursor-pointer"
                  onClick={() => navigate("/user")}
                >
                  <svg
                    width="35"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.6157 33.7766L33.7761 32.6162L30.6678 29.5079V24.8662H29.0101V30.171L32.6157 33.7766ZM8.28816 34.8127C7.3764 34.8127 6.59615 34.4883 5.94741 33.8396C5.29868 33.1908 4.97376 32.41 4.97266 31.4972V8.28865C4.97266 7.37688 5.29758 6.59664 5.94741 5.9479C6.59725 5.29917 7.3775 4.97425 8.28816 4.97314H31.4967C32.4084 4.97314 33.1892 5.29806 33.8391 5.9479C34.4889 6.59774 34.8133 7.37799 34.8122 8.28865V19.3956C34.2872 19.1469 33.7485 18.9331 33.1959 18.754C32.6433 18.575 32.0769 18.4435 31.4967 18.3595V8.28865H8.28816V31.4972H18.3176C18.4004 32.105 18.532 32.6852 18.7121 33.2378C18.8922 33.7904 19.1061 34.3154 19.3537 34.8127H8.28816ZM8.28816 29.8394V31.4972V8.28865V18.3595V18.2352V29.8394ZM11.6037 28.1817H18.359C18.4419 27.6015 18.5734 27.0351 18.7535 26.4825C18.9337 25.9299 19.1337 25.3911 19.3537 24.8662H11.6037V28.1817ZM11.6037 21.5507H21.716C22.6001 20.7218 23.5881 20.0311 24.68 19.4785C25.7719 18.9259 26.939 18.5529 28.1812 18.3595V18.2352H11.6037V21.5507ZM11.6037 14.9197H28.1812V11.6042H11.6037V14.9197ZM29.8389 38.1282C27.5457 38.1282 25.5912 37.3198 23.9755 35.7029C22.3597 34.086 21.5513 32.1315 21.5502 29.8394C21.5502 27.5462 22.3586 25.5917 23.9755 23.976C25.5923 22.3602 27.5468 21.5518 29.8389 21.5507C32.1322 21.5507 34.0872 22.3591 35.7041 23.976C37.3209 25.5928 38.1288 27.5473 38.1277 29.8394C38.1277 32.1326 37.3193 34.0877 35.7024 35.7045C34.0855 37.3214 32.1311 38.1293 29.8389 38.1282Z"
                      fill="black"
                    />
                  </svg>
                  <p className=" font-Inter text-2xl">Overview</p>
                  <svg
                    width="35"
                    height="35"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                  </svg>
                </div>

                {/* Statistics */}
                <div
                  className="flex items-center justify-between hover:cursor-pointer"
                  onClick={() => navigate("/user/statistics")}
                >
                  <svg
                    width="37"
                    height="35"
                    viewBox="0 0 37 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.2787 0.265137C30.2437 0.264693 29.2366 0.600191 28.4086 1.22121C27.5806 1.84222 26.9766 2.7152 26.6873 3.70893C26.3979 4.70265 26.439 5.76344 26.8042 6.73185C27.1694 7.70025 27.8391 8.52395 28.7126 9.07914L25.5922 20.0005C25.4953 19.9943 25.3983 19.9911 25.3012 19.9908C24.2726 19.9897 23.2713 20.322 22.4475 20.9381L16.6827 16.1341C16.9556 15.3243 17.0066 14.4562 16.8303 13.6201C16.654 12.784 16.2568 12.0103 15.6802 11.3797C15.1035 10.7491 14.3684 10.2846 13.5514 10.0343C12.7343 9.78414 11.8651 9.75744 11.0343 9.95703C10.2034 10.1566 9.44118 10.5752 8.82691 11.1692C8.21265 11.7633 7.76878 12.511 7.54148 13.3348C7.31419 14.1585 7.31177 15.0281 7.53448 15.853C7.75718 16.678 8.19688 17.4283 8.80783 18.0257L5.42369 24.7943C5.27549 24.7802 5.12671 24.773 4.97784 24.7728C3.83224 24.7713 2.72408 25.1806 1.8545 25.9265C0.984932 26.6723 0.411588 27.7052 0.238544 28.8376C0.065499 29.9701 0.304224 31.1271 0.911386 32.0985C1.51855 33.07 2.4539 33.7916 3.54767 34.1323C4.64143 34.473 5.82111 34.4103 6.87257 33.9555C7.92403 33.5007 8.77757 32.684 9.27827 31.6536C9.77898 30.6232 9.89365 29.4474 9.60147 28.3397C9.30929 27.232 8.62963 26.2657 7.68586 25.6163L10.8838 19.2213C11.6606 19.4356 12.4791 19.4496 13.2628 19.262C14.0465 19.0744 14.7699 18.6914 15.3656 18.1486L20.947 22.8C20.568 23.6352 20.4372 24.5618 20.5702 25.4694C20.7032 26.3769 21.0944 27.227 21.6971 27.9184C22.2998 28.6098 23.0887 29.1132 23.9696 29.3687C24.8505 29.6242 25.7863 29.621 26.6654 29.3594C27.5446 29.0978 28.3299 28.5889 28.9278 27.8934C29.5258 27.1978 29.9111 26.345 30.0378 25.4366C30.1645 24.5282 30.0272 23.6025 29.6424 22.7699C29.2576 21.9373 28.6415 21.2329 27.8675 20.7407L30.9878 9.81938C31.0841 9.8252 31.1809 9.82909 31.2787 9.82909C32.547 9.82909 33.7633 9.32528 34.6601 8.42848C35.5569 7.53169 36.0607 6.31537 36.0607 5.04711C36.0607 3.77885 35.5569 2.56254 34.6601 1.66575C33.7633 0.768951 32.547 0.265137 31.2787 0.265137ZM4.97784 31.9457C4.50495 31.9457 4.04268 31.8055 3.64948 31.5428C3.25628 31.2801 2.94983 30.9066 2.76886 30.4697C2.58789 30.0328 2.54054 29.5521 2.6328 29.0883C2.72505 28.6245 2.95277 28.1984 3.28716 27.8641C3.62154 27.5297 4.04758 27.302 4.51138 27.2097C4.97519 27.1174 5.45594 27.1648 5.89283 27.3458C6.32973 27.5267 6.70315 27.8332 6.96588 28.2264C7.2286 28.6196 7.36883 29.0819 7.36883 29.5547C7.36812 30.1887 7.11598 30.7964 6.66774 31.2446C6.2195 31.6929 5.61175 31.945 4.97784 31.9457ZM12.1508 17.0021C11.6779 17.0021 11.2156 16.8618 10.8224 16.5991C10.4292 16.3364 10.1228 15.963 9.94182 15.5261C9.76085 15.0892 9.7135 14.6084 9.80576 14.1446C9.89802 13.6808 10.1257 13.2548 10.4601 12.9204C10.7945 12.586 11.2205 12.3583 11.6843 12.266C12.1482 12.1738 12.6289 12.2211 13.0658 12.4021C13.5027 12.583 13.8761 12.8895 14.1388 13.2827C14.4016 13.6759 14.5418 14.1382 14.5418 14.6111C14.5411 15.245 14.2889 15.8527 13.8407 16.301C13.3925 16.7492 12.7847 17.0013 12.1508 17.0021ZM25.3012 27.1638C24.8283 27.1638 24.3661 27.0235 23.9729 26.7608C23.5797 26.4981 23.2732 26.1247 23.0923 25.6878C22.9113 25.2509 22.8639 24.7701 22.9562 24.3063C23.0485 23.8425 23.2762 23.4165 23.6106 23.0821C23.9449 22.7477 24.371 22.52 24.8348 22.4277C25.2986 22.3355 25.7793 22.3828 26.2162 22.5638C26.6531 22.7448 27.0266 23.0512 27.2893 23.4444C27.552 23.8376 27.6922 24.2999 27.6922 24.7728C27.6915 25.4067 27.4394 26.0144 26.9911 26.4627C26.5429 26.9109 25.9352 27.163 25.3012 27.1638ZM31.2787 7.4381C30.8058 7.4381 30.3435 7.29787 29.9503 7.03515C29.5572 6.77242 29.2507 6.399 29.0697 5.96211C28.8888 5.52521 28.8414 5.04446 28.9337 4.58066C29.0259 4.11685 29.2536 3.69082 29.588 3.35643C29.9224 3.02204 30.3484 2.79432 30.8123 2.70207C31.2761 2.60981 31.7568 2.65716 32.1937 2.83813C32.6306 3.0191 33.004 3.32556 33.2667 3.71875C33.5295 4.11195 33.6697 4.57422 33.6697 5.04711C33.669 5.68103 33.4169 6.28877 32.9686 6.73701C32.5204 7.18525 31.9126 7.43739 31.2787 7.4381Z"
                      fill="#717171"
                    />
                  </svg>
                  <p className=" font-Inter text-2xl">Statistics</p>
                  <svg
                    width="35"
                    height="35"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                  </svg>
                </div>

                {/*Matches */}
                <div
                  className="flex items-center justify-between hover:cursor-pointer"
                  onClick={() => navigate("/user/matches")}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.7953 35.0847C39.1603 29.2269 41.1924 17.6964 35.3346 9.33137C29.4788 0.966355 17.9482 -1.06573 9.5832 4.79385M30.7953 35.0847C22.4303 40.9405 10.8997 38.9085 5.04198 30.5434C-0.813896 22.1784 1.21819 10.6479 9.5832 4.79385M30.7953 35.0847L9.5832 4.79385"
                      stroke="#717171"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M34.1995 7.86865C27.2287 18.7705 18.468 24.9056 4.05664 28.9753"
                      stroke="#717171"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.1487 1.55078C22.9124 11.2397 28.4207 19.1055 38.1355 24.3863M2.24023 15.4906C11.0841 19.5215 16.5906 27.3873 18.2288 38.3243"
                      stroke="#717171"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className=" font-Inter text-2xl">Matches</p>
                  <svg
                    width="35"
                    height="35"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                  </svg>
                </div>

                {/* Messages */}
                <div
                  className="flex items-center justify-between hover:cursor-pointer"
                  onClick={() => navigate("/user/achievements")}
                >
                  <svg
                    width="26"
                    height="39"
                    viewBox="0 0 26 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.707031 0.783203L6.623 15.1502C3.07841 17.3524 0.707031 21.2714 0.707031 25.7451C0.707031 32.6263 6.30543 38.2261 13.188 38.2261C20.0705 38.2261 25.6689 32.6263 25.6689 25.7451C25.6689 21.2728 23.2976 17.3538 19.753 15.1502L25.6689 0.783203H22.6707L17.2457 13.9548C16.3217 13.633 15.3627 13.4221 14.3889 13.3266L19.5491 0.783203H16.5509L11.3477 13.4167C10.5931 13.5272 9.85032 13.7073 9.1289 13.9548L3.70523 0.783203H0.707031ZM6.82547 0.783203L10.3493 9.34514L11.8498 5.70209L9.82506 0.783203H6.82547ZM13.188 16.0377C18.5395 16.0377 22.8954 20.3922 22.8954 25.7451C22.8954 31.0981 18.5395 35.4525 13.188 35.4525C7.83643 35.4525 3.48058 31.0981 3.48058 25.7451C3.48058 20.3922 7.83643 16.0377 13.188 16.0377ZM13.188 20.4227L11.5682 24.056L7.6409 24.4859L10.5809 27.1263L9.75295 31.0232L13.188 29.0429L16.623 31.0259L15.7965 27.1291L18.7351 24.4845L14.8077 24.0546L13.188 20.4227Z"
                      fill="#717171"
                    />
                  </svg>
                  <p className=" font-Inter text-2xl">Achievements</p>
                  <svg
                    width="35"
                    height="35"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Logout */}
            <div className="flex flex-col gap-7 justify-between border-0 w-full">
              <div
                className="flex items-center justify-between hover:cursor-pointer"
                onClick={() => navigate("/")}
              >
                <svg
                  width="35"
                  height="40"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.2197 21.0001C28.2197 20.6521 28.0814 20.3182 27.8353 20.0721C27.5892 19.8259 27.2553 19.6876 26.9072 19.6876H7.70448L11.1362 16.7476C11.2672 16.6355 11.3748 16.4986 11.4529 16.3449C11.5311 16.1912 11.5781 16.0235 11.5914 15.8516C11.6048 15.6797 11.5841 15.5068 11.5306 15.3429C11.4771 15.1789 11.3919 15.0271 11.2797 14.8961C11.1676 14.7652 11.0307 14.6575 10.877 14.5794C10.7232 14.5013 10.5556 14.4543 10.3837 14.4409C10.2118 14.4276 10.0389 14.4483 9.87496 14.5018C9.71102 14.5552 9.55922 14.6405 9.42823 14.7526L3.30323 20.0026C3.15914 20.1259 3.04346 20.2788 2.96414 20.451C2.88482 20.6232 2.84375 20.8106 2.84375 21.0001C2.84375 21.1897 2.88482 21.3771 2.96414 21.5493C3.04346 21.7215 3.15914 21.8744 3.30323 21.9976L9.42823 27.2476C9.69278 27.4741 10.0365 27.5863 10.3837 27.5594C10.7309 27.5324 11.0532 27.3687 11.2797 27.1041C11.5062 26.8396 11.6183 26.4959 11.5914 26.1487C11.5645 25.8015 11.4008 25.4791 11.1362 25.2526L7.70623 22.3126H26.9072C27.2553 22.3126 27.5892 22.1744 27.8353 21.9282C28.0814 21.6821 28.2197 21.3482 28.2197 21.0001Z"
                    fill="#FF0000"
                  />
                  <path
                    d="M16.4063 14C16.4063 15.2285 16.4062 15.8427 16.702 16.2855C16.8294 16.4759 16.9929 16.6394 17.1833 16.7668C17.626 17.0625 18.2402 17.0625 19.4688 17.0625H26.9062C27.9505 17.0625 28.9521 17.4773 29.6905 18.2158C30.4289 18.9542 30.8438 19.9557 30.8438 21C30.8438 22.0443 30.4289 23.0458 29.6905 23.7842C28.9521 24.5227 27.9505 24.9375 26.9062 24.9375H19.4688C18.2402 24.9375 17.626 24.9375 17.1833 25.2315C16.9927 25.3594 16.8292 25.5235 16.702 25.7145C16.4062 26.1573 16.4063 26.7715 16.4063 28C16.4063 32.949 16.4062 35.4253 17.9445 36.9618C19.481 38.5 21.9555 38.5 26.9045 38.5H28.6545C33.607 38.5 36.0798 38.5 37.618 36.9618C39.1562 35.4253 39.1562 32.949 39.1562 28V14C39.1562 9.051 39.1562 6.57475 37.618 5.03825C36.0798 3.5 33.6052 3.5 28.6562 3.5H26.9062C21.9555 3.5 19.481 3.5 17.9445 5.03825C16.4062 6.57475 16.4063 9.051 16.4063 14Z"
                    fill="#FF0000"
                  />
                </svg>
                <p className="font-Inter text-2xl">Logout</p>
                <svg
                  width="40"
                  height="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="mr-4 bg-orange p-6">
                <p className="text-white font-Poppins font-[600] text-[16px]">
                  Refer a friend and earn money <br /> as an organizer.
                </p>
                <div className="mt-10">
                  <button className="bg-black p-4 w-full text-white font-Poppins">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-0 border-red-500 flex-[3] gap-8">
          <div className="flex gap-4 border-0 border-orange ">
            <div className="space-y-4">
              {/* New Matches */}
              <div className="bg-black text-white p-4 rounded-[10px] w-[153px] h-[156px] relative">
                <p className="font-Inter font-semibold text-[20px]">New</p>
                <p className="font-Inter font-semibold text-gray text-[10px]">
                  Rank
                </p>
                <div className="flex gap-2">
                  <img src={emojiGem} alt="" className={"games"} />
                </div>
              </div>

              {/* Total Play  */}
              <div className="bg-orange text-white p-4 rounded-[10px] w-[153px] h-[245px]">
                <p className="font-Inter font-semibold text-[20px]">
                  Total Play
                </p>
                <p className="font-Inter font-semibold text-[32px]">0</p>
              </div>
            </div>

            {/* Previous Matches */}
            <div className="flex flex-col w-full gap-4">
              <div className="flex border-0 w-full">
                <div className="flex gap-8 w-full">
                  <div className="flex flex-col gap-4 justify-between bg-black p-4 text-white w-[382px] h-[413px] rounded-[10px]">
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

                  <div className="bg-black p-4 text-white w-full h-full rounded-[10px]">
                    <div className="w-full flex flex-col gap-5">
                      <p className="font-Inter font-semibold text-[24px]">
                        Player Information
                      </p>
                      <div className="flex justify-between">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2"
                        >
                          <path
                            d="M10.5 10.5C12.4338 10.5 14 8.93375 14 7C14 5.06625 12.4338 3.5 10.5 3.5C8.56625 3.5 7 5.06625 7 7C7 8.93375 8.56625 10.5 10.5 10.5ZM10.5 12.25C8.16375 12.25 3.5 13.4225 3.5 15.75V17.5H17.5V15.75C17.5 13.4225 12.8363 12.25 10.5 12.25Z"
                            fill="#F8F8F8"
                          />
                        </svg>
                        <div className="ml-2">
                          <p className="font-Inter font-semibold text-[15px]">
                            Juan Dela Cruz
                          </p>
                        </div>
                        <div className="flex items-center ml-auto">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.99935 9.58317C9.44682 9.58317 8.91691 9.36368 8.52621 8.97298C8.13551 8.58228 7.91602 8.05237 7.91602 7.49984C7.91602 6.9473 8.13551 6.4174 8.52621 6.0267C8.91691 5.636 9.44682 5.4165 9.99935 5.4165C10.5519 5.4165 11.0818 5.636 11.4725 6.0267C11.8632 6.4174 12.0827 6.9473 12.0827 7.49984C12.0827 7.77342 12.0288 8.04433 11.9241 8.29709C11.8194 8.54986 11.6659 8.77952 11.4725 8.97298C11.279 9.16643 11.0494 9.31989 10.7966 9.42459C10.5438 9.52928 10.2729 9.58317 9.99935 9.58317ZM9.99935 1.6665C8.45225 1.6665 6.96852 2.28109 5.87456 3.37505C4.7806 4.46901 4.16602 5.95274 4.16602 7.49984C4.16602 11.8748 9.99935 18.3332 9.99935 18.3332C9.99935 18.3332 15.8327 11.8748 15.8327 7.49984C15.8327 5.95274 15.2181 4.46901 14.1241 3.37505C13.0302 2.28109 11.5464 1.6665 9.99935 1.6665Z"
                              fill="#F8F8F8"
                            />
                          </svg>
                          <div className="flex items-center ml-auto">
                            <p className="font-Inter font-semibold text-[15px]">
                              Pasig City, Philippines
                            </p>
                          </div>
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
                    <div className="flex items-center">
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
                </div>
              </div>
            </div>
          </div>

          {/* for image */}
          <div className="flex border-0 border-yellow-900 gap-8">
            {/* Image Highlights */}
            <div className="flex gap-4 border-0 border-violet-500 w-full">
              <div className="border-0 border-red-900 w-full">
                <p className="font-Poppins font-semibold text-[16px]">
                  Image Highlights
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="h-[353px] w-[247px] rounded-[10px] overflow-hidden">
                      <img
                        src={ImageHighlights1}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-[353px] w-[247px] rounded-[10px] overflow-hidden">
                      <img
                        src={ImageHighlights2}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Totals */}
            <div className="flex gap-4 border-0 border-violet-500 w-full">
              <div className="w-full flex flex-col gap-2">
                <div className="flex gap-2">
                  <DashBoardCard
                    title={"Total Points"}
                    points={"0"}
                    emoji={emojiCool}
                    value={"games"}
                  />
                  <DashBoardCard
                    title={"Total Wins"}
                    points={"0"}
                    emoji={emojiHeartEyes}
                    value={"accomplishment"}
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <DashBoardCard
                      title={"Total Loss"}
                      points={"0"}
                      emoji={emojiSad}
                      value={"loss"}
                    />
                    <DashBoardCard
                      title={"Total Awards"}
                      points={"0"}
                      emoji={emojiShock}
                      value={"games"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOverview;
