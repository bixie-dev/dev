/* eslint-disable */
import React, { FC, HTMLProps, ReactNode } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  children: ReactNode & { data: string };
  data: string
}

const InputText: FC<Props> = ({ data, ...props }) => {
  return (
    <>
      <input {...props}
        type="text"
        className="pl-3 placeholder:text-slate-400 block bg-white w-full border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        placeholder={data}
      />
    </>
  )
};

export default InputText;