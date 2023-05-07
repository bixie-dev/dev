import React from "react";

const ToggleTab = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full w-[800px] h-[60px] rounded-[10px] bg-[#EFF3F8] border-2 border-[#4269E1]">
          <ul className="h-full flex flex-row items-center" role="tablist">
            <li className="last:mr-0 flex-auto text-center">
              <a
                className={`py-2 text-[22px] rounded-[12px] block leading-normal font-[600] ${
                  openTab === 1 ? "text-[#4269E1] bg-white" : "text-[#838D95]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href=""
                role="tablist"
              >
                Beschwerden
              </a>
            </li>
            <li className=" last:mr-0 flex-auto text-center">
              <a
                className={`py-2 text-[22px] rounded-[12px] block leading-normal font-[600] ${
                  openTab === 2 ? "text-[#4269E1] bg-white" : "text-[#838D95]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href=""
                role="tablist"
              >
                Fragen
              </a>
            </li>
            <li className=" last:mr-0 flex-auto text-center">
              <a
                className={`py-2 text-[22px] rounded-[12px] block leading-normal font-[600] ${
                  openTab === 3 ? "text-[#4269E1] bg-white" : "text-[#838D95]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href=""
                role="tablist"
              >
                Verbesserungen
              </a>
            </li>
          </ul>
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "block" : "hidden"}
                  id="link1"
                ></div>
                <div
                  className={openTab === 2 ? "block" : "hidden"}
                  id="link2"
                ></div>
                <div
                  className={openTab === 3 ? "block" : "hidden"}
                  id="link3"
                ></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ToggleTab;
