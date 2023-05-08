import React from "react";

const ToggleTab = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex">
        <div className="w-[300px] sm:w-[360px] md:w-[540px] lg:w-[720px] h-[40px] md:h-[60px] lg:h-[60px] rounded-[10px] bg-[#EFF3F8] shadow-xl flex justify-center">
          <div
            className="flex items-center grid-3 justify-between"
            role="tablist"
          >
            <div className="last:mr-0 text-center">
              <a
                className={`p-2 text-[12px] w-[98px] sm:w-[118px] md:w-[178px] lg:w-[238px] h-[32px] md:h-[52px] lg:h-[52px] md:text-[20px] rounded-[12px] block leading-normal font-[600] ${
                  openTab === 1
                    ? "text-[#4269E1] bg-white shadow-lg"
                    : "text-[#838D95]"
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
            </div>
            <div className=" last:mr-0 flex-auto text-center">
              <a
                className={`p-2 text-[12px] w-[98px] sm:w-[118px] md:w-[178px] lg:w-[238px] h-[32px] md:h-[52px] lg:h-[52px] md:text-[20px] rounded-[12px] block leading-normal font-[600] ${
                  openTab === 2
                    ? "text-[#4269E1] bg-white shadow-lg"
                    : "text-[#838D95]"
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
            </div>
            <div className=" last:mr-0 flex-auto text-center">
              <a
                className={`p-2 text-[12px] w-[98px] sm:w-[118px] md:w-[178px] lg:w-[238px] h-[32px] md:h-[52px] lg:h-[52px] md:text-[20px] rounded-[12px] block leading-normal font-[600] ${
                  openTab === 3
                    ? "text-[#4269E1] bg-white shadow-lg"
                    : "text-[#838D95]"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleTab;
