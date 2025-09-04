import React from "react";

export default function Bai5() {
  return (
    <div>
      <div className="relative border-20 border-sky-200 w-[200px] h-[200px] rounded-[10px] bg-sky-500 ">
        <p className="absolute top-5 left-5 text-blue-900 font-bold">Relative parent</p>
        <div className="absolute bottom-0 left-0 bg-blue-500 w-[100px] h-[40px] text-center items-center flex items-center justify-center rounded-[10px] text-white font-bold">
          <p>Absolute child</p>
        </div>
      </div>
    </div>
  );
}
