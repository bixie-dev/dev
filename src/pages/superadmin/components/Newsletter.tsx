import React, { FC, HTMLProps, ReactNode } from "react";

interface PropsNewsItem extends HTMLProps<HTMLInputElement> {
  children: ReactNode;
}

const NewsItem: FC<PropsNewsItem> = ({ children }) => {
  return (
    <div className="w-full rounded-[28px] border-none shadow-lg px-8 py-4 placeholder:text-slate-400 block bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1    ">
      <div className="flex justify-end pb-2">
        <div className=" w-40 lg:w-[200px] bg-[#E6E5FF] py-2 px-2 rounded-[8px]  text-right flex items-center  text-black">
          <span>
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2111 2.67582H17.2159V0.60791H15.2256V2.67582H5.27376V0.60791H3.28339V2.67582H2.28821C1.19351 2.67582 0.297852 3.60638 0.297852 4.74373V21.287C0.297852 22.4243 1.19351 23.3549 2.28821 23.3549H18.2111C19.3058 23.3549 20.2015 22.4243 20.2015 21.287V4.74373C20.2015 3.60638 19.3058 2.67582 18.2111 2.67582ZM18.2111 21.287H2.28821V9.9135H18.2111V21.287ZM18.2111 7.84559H2.28821V4.74373H18.2111V7.84559Z"
                fill="#0E0F11"
              />
            </svg>
          </span>
          <div className="pl-3 text-[12px] md:text-[14px] lg:text-[16px]">
            Do. 23. Juni 14:00
          </div>
        </div>
      </div>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export { NewsItem };
