import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { BsPerson, BsCameraVideo, BsTelephone } from "react-icons/bs";

const Message = () => {
  return (
    <div className="bg-[#F9F9F9] w-full px-10 py-6">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-xl">Messages</p>
        <div className="capitalize px-4 py-[6px] bg-[#0A208B] rounded-md text-white flex gap-2 items-center font-semibold cursor-pointer">
          <AiOutlinePlus size={20} />
          new chat
        </div>
      </div>
      <div className="bg-white rounded-lg mt-6">
        <div className="flex">
          <div className="w-[35%] border-r">
            <div className="py-5 px-6 flex justify-between items-center border-b ">
              <div className="flex gap-2">
                <div className="w-24 py-2 rounded-md text-[#0A208B] bg-[#E7E9F4] font-bold text-center cursor-pointer">
                  Inbox
                </div>
                <div className="w-24 py-2 rounded-md text-[#0A208B] bg-[#E7E9F4] font-bold text-center cursor-pointer">
                  Groups
                </div>
              </div>
              <BiSearchAlt size={26} className="cursor-pointer" />
            </div>
            <div className="flex justify-between items-center px-6 py-3 ">
              <p className="text-[14px] text-[#666666] cursor-pointer">New</p>
              <p className="text-[#0A208B] font-semibold cursor-pointer">
                Mark all as read
              </p>
            </div>
            <div className=" pb-5 ">
              <div className="flex gap-2 items-center px-5 py-3 bg-slate-300 cursor-pointer">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing-crossed-arms_158538-4979.jpg"
                    alt="avatar"
                    className="w-8 h-8 rounded-lg"
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold text-lg leading-5">
                    Richard Nelson
                  </p>
                  <div className="w-full flex justify-between">
                    <p className="text-[#666666] text-sm">
                      Hello, How are you my friend, how ar...
                    </p>
                    <p className="font-semibold text-sm text-gray-600">1h</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center px-5 py-3 cursor-pointer">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing-crossed-arms_158538-4979.jpg"
                    alt="avatar"
                    className="w-8 h-8 rounded-lg"
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold text-lg leading-5">
                    Richard Nelson
                  </p>
                  <div className="w-full flex justify-between">
                    <p className="text-[#666666] text-sm">
                      Hello, How are you my friend, how ar...
                    </p>
                    <p className="font-semibold text-sm text-gray-600">1h</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center px-5 py-3 cursor-pointer">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing-crossed-arms_158538-4979.jpg"
                    alt="avatar"
                    className="w-8 h-8 rounded-lg"
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold text-lg leading-5">
                    Richard Nelson
                  </p>
                  <div className="w-full flex justify-between">
                    <p className="text-[#666666] text-sm">
                      Hello, How are you my friend, how ar...
                    </p>
                    <p className="font-semibold text-sm text-gray-600">1h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-6 py-3 cursor-pointer">
              <p className="text-[14px] text-[#666666]">Older</p>
            </div>
            <div className=" pb-10">
              <div className="flex gap-2 items-center px-5 py-3 cursor-pointer">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing-crossed-arms_158538-4979.jpg"
                    alt="avatar"
                    className="w-8 h-8 rounded-lg"
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold text-lg leading-5">
                    Richard Nelson
                  </p>
                  <div className="w-full flex justify-between">
                    <p className="text-[#666666] text-sm">
                      Hello, How are you my friend, how ar...
                    </p>
                    <p className="font-semibold text-sm text-gray-600">1h</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center px-5 py-3 cursor-pointer">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing-crossed-arms_158538-4979.jpg"
                    alt="avatar"
                    className="w-8 h-8 rounded-lg"
                  />
                </div>
                <div className="w-full">
                  <p className="font-semibold text-lg leading-5">
                    Richard Nelson
                  </p>
                  <div className="w-full flex justify-between">
                    <p className="text-[#666666] text-sm">
                      Hello, How are you my friend, how ar...
                    </p>
                    <p className="font-semibold text-sm text-gray-600">1h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65%]">
            <div className="flex justify-between px-6 py-5 border-b">
              <div className="flex gap-2 items-center">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing-crossed-arms_158538-4979.jpg"
                    alt="avatar"
                    className="w-10 h-10 rounded-lg"
                  />
                </div>
                <p className="text-lg font-semibold">Richard Nelson</p>
                <IoIosArrowDown />
              </div>
              <div className="flex items-center gap-5">
                <BsPerson size={22} className="cursor-pointer" />
                <BsCameraVideo size={22} className="cursor-pointer" />
                <BsTelephone size={22} className="cursor-pointer" />
              </div>
            </div>
            <div className="px-6 pt-3">
              <div className="flex gap-2">
                <div className="">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing-crossed-arms_158538-4979.jpg"
                    alt="avatar"
                    className="w-8 h-8 rounded-lg"
                  />
                </div>
                <div>
                  <div className="flex mb-4">
                    <p className="font-semibold text-md leading-5 ml-1">
                      Richard
                    </p>
                    <RxDotFilled />
                    <p className="text-gray-500 text-[12px]">11:30 pm</p>
                  </div>
                  <div className="bg-[#F2F4F9] py-[6px] px-2 my-1 rounded-lg w-fit">
                    Hello
                  </div>
                  <div className="bg-[#F2F4F9] py-[6px] px-2 my-1 rounded-lg w-fit">
                    How are you?
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="flex flex-col items-end">
                  <div className="flex mb-4 flex-row-reverse">
                    <p className="font-semibold text-md leading-5 ml-1">me</p>
                    <RxDotFilled />
                    <p className="text-gray-500 text-[12px] ">11:30 pm</p>
                  </div>
                  <div className="bg-[#F2F4F9] py-[6px] px-2 my-1 rounded-lg w-fit items-end">
                    Hello
                  </div>
                  <div className="bg-[#F2F4F9] py-[6px] px-2 my-1 rounded-lg w-fit">
                    I am fine.
                  </div>
                  <div className="bg-[#F2F4F9] py-[6px] px-2 my-1 rounded-lg w-fit">
                    you? and what are you doing now?
                  </div>
                </div>
              </div>
              <div class="flex items-center">
                <div class="flex-grow h-px bg-gray-300"></div>
                <div class="px-3 text-gray-500 text-[10px]">Today</div>
                <div class="flex-grow h-px bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
