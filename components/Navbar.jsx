import React from "react";
import { RiNotification3Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <section className="flex text-[#191919] items-center justify-between w-full h-full p-4 px-10 border">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <div className="flex items-center justify-between w-1/5">
        <figure className="flex items-center justify-center w-8 h-8 rounded-full bg-[#191919] text-slate-300 cursor-pointer relative">
          <RiNotification3Line size={20} />

          <figure className="absolute flex items-center justify-center w-6 h-6 text-xs rounded-full bg-slate-500 text-slate-50 -right-3 -top-3">
            99
          </figure>
        </figure>

        <article v className="flex items-center w-3/4 gap-3 cursor-pointer">
          <figure className="w-10 h-10 rounded-full">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://picsum.photos/id/237/200/300"
            />
          </figure>

          <p className="flex-1 overflow-hidden font-medium truncate">
            Developer Nyo
          </p>
        </article>
      </div>
    </section>
  );
}
