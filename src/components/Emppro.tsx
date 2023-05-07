import React, { FC, HTMLProps, ReactNode } from "react";

interface PropsPro extends HTMLProps<HTMLInputElement> {
  children: any & {
    per_name: string;
    job_title: string;
    mobile_num: string;
    personal_num: string;
    dri_lic: string;
    work_qul: number;
    address: string;
  };
}
interface PropsTb extends HTMLProps<HTMLInputElement> {
  tb: any & {
    date: Date;
    construction: string;
    total_num: number;
    active_num: number;
    inactive_num: number;
  };
}

const Overview: FC<PropsPro> = ({ children }) => {
  return (
    <div className="grid gap-1">
      <div>
        <div className="text-[20px] font-[500]">{children.per_name}</div>
      </div>
      <div>
        <div className="text-[14px] text-gray-500">Berufsbezeichnung</div>
        <div>{children.job_title}</div>
      </div>
      <div>
        <div className="text-[14px] text-gray-500">Handynummer</div>
        <div>{children.mobile_num}</div>
      </div>
      <div>
        <div className="text-[14px] text-gray-500">Personennummer</div>
        <div>{children.personal_num}</div>
      </div>
      <div>
        <div className="text-[14px] text-gray-500">Führerschein</div>
        <div>{children.dri_lic}</div>
      </div>
      <div>
        <div className="text-[14px] text-gray-500">Arbeitsqualität</div>
        <div>{children.work_qul}%</div>
      </div>
      <div>
        <div className="text-[14px] text-gray-500">Adresse</div>
        <div>{children.address}</div>
      </div>
    </div>
  );
};

const EmpTb: FC<PropsTb> = ({ tb }) => {
  return (
    <>
      <tr className="grid grid-cols-8 text-center">
        <td className="bg-gray-200 p-4">{tb.date.toLocaleDateString()}</td>
        <td className="col-span-4 bg-gray-200 p-4">{tb.construction}</td>
        <td className="bg-[#4269E1]/[.35] p-4">{tb.total_num}</td>
        <td className="bg-[#49C61E]/[.35] p-4">{tb.active_num}</td>
        <td className="bg-[#FF0000]/[.35] p-4">{tb.inactive_num}</td>
      </tr>
    </>
  );
};

export { Overview, EmpTb };
