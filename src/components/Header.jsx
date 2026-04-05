import React, { useState } from "react";
import HeaderItem from "./HeaderItem";
import logo1 from "../assets/images/disney--1.svg";
import user_login from "../assets/images/user_login.jpg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";

function Header() {
  const [toggle, settoggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center gap-8 justify-between p-5">
      <div className="flex gap-8 items-center">
           <img
              src={logo1}
              alt="StarGlass logo"
              className="w-20 md:w-[7.18rem] object-cover"
           />
        <div className="hidden md:flex gap-8">
              {menu.map((item) => (
                <HeaderItem name={item.name} Icon={item.icon} />
                ))}
        </div>
        <div className=" md:hidden flex gap-5 z-25">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />,
          )}
          <div className="md:hidden" onClick={() => settoggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-black border border-grey-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    ),
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src={user_login}
        alt="user login image"
        className="w-10 rounded-full"
      />
    </div>
  );
}

export default Header;
