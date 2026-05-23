import { IoMdCheckboxOutline } from "react-icons/io";
function Title() {
  return (
    <div className="flex items-center gap-[12px]">
      <div className="w-[40px] h-[40px] pt-[10px] pb-[14px] rounded-[24px] bg-[#A855F71A] flex justify-center items-center">
        <IoMdCheckboxOutline className="w-[20px] h-[20px] text-[#A855F7]" />
      </div>
      <div>
        <h1 className="font-bold text-[18px] text-[#FAFAFA] ">
          Aura Tasks (Web)
        </h1>
        <p className=" font-normal text-[12px] text-[#A1A1AA]">
          Simple, beautiful task management
        </p>
      </div>
    </div>
  );
}

export default Title;
