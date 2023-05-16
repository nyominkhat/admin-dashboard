import React from "react";
import { RiNotification3Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <section className="flex text-[#191919] items-center justify-between w-full h-full p-4 px-10 shadow">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <div className="flex items-center justify-between w-1/5">
        <figure
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#191919] text-slate-300 cursor-pointer relative
        min-h-[2rem] min-w-[2rem]"
        >
          <RiNotification3Line size={20} />
        </figure>

        <article className="flex items-center w-3/4 gap-3 cursor-pointer">
          <figure className="w-10 h-10 min-h-[2.5rem] min-w-[2.5rem] rounded-full">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://picsum.photos/id/237/200/300"
            />
          </figure>

          <p className="flex-1 overflow-hidden font-medium truncate">
            Developer
          </p>
        </article>
      </div>
    </section>
  );
}
