import React, { FC, HTMLProps, ReactNode } from "react";

interface PropsChildren extends HTMLProps<HTMLInputElement> {
  children: any & { sale_name: string; price: number };
}

interface PropsTb extends HTMLProps<HTMLInputElement> {
  tb: any & {
    construction: any & {
      street: string;
      city: string;
      country: string;
    };
    revenue: number;
    m_costs: number;
    e_costs: number;
    profit: number;
  };
}

const SalesChoose: FC<PropsChildren> = ({ children }) => {
  return (
    <div className="p-4 w-[300px] h-[100px] rounded-[24px] font-[500] bg-white drop-shadow-lg ">
      <div className="text-[20px]">{children.sale_name}</div>
      <div className="text-[#838282]">{children.price}</div>
    </div>
  );
};

const SalesTb: FC<PropsTb> = ({ tb }) => {
  return (
      <tr className="border-y-2 border-[#4269E1]">
        <td>
          <div>{tb.construction.street}</div>
          <div>{tb.construction.city}</div>
          <div>{tb.construction.country}</div>
        </td>
        <td>{tb.revenue}</td>
        <td>{tb.m_costs}</td>
        <td>{tb.e_costs}</td>
        <td>{tb.profit}</td>
      </tr>
  );
};

export { SalesChoose, SalesTb };
