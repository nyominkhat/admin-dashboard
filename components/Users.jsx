import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FaEdit, FaTrash } from "react-icons/fa";

import { recent_req_data } from "@/data";
import Paginate from "./Paginate";

export default function Users() {
  const [data, setData] = useState([]);
  const [usersPerPage, setUsersPerPage] = useState(8);

  useEffect(() => {
    setData(recent_req_data);
  }, []);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + usersPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / usersPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * usersPerPage) % data.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full ">
        <h2 className="text-xl font-bold text-[#191919]">Users</h2>

        <div className="absolute flex items-center gap-4 right-1 lg:gap-10">
          <div className="flex items-center px-4 pr-2 py-1.5 rounded-md shadow-md bg-slate-50">
            <label htmlFor="search" className="cursor-pointer">
              <BsSearch size={15} color="#191919" />
            </label>
            <input
              type="text"
              id="search"
              className="px-2 font-medium outline-none bg-slate-50"
            />
          </div>

          <button className="px-4 py-2 font-semibold text-sm rounded-md text-slate-300 bg-[#191919]">
            View All
          </button>
        </div>
      </div>

      <table className="w-full px-5 mt-4 border-separate border-spacing-y-3">
        <thead>
          <tr>
            <th className="p-2 text-start text-slate-600">User</th>
            <th className="p-2 text-start text-slate-600">Phone</th>
            <th className="p-2 text-start text-slate-600">Email</th>
            <th className="p-2 text-start text-slate-600">Action</th>
          </tr>
        </thead>
        <tbody className="border border-slate-500">
          {currentItems.map((item, index) => (
            <tr
              className="transition-all duration-300 rounded-md hover:shadow-md"
              key={item.id}
            >
              <td className="relative flex items-center gap-5 p-2 cursor-pointer text-start">
                <span className="absolute -left-5 font-medium text-[#191919]">
                  {item.id}.
                </span>
                <img
                  className="object-cover rounded-full max-w-[2.5rem] max-h-[2.5rem]"
                  src={item.customer.img}
                  alt=""
                />
                <p className="overflow-hidden font-medium truncate text-[#191919]">
                  {item.customer.name}
                </p>
              </td>
              <td className="p-2 text-start text-[#191919] overflow-hidden font-medium truncate">
                {item.phone_no}
              </td>
              <td className="p-2 text-start text-[#191919] overflow-hidden font-medium truncate">
                {item.email}
              </td>
              <td className="flex items-center gap-4 p-2 overflow-hidden font-medium text-start text-slate-300">
                <button className="p-2 rounded-lg bg-[#191919] hover:bg-[#313131] hover:text-slate-100 duration-100 flex items-center justify-center">
                  <FaEdit size={13} />
                </button>

                <button className="p-2 rounded-lg bg-[#191919] hover:bg-[#313131] hover:text-slate-100 duration-100 flex items-center justify-center">
                  <FaTrash size={13} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
    </>
  );
}
