/* eslint-disable */

import Logo from "../logo/logo";
import { RoleTb } from "../components/Roll";
import { RoleDs } from "../components/Roll";

const Roll = () => {
  return (
    <div className="p-4 mx-8">
      <div className="pl-4">
        <Logo />
      </div>
      <div className="flex grid-cols-2 gap-24 px-24 h-[550px]">
        <div className="p-8 w-full h-full rounded-[24px] bg-white drop-shadow-lg">
          <table className="w-full">
            <tr className="text-[20px] text-left">
              <th>Rollenbezeichnung</th>
              <th className="text-center">Anzahl</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <RoleTb tb={{ role: "Vorarbeiter", num: 3 }} />
          </table>
        </div>
        <div className="p-8 w-full h-full rounded-[24px] bg-white drop-shadow-lg flex flex-col items-center">
          <div className="w-[70%] h-[10%] mb-8 border-2 border-[#4269E1] rounded-[12px] justify-center font-[500] text-[20px] flex items-center">
            Rollenbezeichnung
          </div>
          <div className="w-[70%] mb-12 grid gap-6">
            
          <RoleDs children={"Funktion 1"}/>
          <RoleDs children={"Funktion 1"}/>
          <RoleDs children={"Funktion 1"}/>
          <RoleDs children={"Funktion 1"}/>
          <RoleDs children={"Funktion 1"}/>
          <RoleDs children={"Funktion 1"}/>
          </div>
            <button className="w-[70%] h-[10%] bg-[#4269E1] text-white rounded-[12px]">Hinzufügen</button>
        </div>
      </div>
    </div>
  );
};

export default Roll;
