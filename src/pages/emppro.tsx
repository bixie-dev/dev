/* eslint-disable */
import { useState } from "react";
import { Overview, EmpTb } from "../components/Emppro";
import Datepicker from "tailwind-datepicker-react";

const Emppro = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
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

  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const handleChange1 = (selectedDate: Date) => {
    console.log(selectedDate);
  };

  const handleClose1 = (state: boolean) => {
    setShow1(state);
  };

  return (
    <div>
      <div className="mx-12 my-8">
        <button>
          <svg
            className="h-8 w-8 text-black"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>
      </div>
      <div className="flex mx-12 my-8">
        <div className="mr-12 grid gap-4">
          <div className="px-12 py-8 w-[350px] h-[450px] bg-white rounded-[16px] shadow-lg">
            <div className="flex justify-between mb-2">
              <button>
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.4258 13.2119C25.4258 9.44068 25.4258 7.55506 24.2542 6.38349C23.0826 5.21191 21.197 5.21191 17.4258 5.21191H13.4258C9.65454 5.21191 7.76893 5.21191 6.59735 6.38349C5.42578 7.55506 5.42578 9.44068 5.42578 13.2119V23.2119C5.42578 24.1547 5.42578 24.6261 5.71867 24.919C6.01157 25.2119 6.48297 25.2119 7.42578 25.2119H17.4258C21.197 25.2119 23.0826 25.2119 24.2542 24.0403C25.4258 22.8688 25.4258 20.9832 25.4258 17.2119V13.2119Z"
                    stroke="#4269E1"
                    strokeWidth="2"
                  />
                  <path
                    d="M11.6758 12.7119L19.1758 12.7119"
                    stroke="#4269E1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6758 17.7119H15.4258"
                    stroke="#4269E1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.06326 23.9367L6.41608 23.5839L6.06326 23.9367C6.27267 24.1461 6.53373 24.1497 6.68846 24.1345C6.82901 24.1208 6.99637 24.0789 7.15307 24.0396C7.16199 24.0374 7.17088 24.0352 7.17972 24.033L10.8338 23.1194C10.849 23.1156 10.864 23.1119 10.8789 23.1082C11.1016 23.0528 11.2988 23.0037 11.4778 22.9023C11.6568 22.801 11.8004 22.6571 11.9625 22.4947C11.9733 22.4838 11.9842 22.4729 11.9953 22.4618L21.4393 13.0178L21.4393 13.0178L21.4589 12.9982L21.4626 12.9945C21.776 12.6811 22.0461 12.4111 22.2333 12.1657C22.4339 11.9028 22.5858 11.6104 22.5858 11.25C22.5858 10.8896 22.4339 10.5972 22.2333 10.3343C22.0461 10.0889 21.7761 9.81891 21.4626 9.5055L21.4393 9.48223L20.5178 8.56066L20.4945 8.53739C20.1811 8.22395 19.9111 7.95388 19.6657 7.7667C19.4028 7.5661 19.1104 7.41421 18.75 7.41421C18.3896 7.41421 18.0972 7.5661 17.8343 7.7667C17.5889 7.95388 17.3189 8.22395 17.0055 8.53738L16.9822 8.56066L17.3358 8.91421L16.9822 8.56066L7.53816 18.0047C7.52714 18.0158 7.51619 18.0267 7.50533 18.0375C7.34286 18.1996 7.19903 18.3432 7.09766 18.5222C6.9963 18.7012 6.94723 18.8984 6.89179 19.1211C6.88809 19.136 6.88435 19.151 6.88057 19.1662L5.96704 22.8203C5.96483 22.8291 5.9626 22.838 5.96036 22.847C5.92112 23.0037 5.87921 23.171 5.86546 23.3115C5.85032 23.4663 5.85385 23.7273 6.06326 23.9367Z"
                    stroke="#4269E1"
                  />
                  <path
                    d="M15.625 9.375L19.375 6.875L23.125 10.625L20.625 14.375L15.625 9.375Z"
                    fill="#4269E1"
                  />
                </svg>
              </button>
            </div>
            <Overview
              children={{
                per_name: "David David",
                job_title: "Maurer",
                mobile_num: "0176 41474 606",
                personal_num: "0007",
                dri_lic: "Ja",
                work_qul: 90,
                address: "Bruchhausenerstraße 36,59759 Arnsberg, Deutschland",
              }}
            />
          </div>
          <div className="w-[350px] h-[70px] px-4 bg-white rounded-[16px] shadow-lg flex justify-center items-center">
            <div className="w-full flex justify-between font-[700]">
              <div>Pünktlichkeit</div>
              <div className="flex gap-1">
                <div className="text-[#FF0000]">3</div>
                <div>von</div>
                <div className="text-[#4269E1]">20</div>
              </div>
            </div>
          </div>
          <div className="w-[350px] h-[70px] px-4 bg-white rounded-[16px] shadow-lg flex justify-center items-center">
            <div className="w-full flex justify-between font-[700]">
              <div>Abwesende Tage</div>
              <div className="flex gap-1">
                <div className="text-[#FF0000]">3</div>
                <div>von</div>
                <div className="text-[#4269E1]">20</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex gap-4 mb-12 justify-between">
            <div className="flex gap-4">
              <div className="w-[300px] flex justify-center items-center">
                <Datepicker
                  options={options}
                  onChange={handleChange}
                  show={show}
                  setShow={handleClose}
                />
              </div>
              <div className="w-[300px] flex justify-center items-center">
                <Datepicker
                  options={options}
                  onChange={handleChange1}
                  show={show1}
                  setShow={handleClose1}
                />
              </div>
            </div>
            <div>
              <button className="bg-black w-[50px] h-[50px] rounded-[12px] flex justify-center items-center">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 37 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="33.1111"
                    cy="20.5"
                    rx="3.11111"
                    ry="3.5"
                    fill="white"
                  />
                  <ellipse
                    cx="12.1111"
                    cy="19.5"
                    rx="3.11111"
                    ry="3.5"
                    fill="white"
                  />
                  <path
                    d="M33 21.25V32C33 34.7614 30.7614 37 28 37H18.3C13.05 37 12 33.4 12 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 17C20.7572 17 22.9784 10.6338 22.9998 4.23667C23 4.17929 22.9673 4.12691 22.9157 4.10179L18.6 2"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 17C4.03727 17 2.01876 10.6312 2.00013 4.23269C1.99997 4.1774 2.03042 4.12656 2.07917 4.10045L6 2"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full h-[530px] bg-white rounded-[16px] shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="grid grid-cols-8 p-4 border-b-2 border-gray-500">
                  <th>Datum</th>
                  <th className="col-span-4">Bauvorhaben</th>
                  <th>Gesamt</th>
                  <th>Aktiv</th>
                  <th>Inaktiv</th>
                </tr>
              </thead>
              <tbody>
                <EmpTb
                  tb={{
                    date: new Date(),
                    construction:
                      "Bruchhausenerstraße 36, 59759 Arnsberg. Germany",
                    total_num: 5,
                    active_num: 5,
                    inactive_num: 5,
                  }}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emppro;
