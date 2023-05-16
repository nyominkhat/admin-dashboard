import React from "react";
import ReactPaginate from "react-paginate";

export default function Paginate({ handlePageClick, pageCount }) {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex w-fit justify-center items-center p-4 mt-3 text-sm gap-2"
        pageLinkClassName="py-2 px-3 rounded-md font-semibold bg-[#191919] text-slate-300 hover:bg-[#313131] duration-200 shadow"
        previousLinkClassName="uppercase py-2 px-3 rounded-md font-semibold bg-[#191919] text-slate-300 hover:bg-[#313131] duration-200 shadow flex items-center justify-center"
        nextLinkClassName="uppercase py-2 px-3 rounded-md font-semibold bg-[#191919] text-slate-300 hover:bg-[#313131] duration-200 shadow flex items-center justify-center"
        activeLinkClassName="bg-slate-200 text-[#0c0c0c] hover:text-slate-300"
      />
    </>
  );
}
