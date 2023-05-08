import { useState, ChangeEvent } from "react";

const TwoFA = () => {
  const [digits, setDigits] = useState<string[]>(["", "", "", "", "", ""]);

  const handleDigitChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);
  };

  return (
    <div className="loginContainer">
      <div className="flex flex-col justify-center items-center login-inner-box">
        <div>
          <div className="text-[28px] text-center font-bold pb-2 xs:text-[30px] sm:text-[36px] md:text-[36px] lg:text-[36px] xl:text-[36px] mt-2 leading-8">
            A last step to
            <br />
            login
          </div>

          <div className="text-[12.5px] xs:text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] text-[#636B75] text-center pb-12">
            <div>
              You got a E-Mail with a 5 Digit number. <br /> Please confirm it.
            </div>
          </div>
          <div>
            <div className=" flex justify-center items-center w-[250px] xs:w-[250px] sm:w-[350px] md:w-[350px] lg:w-[350px] xl:w-[350px] gap-2 sm:gap-2 md:gap-4 lg:gap-4">
              {digits.map((digit, index) => (
                <input
                  className="w-[45px] xs:w-[45px] sm:w-[60px] md:w-[60px] lg:w-[60px] xl:w-[60px] h-[45px] xs:h-[45px] sm:h-[60px] md:h-[60px] lg:h-[60px] xl:h-[60px] text-[28px] xs:text-[28px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] rounded-[10px] xs:rounded-[12px] sm:rounded-[16px] md:rounded-[16px] lg:rounded-[16px] xl:rounded-[16px] text-center placeholder:text-slate-400 block bg-white shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  key={index}
                  type="text"
                  maxLength={1}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={digit}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleDigitChange(index, e.target.value)
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="pb-4 mt-[220px]">
          <button className="bg-[#4269E1] w-[300px] xs:w-[450px] sm:w-[600px] md:w-[600px] lg:w-[600px] xl:w-[600px] h-[60px] text-[#FFFFFF] rounded-[12px] text-[16px] font-[500]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoFA;
