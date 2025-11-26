import React from "react";
interface InfoTabProps {
    src: string;
    text: string;
}

 const InfoTab:React.FC<InfoTabProps> = ({src , text }) => {
  return (
    <div className=" flex items-center justify-start w-auto md:w-auto md:justify-center md:mx-auto bg-[#161618] text-white px-4 py-2.5 gap-2  rounded-full z-10">
      <img src={src} alt="" className="w-3 h-3" />
      <h3 className="md:text-sm text-xs">{text}</h3>
    </div>
  );
}

export default InfoTab
