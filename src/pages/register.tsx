/* eslint-disable */
const Register = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center py-12">
        <div className="text-[36px] font-bold mt-10 pb-12">Registriere dich!</div>
        <div className="grid gap-4 pb-12">
          <div className="flex w-[700px] justify-between">
            <input
              type="text"
              className=" w-[330px] h-[60px] rounded-[16px] text-[16px] pl-3 left placeholder:text-slate-400 block bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="Nachname"
            />
            <input
              type="text"
              className="w-[330px] h-[60px] rounded-[16px] text-[16px] pl-3 justify-end placeholder:text-slate-400 block bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="Vonname"
            />
          </div>
          <input
            type="text"
            className="w-[700px] h-[60px] rounded-[16px] text-[16px] pl-3 placeholder:text-slate-400 block bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
            placeholder="Firmenname"
          />
          <input
            type="text"
            className="w-[700px] h-[60px] rounded-[16px] text-[16px] pl-3 placeholder:text-slate-400 block bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
            placeholder="Email"
          />
          <input
            type="text"
            className="w-[700px] h-[60px] rounded-[16px] text-[16px] pl-3 placeholder:text-slate-400 block bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
            placeholder="Passwort"
          />
          <input
            type="text"
            className="w-[700px] h-[60px] rounded-[16px] text-[16px] pl-3 placeholder:text-slate-400 block bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
            placeholder="Passwort wiederholen"
          />
        </div>
        <div className="flex w-[700px] justify-between pb-4">
          <button className="bg-[#FFFFFF] w-[330px] h-[50px] text-[#0E0F11] rounded-[12px] text-[16px] font-[500] border-[#7D7AFF] border-2">Allg. Geschäftsbedingung</button>
          <button className="bg-[#FFFFFF] w-[330px] h-[50px] text-[#0E0F11] rounded-[12px] text-[16px] font-[500]">Datenschutz</button>
        </div>
        <div className="pb-4">
          <button className="bg-[#7D7AFF] w-[700px] h-[60px] text-[#FFFFFF] rounded-[12px] text-[16px] font-[500]">
            Jetzt Registrierien
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
