/* eslint-disable */
import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

const AddInfo = () => {
  const options = {
    title: "Select Date",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date("9999-12-31"),
    minDate: new Date("1900-01-01"),
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date(),
    language: "en",
  };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const handleClose1 = (state: boolean) => {
    setShow1(state);
  };

  return (
    <div className="bg-gray-200 h-screen">
      <div className="flex flex-col p-10">
        <div className="w-[150px] h-[150px]">
          <svg
            viewBox="0 0 250 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2161_5197)">
              <rect
                x="36"
                y="24.325"
                width="181"
                height="191.083"
                rx="90.5"
                fill="#4269E1"
                shapeRendering="crispEdges"
              />
              <g clipPath="url(#clip0_2161_5197)">
                <path
                  d="M119.126 79.6213C118.519 79.6213 117.937 79.8625 117.507 80.2919C117.078 80.7212 116.837 81.3035 116.837 81.9107C116.837 82.5179 117.078 83.1002 117.507 83.5295C117.937 83.9589 118.519 84.2001 119.126 84.2001H121.416V89.0993C113.396 90.2585 106.112 94.4119 101.031 100.724C95.9497 107.036 93.4474 115.038 94.0276 123.121C94.6079 131.203 98.2275 138.766 104.158 144.288C110.089 149.809 117.891 152.88 125.994 152.881C132.139 152.881 138.153 151.115 143.322 147.793C148.491 144.471 152.596 139.733 155.148 134.144C157.701 128.555 158.593 122.35 157.718 116.269C156.844 110.187 154.24 104.485 150.216 99.8411C150.236 99.8231 150.256 99.8048 150.276 99.7862L151.896 98.1653L153.513 99.7862C153.724 100.005 153.977 100.179 154.256 100.299C154.535 100.419 154.836 100.482 155.14 100.485C155.444 100.488 155.745 100.43 156.026 100.315C156.308 100.199 156.563 100.029 156.778 99.8145C156.993 99.5996 157.163 99.344 157.278 99.0626C157.393 98.7812 157.451 98.4798 157.449 98.1758C157.446 97.8718 157.383 97.5714 157.263 97.2921C157.143 97.0128 156.969 96.7602 156.75 96.549L150.276 90.07C150.064 89.8514 149.812 89.677 149.532 89.557C149.253 89.437 148.953 89.3739 148.649 89.3712C148.345 89.3686 148.043 89.4265 147.762 89.5416C147.481 89.6567 147.225 89.8267 147.01 90.0417C146.795 90.2566 146.625 90.5122 146.51 90.7936C146.395 91.0749 146.337 91.3764 146.34 91.6804C146.342 91.9844 146.405 92.2848 146.525 92.5641C146.645 92.8434 146.82 93.096 147.038 93.3072L148.659 94.9281L147.038 96.549C147.02 96.5671 147.002 96.5854 146.983 96.6039C142.348 92.5782 136.651 89.9742 130.573 89.1039V84.2001H132.863C133.47 84.2001 134.052 83.9589 134.481 83.5295C134.911 83.1002 135.152 82.5179 135.152 81.9107C135.152 81.3035 134.911 80.7212 134.481 80.2919C134.052 79.8625 133.47 79.6213 132.863 79.6213H119.126ZM128.284 105.262V120.83C128.284 121.437 128.043 122.02 127.613 122.449C127.184 122.878 126.602 123.119 125.994 123.119H109.969C109.362 123.119 108.779 122.878 108.35 122.449C107.921 122.02 107.679 121.437 107.679 120.83C107.679 120.223 107.921 119.641 108.35 119.211C108.779 118.782 109.362 118.541 109.969 118.541H123.705V105.262C123.705 104.655 123.946 104.073 124.376 103.644C124.805 103.214 125.387 102.973 125.994 102.973C126.602 102.973 127.184 103.214 127.613 103.644C128.043 104.073 128.284 104.655 128.284 105.262Z"
                  fill="white"
                />
                <rect
                  width="26.8274"
                  height="30.3014"
                  transform="translate(105.383 96.7986)"
                  fill="white"
                />
                <path
                  d="M112.336 120.11C112.336 117.302 112.944 114.805 114.159 112.618C115.374 110.404 117.062 108.689 119.222 107.474C121.409 106.232 123.879 105.611 126.633 105.611C130.008 105.611 132.897 106.502 135.3 108.284C137.703 110.066 139.31 112.496 140.12 115.574H132.506C131.939 114.386 131.129 113.482 130.076 112.861C129.05 112.24 127.875 111.929 126.552 111.929C124.419 111.929 122.691 112.672 121.368 114.157C120.045 115.642 119.384 117.626 119.384 120.11C119.384 122.594 120.045 124.579 121.368 126.064C122.691 127.549 124.419 128.291 126.552 128.291C127.875 128.291 129.05 127.981 130.076 127.36C131.129 126.739 131.939 125.834 132.506 124.646H140.12C139.31 127.724 137.703 130.154 135.3 131.936C132.897 133.691 130.008 134.569 126.633 134.569C123.879 134.569 121.409 133.961 119.222 132.746C117.062 131.504 115.374 129.79 114.159 127.603C112.944 125.416 112.336 122.918 112.336 120.11Z"
                  fill="#4269E1"
                />
              </g>
              <path
                d="M182.573 119.796C182.573 151.283 157.048 176.809 125.56 176.809C94.0726 176.809 68.5469 151.283 68.5469 119.796C68.5469 88.3084 94.0726 62.7827 125.56 62.7827C157.048 62.7827 182.573 88.3084 182.573 119.796ZM78.4791 119.796C78.4791 145.798 99.558 166.877 125.56 166.877C151.562 166.877 172.641 145.798 172.641 119.796C172.641 93.7938 151.562 72.715 125.56 72.715C99.558 72.715 78.4791 93.7938 78.4791 119.796Z"
                fill="white"
              />
              <path
                d="M199 119.866C199 160.459 166.093 193.366 125.5 193.366C84.9071 193.366 52 160.459 52 119.866C52 79.2735 84.9071 46.3665 125.5 46.3665C166.093 46.3665 199 79.2735 199 119.866ZM57.7411 119.866C57.7411 157.289 88.0778 187.625 125.5 187.625C162.922 187.625 193.259 157.289 193.259 119.866C193.259 82.4443 162.922 52.1076 125.5 52.1076C88.0778 52.1076 57.7411 82.4443 57.7411 119.866Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2161_5197"
                x="0"
                y="0.324951"
                width="277"
                height="287.083"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="12" dy="24" />
                <feGaussianBlur stdDeviation="24" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.117647 0 0 0 0 0.12549 0 0 0 0 0.141176 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2161_5197"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2161_5197"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_2161_5197">
                <rect
                  width="73.26"
                  height="73.26"
                  fill="white"
                  transform="translate(89.3633 79.6213)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-6 p-2">
            <div>
              <div className="bg-white rounded-[8px]">
                <div className="text-align-center mb-8 flex justify-end items-center pt-3">
                  <button className="w-10 h-10 bg-[rgba(66,105,225,1)] text-white rounded-[8px] text-align-center mb-8 flex justify-center items-center mx-2">
                    <img src="../../../Basket.svg" alt="An SVG of an eye" />
                  </button>
                  <button className="w-10 h-10 bg-[rgba(66,105,225,1)] text-white rounded-[8px] text-align-center mb-8 flex justify-center items-center mx-2">
                    <img src="../../../Tie.svg" alt="An SVG of an eye" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6 p-5">
                  <div>
                    <div className="w-3/5 ml-auto">
                      <Datepicker
                        options={options}
                        onChange={handleChange}
                        show={show}
                        setShow={handleClose}
                      />
                    </div>
                    <div className="w-full bg-[rgba(218,242,255,0.8)] h-28 my-2 rounded-[8px] flex items-center p-5 font-bold relative text-[#A8A8A8]">
                      <div>Admin</div>
                      <button className="w-10 h-10 bg-black text-white rounded-[8px] text-align-center mb-8 flex justify-center items-center mx-2 absolute top-2 right-2">
                        <img
                          src="../../../File_dock_search.svg"
                          alt="An SVG of an eye"
                        />
                      </button>
                    </div>

                    <div className="w-full bg-[rgba(218,242,255,0.8)] h-28 my-2 rounded-[8px] flex items-center p-5 font-bold relative text-[#A8A8A8]">
                      <div>Salesman</div>
                      <button className="w-10 h-10 bg-black text-white rounded-[8px] text-align-center mb-8 flex justify-center items-center mx-2 absolute top-2 right-2">
                        <img
                          src="../../../File_dock_search.svg"
                          alt="An SVG of an eye"
                        />
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="w-3/5 mr-auto">
                      <Datepicker
                        options={options}
                        onChange={handleChange}
                        show={show1}
                        setShow={handleClose1}
                      />
                    </div>

                    <div className="w-full bg-[rgba(218,242,255,0.8)] w-full h-28 my-2 rounded-[8px] inline-block flex items-center p-5 font-bold relative text-[#A8A8A8]">
                      <div>Profit[€] | month</div>
                      <button className="w-10 h-10 bg-black text-white rounded-[8px] text-align-center mb-8 flex justify-center items-center mx-2 absolute top-2 right-2">
                        <img
                          src="../../../File_dock_search.svg"
                          alt="An SVG of an eye"
                        />
                      </button>
                    </div>

                    <div className="w-full bg-[rgba(218,242,255,0.8)] w-full h-28 my-2 rounded-[8px] inline-block flex items-center p-5 font-bold relative text-[#A8A8A8]">
                      <div>Affiliate</div>
                      <button className="w-10 h-10 bg-black text-white rounded-[8px] text-align-center mb-8 flex justify-center items-center mx-2 absolute top-2 right-2">
                        <img
                          src="../../../File_dock_search.svg"
                          alt="An SVG of an eye"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-[8px] text-align-center mb-8 flex justify-between items-center px-5 py-7">
                <div className="w-full p-2 text-center border border-[#4269E1] rounded-[12px] shadow-md flex justify-center">
                  <div className="grid grid-cols-3 gap-6 p-2 w-full">
                    <div>
                      <div className="text-left font-bold text-2xl">
                        Surname
                      </div>
                      <div className="w-full bg-[#E6E5FF] py-2 my-5 pl-2 rounded-[8px] flex items-start  text-black">
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.625 7.18115V3.18115H15.625V7.18115M9.625 7.18115L7.625 19.1812L12.625 21.1812L17.625 19.1812L15.625 7.18115M9.625 7.18115H15.625"
                              stroke="#33363F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.125 12.6812H9.625"
                              stroke="#33363F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>

                        <div className="pl-2">25</div>
                      </div>
                      <div className="w-full bg-[#E6E5FF] py-2 my-5 pl-2 rounded-[8px] flex items-start  text-black">
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.625 14.3479V15.3479C3.625 17.557 5.41586 19.3479 7.625 19.3479V19.3479C9.28185 19.3479 10.625 18.0048 10.625 16.3479V15.3479C10.625 14.2433 11.5204 13.3479 12.625 13.3479V13.3479C13.7296 13.3479 14.625 14.2433 14.625 15.3479V16.3479C14.625 18.0048 15.9681 19.3479 17.625 19.3479V19.3479C19.8341 19.3479 21.625 17.557 21.625 15.3479V14.3479"
                              stroke="#33363F"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M14.625 14.3479H21.625L18.9499 6.32246C18.75 5.72289 18.2351 5.28292 17.6117 5.17902V5.17902C16.5717 5.00569 15.625 5.80768 15.625 6.86201V7.3479"
                              stroke="#33363F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.625 14.3479H3.625L6.30015 6.32246C6.5 5.72289 7.0149 5.28292 7.6383 5.17902V5.17902C8.67828 5.00569 9.625 5.80768 9.625 6.86201V7.3479"
                              stroke="#33363F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>

                        <div className="pl-2">5698</div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-left font-bold text-2xl">Name</div>
                      <div className="w-full bg-[#E6E5FF] py-2 my-5 pl-2 rounded-[8px] flex items-start  text-black">
                        <div className="pl-2">E-Mail Address</div>
                      </div>
                      <div className="w-full bg-[#E6E5FF] py-2 my-5 pl-2 rounded-[8px] flex items-start  text-black">
                        <div className="pl-2">+49 17641474606</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <img src="../../../Vector.svg" alt="An SVG of an eye" /> */}
              </div>

              {/* ===================== */}

              <div className="bg-white rounded-[8px] text-align-center mb-8 flex justify-between items-center px-5 py-7">
                <div className="w-full p-2 text-center border border-[#4269E1] rounded-[12px] shadow-md flex justify-center">
                  <div className="grid grid-cols-3 gap-6 p-2 w-full">
                    <div>
                      <div className="w-full bg-[#E6E5FF] py-2 my-2 pl-2 rounded-[8px] flex items-start  text-black">
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="3.625"
                              y="6.5"
                              width="18"
                              height="15"
                              rx="2"
                              stroke="#33363F"
                              strokeWidth="2"
                            />
                            <path
                              d="M3.625 10.5C3.625 8.61438 3.625 7.67157 4.21079 7.08579C4.79657 6.5 5.73938 6.5 7.625 6.5H17.625C19.5106 6.5 20.4534 6.5 21.0392 7.08579C21.625 7.67157 21.625 8.61438 21.625 10.5H3.625Z"
                              fill="#33363F"
                            />
                            <path
                              d="M7.625 3.5L7.625 6.5"
                              stroke="#33363F"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M17.625 3.5L17.625 6.5"
                              stroke="#33363F"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>

                        <div className="pl-2">15.06.2025</div>
                      </div>
                    </div>
                    <div>
                      <div className="w-full bg-[#E6E5FF] py-2 my-2 pl-2 rounded-[8px] flex items-start  text-black">
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.62501 7V7C3.62501 5.61929 4.7443 4.5 6.12501 4.5L19.9107 4.5C20.1102 4.5 20.21 4.5 20.2901 4.52806C20.4338 4.57831 20.5467 4.69124 20.5969 4.83486C20.625 4.91505 20.625 5.01479 20.625 5.21429V5.21429C20.625 6.41124 20.625 7.00972 20.4567 7.49084C20.1551 8.35258 19.4776 9.03011 18.6158 9.33165C18.1347 9.5 17.5362 9.5 16.3393 9.5L15.625 9.5M3.62501 7V7C3.62501 8.38071 4.74429 9.5 6.12501 9.5L19.625 9.5C20.5678 9.5 21.0392 9.5 21.3321 9.79289C21.625 10.0858 21.625 10.5572 21.625 11.5L21.625 13.5M3.62501 7L3.62501 17.5C3.62501 19.3856 3.62501 20.3284 4.21079 20.9142C4.79658 21.5 5.73939 21.5 7.62501 21.5L19.625 21.5C20.5678 21.5 21.0392 21.5 21.3321 21.2071C21.625 20.9142 21.625 20.4428 21.625 19.5L21.625 17.5M21.625 17.5H17.625C16.6822 17.5 16.2108 17.5 15.9179 17.2071C15.625 16.9142 15.625 16.4428 15.625 15.5V15.5C15.625 14.5572 15.625 14.0858 15.9179 13.7929C16.2108 13.5 16.6822 13.5 17.625 13.5H21.625M21.625 17.5L21.625 13.5"
                              stroke="#33363F"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>

                        <div className="pl-2">5698, 59 €</div>
                      </div>
                    </div>
                    <div>
                      <div className="w-full bg-[#E6E5FF] py-2 my-2 pl-2 rounded-[8px] flex items-start  text-black">
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.625 9.5L14.5808 14.0662C14.1549 14.7051 13.1978 14.6455 12.8544 13.9587L12.3956 13.0413C12.0522 12.3545 11.0951 12.2949 10.6692 12.9338L7.625 17.5"
                              stroke="#33363F"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x="3.625"
                              y="3.5"
                              width="18"
                              height="18"
                              rx="2"
                              stroke="#33363F"
                              strokeWidth="2"
                            />
                          </svg>
                        </span>

                        <div className="pl-2">5698</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <img src="../../../Vector.svg" alt="An SVG of an eye" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInfo;
