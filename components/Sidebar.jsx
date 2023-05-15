"use client";

import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { MdSpaceDashboard, MdChat } from "react-icons/md";
import { RiAccountBoxFill, RiSettingsLine } from "react-icons/ri";
import { BsCalendarDate, BsSearch, BsBarChartFill } from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";

const menus = [
  { title: "Dashboard", icon: <MdSpaceDashboard size={28} />, path: "/" },
  { title: "Inbox", icon: <MdChat size={28} />, path: "/inbox" },
  {
    title: "Accounts",
    icon: <RiAccountBoxFill size={28} />,
    gap: true,
    path: "/accounts",
  },
  { title: "Schedule ", icon: <BsCalendarDate size={26} />, path: "/schedule" },
  { title: "Search", icon: <BsSearch size={25} />, path: "/search" },
  {
    title: "Analytics",
    icon: <BsBarChartFill size={25} />,
    path: "/analytics",
  },
  {
    title: "Files ",
    icon: <AiOutlineFolderOpen size={28} />,
    gap: true,
    path: "/file",
  },
  { title: "Setting", icon: <RiSettingsLine size={28} />, path: "/setting" },
];

//  ${
//               asPath === menu.path && "border"
//             }

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section
      className={`${
        openMenu ? "w-72" : "w-20"
      } bg-[#191919] text-slate-300 h-screen p-5 pt-8 relative duration-300`}
    >
      {/*  */}
      <div className="flex items-center w-full overflow-hidden gap-x-3">
        <figure
          className={`duration-500 min-w-[2.5rem] min-h-[2.5rem] ${
            !openMenu && "rotate-[360deg]"
          } `}
        >
          <img className="w-full h-full" src="./images/logo.png" />
        </figure>

        <h1
          className={`origin-left font-medium text-xl duration-200 ${
            !openMenu && "scale-0"
          }`}
        >
          DevDashboard
        </h1>
      </div>

      {/* link items */}
      <ul className={`flex flex-col mt-16 ${!openMenu && "items-center"}`}>
        {menus.map((menu, index) => (
          <li
            key={menu.title + index}
            className={`flex items-center p-2 gap-4 rounded-md cursor-pointer ${
              !openMenu && "justify-center"
            } ${menu.gap ? "mt-9" : "mt-2"} 
              ${menu.path === "/" && "bg-slate-600"}
            `}
          >
            <figure className="text-slate-100">{menu.icon}</figure>
            <p
              className={`${
                !openMenu && "hidden"
              } origin-left duration-1000  text-slate-100`}
            >
              {menu.title}
            </p>
          </li>
        ))}
      </ul>

      {/* menu open btn */}
      <figure
        onClick={handleOpenMenu}
        className={`absolute top-9 -right-4 shadow-md hover:shadow-xl hover:scale-110 cursor-pointer border border-white bg-white rounded-full w-8 h-8 flex items-center justify-center duration-200 text-[#191919] ${
          !openMenu && "rotate-180"
        } `}
      >
        <FaAngleLeft size={20} />
      </figure>
    </section>
  );
}
