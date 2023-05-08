/* eslint-disable */
const ForgetPassword = () => {
  return (
    <div className="loginContainer">
      <div className="flex flex-col items-center max-w-500 login-inner-box">
        <div className="text-[24px] xs:text-[30px] sm:text-[36px] md:text-[36px] lg:text-[36px] xl:text-[36px] font-bold mt-2 pb-2 ">
          Forgot Password?
        </div>
        <div className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] text-[#636B75] text-center pb-12">
          <div>
            Enter your E-Mail. We will send you a E-Mail,
            <br /> where you can reset it.
          </div>
        </div>
        <div className="w-[300px] xs:w-[450px] sm:w-[600px] md:w-[600px] lg:w-[600px] xl:w-[600px]">
          <div className="mb-64">
            <input
              type="email"
              className="w-full h-[60px] rounded-[16px] text-[16px] pl-6 placeholder:text-slate-400 block bg-white border border-slate-300 shadow-xl focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="Email address..."
            />
          </div>

          <div className="pb-4">
            <button className="bg-[#4269E1] w-full h-[60px] text-[#FFFFFF] rounded-[12px] text-[16px] font-[500]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
