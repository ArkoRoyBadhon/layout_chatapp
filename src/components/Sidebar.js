import { useState } from "react";
import { TiMessages } from "react-icons/ti";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const [active, setActive] = useState(2);
  const [activeOpen, setActiveOpen] = useState(1);

  console.log(activeOpen);

  return (
    <div className="bg-white w-72 px-10 py-2">
      <div className="">
        <div
          className={`flex items-center gap-5  font-semibold text-[16px] px-3 py-2 rounded-md cursor-pointer ${
            active === 1
              ? "bg-[#0A208B] text-white"
              : "hover:bg-slate-100 text-[#666666]"
          } `}
          onClick={() => setActive(1)}
        >
          <TiMessages size={20} />
          <p className="">Feed</p>
        </div>
        <div
          className={`flex cursor-pointer items-center gap-5  font-semibold text-[16px] px-3 py-2 rounded-md ${
            active === 2
              ? "bg-[#0A208B] text-white"
              : "hover:bg-slate-100 text-[#666666]"
          } `}
          onClick={() => setActive(2)}
        >
          <TiMessages size={20} />
          <p className="">Messages</p>
        </div>
        <div
          className={`flex cursor-pointer items-center gap-5  font-semibold text-[16px] px-3 py-2 rounded-md ${
            active === 3
              ? "bg-[#0A208B] text-white"
              : "hover:bg-slate-100 text-[#666666]"
          } `}
          onClick={() => setActive(3)}
        >
          <TiMessages size={20} />
          <p className="">Members</p>
        </div>
        <div
          className={`flex cursor-pointer items-center gap-5 font-semibold text-[16px] px-3 py-2 rounded-md ${
            active === 4
              ? "bg-[#0A208B] text-white"
              : "hover:bg-slate-100 text-[#666666]"
          } `}
          onClick={() => setActive(4)}
        >
          <TiMessages size={20} />
          <p className="">Shop</p>
        </div>
      </div>
      <div className="mt-10">
        <div
          className={`flex cursor-pointer items-center justify-between  px-3 py-2 rounded-md mb-5 ${
            active === 5
              ? "bg-[#0A208B] text-white"
              : "hover:bg-[#F2F4F9] text-[#666666]"
          } `}
          onClick={() => setActive(5)}
        >
          <p className="font-semibold ">Collection</p>
          <div className="bg-[#F2F4F9] p-1">
            <AiOutlinePlus className="text-[#3E4868]" />
          </div>
        </div>
        <div className="">
          <div
            className={`flex  cursor-pointer ${active === 6 ? "bg-[#0A208B] text-white" : "hover:bg-[#F2F4F9] text-[#666666]"} items-center justify-between pl-4 pr-3 py-2 rounded-md`}
            onClick={() => {
              setActive(6);
              setActiveOpen(1);
            }}
          >
            <p className="text-[14px] font-semibold ">Collection name one</p>
            <div className="">
              <IoIosArrowForward className="" />
            </div>
          </div>
          {activeOpen === 1 ? (
            <div className="">
              <div className={`text-[#666666] cursor-pointer items-center justify-between pl-4 pr-3 py-2 rounded-md ${active === 7 ? "bg-[#0A208B] text-white" : "hover:bg-[#F2F4F9] text-[#666666]"}`} onClick={()=> setActive(7)}>
                <div className={`border-l-[3px] ${active===7 ? "border-white" : "border-[#0A208B]" } pl-5`}>
                  <p className="text-[14px] leading-3 font-semibold">
                    Room name one
                  </p>
                  <small className="text-[12px] leading-3">Public</small>
                </div>
              </div>
              <div className={`text-[#666666] cursor-pointer items-center justify-between pl-4 pr-3 py-2 rounded-md ${active === 8 ? "bg-[#0A208B] text-white" : "hover:bg-[#F2F4F9] text-[#666666]"}`} onClick={()=> setActive(8)}>
                <div className={`border-l-[3px] ${active===8 ? "border-white" : "border-[#0A208B]" } pl-5`}>
                  <p className="text-[14px] leading-3 font-semibold">
                    Room name one
                  </p>
                  <small className="text-[12px] leading-3">Public</small>
                </div>
              </div>
              <div className={`cursor-pointer text-[#666666] items-center justify-between pl-4 pr-3 py-2 rounded-md ${active === 9 ? "bg-[#0A208B] text-white" : "hover:bg-[#F2F4F9] text-[#666666]"}`} onClick={()=> setActive(9)}>
                <div className={`border-l-[3px] ${active===9 ? "border-white" : "border-[#0A208B]" } pl-5`}>
                  <p className="text-[14px] leading-3 font-semibold">
                    Room name one
                  </p>
                  <small className="text-[12px] leading-3">Public</small>
                </div>
              </div>
             

            </div>
          ):""}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
// hover:bg-[#0A208B]
