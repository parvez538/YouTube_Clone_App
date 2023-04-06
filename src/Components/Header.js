import React from "react";
import { BsSearch, BsMicFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { OnClickSlide } from "../Slices/SlideSlice";



const Header = () => {

    const dispatch=useDispatch();

    const changeSlide=()=>{
        dispatch(OnClickSlide())
   
      

    }

  return (
    <div className="grid grid-flow-col">
      <div className="flex ">
        <AiOutlineMenu onClick={()=> changeSlide()} className="text-5xl p-2 m-2 cursor-pointer" />
        <img
          className="h-[70px] grid-cols-3 cursor-pointer"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6F9Cyvi4uEYUfbsfNHod5E-rnv-RXhCIgEA&usqp=CAU"
        />
      </div>

      <div className="grid-cols-6 flex mt-2">
        <input
          className="bg-gray-300 w-2/3 h-12 rounded rounded-l-full p-4 text-xl"
          placeholder="Search"
          type="text"
        />
        <BsSearch className="bg-slate-200 text-5xl p-3 rounded rounded-r-full cursor-pointer" />
        <BsMicFill className="text-5xl p-3  bg-slate-100 ml-3 rounded-full cursor-pointer" />
      </div>
      <div className="grid-cols-3  flex justify-end ">
        <img
          className="h-14  mt-2 mr-3"
          alt="userIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2fmKVxObx6S1S87K3_FwX35IIwAPqgGs0A&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Header;
