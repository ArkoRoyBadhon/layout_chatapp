import { FiSearch } from "react-icons/fi";
import { PiRocket } from "react-icons/pi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsBell } from "react-icons/bs";

const Header = () => {
  return (
    <div style={{
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)"
    }} className="px-10 flex justify-between items-center py-5">
      <div className="flex gap-5 items-center">
        <div className="font-semibold text-[20px] flex gap-14 items-center cursor-pointer">
          <p>1 Social Club</p>
          <BiDotsHorizontalRounded />
        </div>
        <div className="flex items-center gap-4 bg-[#F9F9F9] py-2 px-3 rounded-md">
          <FiSearch />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent"
          />
        </div>
      </div>
      <div className="flex sm:gap-5 md:gap-10 items-center">
        <div className="bg-[#FFD800] cursor-pointer px-3 py-[4px] rounded-md flex items-center gap-2 font-semibold text-[14px]">
          <PiRocket />
          <p>Getting started - 0%</p>
        </div>
        <BsBell className="text-xl cursor-pointer"/>
        <div className="cursor-pointer">
            <img src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing-crossed-arms_158538-4979.jpg" alt="avatar" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
