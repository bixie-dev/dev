/* eslint-disable */
import { useState } from "react";
import { useRouter } from "next/router";
// import Link from "next/link";

const Login = () => {
  const [flag, setFlag] = useState(true);
  const router = useRouter();
  return (
    <div className="loginContainer">
      <div className="flex flex-col justify-center items-center login-inner-box">
        <div className="w-[100px]  xs:w-[120px] sm:w-[140px] md:w-[140px] lg:w-[140px] xl:w-[140px]">
          <img src={"/assets/images/logo.png"} alt="logo page" />
        </div>

        <div className="text-[28px] font-bold pb-2 xs:text-[30px] sm:text-[36px] md:text-[36px] lg:text-[36px] xl:text-[36px]">Welcome</div>        
        <div className="text-[12.5px] xs:text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] text-[#636B75] text-center pb-6"> 
          <div>Manage your Employee</div>
        </div>

        <div className="w-[300px] xs:w-[450px] sm:w-[600px] md:w-[600px] lg:w-[600px] xl:w-[600px]">
          <div className="">
            <div className="pb-12">
              <input
                type="text"
                className="w-full h-[60px] rounded-[16px] text-[14px] pl-6  shadow-xl placeholder:text-slate-400 block bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Your E-Mail"
              ></input>
            </div>
            <div className="pb-2">
              <input
                type="text"
                className="w-full h-[60px] rounded-[16px] text-[14px] pl-6 shadow-xl placeholder:text-slate-400 block bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Your Password"
              ></input>
            </div>
          </div>
          <button
            className="w-full text-black font-[600] text-[14px] pb-20 text-right"
            onClick={() => {
              setFlag(!flag);
              router.push("/superadmin/forgetpassword/");
            }}
          >
            Forget Passwort?
          </button>
          <div className="pb-4">
            <button
              className="bg-[#4269E1] w-full h-[60px] text-[#FFFFFF] rounded-[12px] text-[16px] font-[500]"
              onClick={() => {
                router.push("/superadmin/twofa/");
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
