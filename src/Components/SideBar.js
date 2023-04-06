import React from "react";
import { AiOutlineHome, AiOutlineLike } from "react-icons/ai";
import { VscHistory } from "react-icons/vsc";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useSelector } from "react-redux";
import {
  MdSubscriptions,
  MdAppShortcut,
  MdOutlineLibraryAddCheck,
  MdOutlineVideoSettings,
  MdOutlineWatchLater,
} from "react-icons/md";

const SideBar = () => {

    const store=useSelector(store => store.Slide.IsSlideOpen)
    // console.log(store)

    if(!store) return null;
  return (
    <>
      <div className="w-56 m-2">
        <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
          <AiOutlineHome className="text-5xl p-3 ml-2" />
          <li className="p-3 font-bold">Home</li>
        </ol>
        <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
          <MdAppShortcut className="text-5xl p-3 ml-2" />
          <li className="p-3 font-bold">Shorts</li>
        </ol>
        <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
          <MdSubscriptions className="text-5xl p-3 ml-2" />
          <li className="p-3 font-bold">Subscription</li>
        </ol>

        <hr className="w-56 text-gray-600 font-bold h-4" />

        <div className="w-56 ">
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
            <MdOutlineLibraryAddCheck className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">Library</li>
          </ol>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
            <VscHistory className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">Shorts</li>
          </ol>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
            <MdOutlineVideoSettings className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">Videos</li>
          </ol>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
            <MdOutlineWatchLater className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">Watch Later</li>
          </ol>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
            <AiOutlineLike className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">Liked Videos</li>
          </ol>

          <hr className="w-56 text-gray-900 font-bold h-4" />
        </div>
        <div className="w-56 ">
        <h1 className="p-3 font-bold ml-2 text-lg">Subscriptions</h1>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
            <HiOutlineUserCircle className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">CodeWithHarry</li>
          </ol>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
          <HiOutlineUserCircle className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">Thapa Technical</li>
          </ol>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
          <HiOutlineUserCircle className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">FreeCodeCamp</li>
          </ol>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
          <HiOutlineUserCircle className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">Payal Gamming</li>
          </ol>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
          <HiOutlineUserCircle className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">Namaste React</li>
          </ol>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
          <HiOutlineUserCircle className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">Technical Suneja</li>
          </ol>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
          <HiOutlineUserCircle className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">DSA</li>
          </ol>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
          <HiOutlineUserCircle className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">JavaScript Mastery</li>
          </ol>
          <ol className="flex hover:bg-slate-300 rounded-xl cursor-pointer">
          <HiOutlineUserCircle className="text-5xl p-3 ml-2" />
            <li className="p-3 font-bold">React Course</li>
          </ol>

          <hr className="w-56 text-gray-900 font-bold h-4" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
