/* eslint-disable */
import React, { FC, HTMLProps, ReactNode } from "react";

interface PropsCount extends HTMLProps<HTMLInputElement> {
  children: ReactNode & { item: string; count: number };
}

interface PropsLoc extends HTMLProps<HTMLInputElement> {
  children: ReactNode & { count: number };
}

const DashCount: FC<PropsCount> = ({ children, ...props }) => {
  return (
    <div className="p-4 w-[250px] h-[100px] rounded-[16px] font-[500] bg-white drop-shadow-lg flex flex-col items-center">
      <div className="text-[20px] mb-2 flex">{children.item}</div>
      <div className="justify-end w-[120px] flex rounded-lg" {...props}>
        <button className="py-1 px-3  text-white">{children.count}</button>
      </div>
    </div>
  );
};

const DashLoc: FC<PropsLoc> = ({ children }) => {
  return (
    <div className="p-4 w-[350px] h-[120px] rounded-[16px] bg-white drop-shadow-lg">
      <div className="flex justify-between">
        <div className="w-[70px] rounded-[6px] text-right text-[12px] py-1 px-3 bg-[#7D7AFF] text-white flex items-center justify-between">
          <div>
            <svg
              width="10"
              height="10"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="9.5013"
                cy="9.50008"
                r="7.33333"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M13.0625 9.50008H9.75C9.61193 9.50008 9.5 9.38815 9.5 9.25008V6.72925"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>{children.count}</div>
        </div>
        <div className="flex gap-1">
          <div>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="28" rx="5.73" fill="#4269E1" />
              <circle
                cx="14.0013"
                cy="15.0001"
                r="2.33333"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M21.5 15C21.5 15 20.6667 8.33333 14 8.33333C7.33333 8.33333 6.5 15 6.5 15"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="28" rx="5.73" fill="black" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.4578 12.8743L19.8321 11.4999C20.0666 11.2654 20.1839 11.1482 20.2683 11.036C20.8044 10.3238 20.8044 9.34278 20.2683 8.63057C20.1839 8.51836 20.0666 8.40111 19.8321 8.16661C19.5976 7.93211 19.4804 7.81485 19.3682 7.73041C18.656 7.19436 17.675 7.19436 16.9628 7.73041C16.8506 7.81485 16.7333 7.9321 16.4988 8.16658L16.4988 8.16661L15.1052 9.56023C15.9021 10.9405 17.0588 12.0883 18.4578 12.8743ZM13.6506 11.0148L8.18851 16.4769C7.76345 16.902 7.55092 17.1145 7.41118 17.3756C7.27145 17.6367 7.2125 17.9314 7.09461 18.5209L6.64588 20.7645C6.57936 21.0971 6.5461 21.2634 6.64071 21.358C6.73532 21.4526 6.90162 21.4194 7.23423 21.3529L9.47788 20.9041C10.0673 20.7862 10.3621 20.7273 10.6232 20.5876C10.8843 20.4478 11.0968 20.2353 11.5218 19.8102L16.9994 14.3327C15.6516 13.4819 14.5094 12.3475 13.6506 11.0148Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="font-[500] py-2">
        <div>Street + Housenumber</div>
        <div>Zipcode + Location</div>
      </div>
    </div>
  );
};

export { DashCount, DashLoc };
