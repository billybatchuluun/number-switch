import React from "react";

export const CountWindow = (props) => {
  return (
    <div className="flex w-10 h-10 bg-slate-800 justify-center text-white">
      <p className="flex items-center ">{props.count}</p>
    </div>
  );
};
