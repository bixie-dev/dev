/* eslint-disable */
import React, { FC, HTMLProps, ReactNode } from "react";


interface PropsRoleTb extends HTMLProps<HTMLInputElement> {
  tb: ReactNode & { role: string, num: number };
}
interface PropsRoleDs extends HTMLProps<HTMLInputElement> {
  children: ReactNode;
}


const RoleTb: FC<PropsRoleTb> = ({ tb }) => {
  return (
    <>
      <tr className="">
        <td className="">{tb.role}</td>
        <td className="text-center">{tb.num}</td>
        <td className="">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#4269E1" />
            <circle cx="20" cy="20" r="4" fill="white" />
            <path d="M29 20C29 20 28 12 20 12C12 12 11 20 11 20" stroke="white" stroke-width="2" />
          </svg>
        </td>
        <td className="">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#B9B9B9" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2028 18.796L26.9988 17C27.544 16.4548 27.8167 16.1821 27.9624 15.888C28.2397 15.3285 28.2397 14.6715 27.9624 14.112C27.8167 13.8179 27.544 13.5453 26.9988 13C26.4535 12.4548 26.1809 12.1821 25.8868 12.0364C25.3273 11.7591 24.6703 11.7591 24.1108 12.0364C23.8167 12.1821 23.544 12.4548 22.9988 13L21.1801 14.8187C22.144 16.4693 23.5301 17.8448 25.2028 18.796ZM19.7257 16.2731L12.8552 23.1436C12.4301 23.5687 12.2176 23.7812 12.0778 24.0423C11.9381 24.3034 11.8792 24.5981 11.7613 25.1876L11.1459 28.2646C11.0794 28.5972 11.0461 28.7635 11.1407 28.8581C11.2353 28.9527 11.4016 28.9194 11.7342 28.8529L14.8112 28.2375C15.4007 28.1196 15.6954 28.0607 15.9565 27.9209C16.2176 27.7812 16.4301 27.5687 16.8552 27.1436L23.7446 20.2542C22.1229 19.2386 20.7512 17.8763 19.7257 16.2731Z" fill="#F2F5FA" />
          </svg>
        </td>
        <td className="">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#E14242" />
            <path d="M18 23L18 20" stroke="white" stroke-width="2" stroke-linecap="round" />
            <path d="M22 23L22 20" stroke="white" stroke-width="2" stroke-linecap="round" />
            <path d="M11 15H29V15C28.0681 15 27.6022 15 27.2346 15.1522C26.7446 15.3552 26.3552 15.7446 26.1522 16.2346C26 16.6022 26 17.0681 26 18V24C26 25.8856 26 26.8284 25.4142 27.4142C24.8284 28 23.8856 28 22 28H18C16.1144 28 15.1716 28 14.5858 27.4142C14 26.8284 14 25.8856 14 24V18C14 17.0681 14 16.6022 13.8478 16.2346C13.6448 15.7446 13.2554 15.3552 12.7654 15.1522C12.3978 15 11.9319 15 11 15V15Z" stroke="white" stroke-width="2" stroke-linecap="round" />
            <path d="M18.0681 11.3706C18.1821 11.2643 18.4332 11.1703 18.7825 11.1033C19.1318 11.0363 19.5597 11 20 11C20.4403 11 20.8682 11.0363 21.2175 11.1033C21.5668 11.1703 21.8179 11.2643 21.9319 11.3706" stroke="white" stroke-width="2" stroke-linecap="round" />
          </svg>
        </td>
      </tr>
    </>
  )
}

const RoleDs: FC<PropsRoleDs> = ({ children }) => {
  return (
    <div className="flex justify-between">
      <div>{children}</div>
      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
}

export { RoleTb, RoleDs };