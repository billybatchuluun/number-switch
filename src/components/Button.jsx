import React from "react";

export const Button = (props) => {
  return (
    <div
      className={`flex w-10 h-10 bg-slate-400 justify-center text-white ${props.bg}`}
      onClick={props.function}
    >
      <p className="flex items-center ">{props.text}</p>
    </div>
  );
};
