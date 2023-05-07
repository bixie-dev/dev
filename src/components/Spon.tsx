/* eslint-disable */
import React, { FC, HTMLProps, ReactNode } from "react";

interface PropsChildren extends HTMLProps<HTMLInputElement> {
  children: ReactNode;
}
interface PropsTb extends HTMLProps<HTMLInputElement> {
  tb: ReactNode & { street: string, city: string, country: string, first_name: string, last_name: string };
}


const SponLocation: FC<PropsChildren> = ({ children }) => {
  return (
    <>
      <div className="font-[500] text-[12px] p-2 border border-[#4269E1] rounded-[8px] shadow-md flex grid grid-cols-9 items-center">
        <span className="col-span-7 pl-4">{children}</span>
        <span className="col-span-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="37" height="37" rx="10" fill="#4269E1" />
            <path
              d="M18.398 23.804L18.8585 24.6917L18.8585 24.6917L18.398 23.804ZM17.602 23.804L17.1415 24.6917L17.1415 24.6917L17.602 23.804ZM24 15C24 17.1458 22.9079 18.9159 21.545 20.2906C20.183 21.6644 18.6342 22.555 17.9376 22.9163L18.8585 24.6917C19.6448 24.2838 21.397 23.2805 22.9653 21.6987C24.5326 20.1178 26 17.8706 26 15H24ZM18 9C21.3137 9 24 11.6863 24 15H26C26 10.5817 22.4183 7 18 7V9ZM12 15C12 11.6863 14.6863 9 18 9V7C13.5817 7 10 10.5817 10 15H12ZM18.0624 22.9163C17.3658 22.555 15.817 21.6644 14.455 20.2906C13.0921 18.9159 12 17.1458 12 15H10C10 17.8706 11.4674 20.1178 13.0347 21.6987C14.603 23.2805 16.3552 24.2838 17.1415 24.6917L18.0624 22.9163ZM17.9376 22.9163C17.9514 22.9091 17.9733 22.9023 18 22.9023C18.0267 22.9023 18.0486 22.9091 18.0624 22.9163L17.1415 24.6917C17.6831 24.9726 18.3169 24.9726 18.8585 24.6917L17.9376 22.9163ZM20 15C20 16.1046 19.1046 17 18 17V19C20.2091 19 22 17.2091 22 15H20ZM18 13C19.1046 13 20 13.8954 20 15H22C22 12.7909 20.2091 11 18 11V13ZM16 15C16 13.8954 16.8954 13 18 13V11C15.7909 11 14 12.7909 14 15H16ZM18 17C16.8954 17 16 16.1046 16 15H14C14 17.2091 15.7909 19 18 19V17Z"
              fill="white"
            />
            <path
              d="M25.7942 23.5C26.5841 23.9561 27 24.4734 27 25C27 25.5266 26.5841 26.0439 25.7942 26.5C25.0043 26.9561 23.8682 27.3348 22.5 27.5981C21.1318 27.8614 19.5798 28 18 28C16.4202 28 14.8682 27.8614 13.5 27.5981C12.1318 27.3348 10.9957 26.9561 10.2058 26.5C9.41586 26.0439 9 25.5266 9 25C9 24.4734 9.41586 23.9561 10.2058 23.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="col-span-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="37" height="37" rx="10" fill="#49C61E" />
            <path
              d="M10.9289 25.0711C12.3275 26.4696 14.1093 27.422 16.0491 27.8079C17.9889 28.1937 19.9996 27.9957 21.8268 27.2388C23.6541 26.4819 25.2159 25.2002 26.3147 23.5557C27.4135 21.9112 28 19.9778 28 18C28 16.0222 27.4135 14.0888 26.3147 12.4443C25.2159 10.7998 23.6541 9.51808 21.8268 8.76121C19.9996 8.00433 17.9889 7.8063 16.0491 8.19215C14.1093 8.578 12.3275 9.53041 10.9289 10.9289"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M21 18L21.7809 17.3753L22.2806 18L21.7809 18.6247L21 18ZM9 19C8.44771 19 8 18.5523 8 18C8 17.4477 8.44771 17 9 17V19ZM17.7809 12.3753L21.7809 17.3753L20.2191 18.6247L16.2191 13.6247L17.7809 12.3753ZM21.7809 18.6247L17.7809 23.6247L16.2191 22.3753L20.2191 17.3753L21.7809 18.6247ZM21 19H9V17H21V19Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </>
  )
};

const SponTableBody: FC<PropsTb> = ({ tb }) => {
  return (
    <>
      <tr className="">
        <td className="border-t-2 border-[#000000]">
          <div>{tb.street}</div>
          <div>{tb.city}</div>
          <div>{tb.country}</div>
        </td>
        <td className="border-t-2 border-[#000000]">{tb.first_name}</td>
        <td className="border-t-2 border-[#000000]">{tb.last_name}</td>
        <td className="pl-4">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 26.25C17.6027 26.25 20.125 25.3475 22.1369 23.6964C24.1489 22.0452 25.5261 19.7475 26.0338 17.1948C26.5416 14.642 26.1485 11.9922 24.9216 9.69679C23.6947 7.40137 21.7098 5.60238 19.3052 4.60636C16.9006 3.61033 14.225 3.47888 11.7343 4.23442C9.24363 4.98996 7.09198 6.58573 5.64597 8.74983C4.19996 10.9139 3.54906 13.5125 3.80417 16.1027C4.05928 18.6929 5.20463 21.1145 7.04505 22.9549" stroke="#42E165" stroke-width="2" stroke-linecap="round" />
            <path d="M20 12.5L15.152 18.3175C14.4965 19.1042 14.1687 19.4976 13.7281 19.5176C13.2875 19.5375 12.9255 19.1755 12.2014 18.4514L10 16.25" stroke="#42E165" stroke-width="2" stroke-linecap="round" />
          </svg>
        </td>
      </tr>
    </>
  )
}

export { SponLocation, SponTableBody };