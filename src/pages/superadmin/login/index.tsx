/* eslint-disable */
import { useState } from 'react';

const Login = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div className="loginContainer">
      <div className="flex flex-col justify-center items-center login-inner-box">
        <div className="w-[140px] h-[140px]">
          <img src={"/assets/images/logo.png"} alt="" />
        </div>

        <div className="text-[36px] font-bold pb-2">Welcome</div>
        <div className="text-[16px] text-[#636B75] text-center pb-6">
          <div>Manage your Employee</div>
        </div>
        <div className="">
          <div className="pb-12">
            <input
              type="text"
              className="w-[600px] h-[60px] rounded-[16px] text-[14px] pl-6  shadow-xl placeholder:text-slate-400 block bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="Your E-Mail"
            ></input>
          </div>
          <div className="pb-2">
            <input
              type="text"
              className="w-[600px] h-[60px] rounded-[16px] text-[14px] pl-6 shadow-xl placeholder:text-slate-400 block bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="Your Password"
            ></input>
          </div>
        </div>
        <button
          className="w-[600px] text-black font-[600] text-[14px] pb-20 text-right"
          onClick={() => {
            setFlag(!flag);
          }}
        >
          Forget Passwort?
        </button>
        <div className="pb-4">
          <button className="bg-[#4269E1] w-[600px] h-[60px] text-[#FFFFFF] rounded-[12px] text-[16px] font-[500]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
