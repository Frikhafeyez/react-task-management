import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ title, isTextArea, ...props }, ref) {
  console.log(ref);
  const cl =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm text-stone-500 font-bold uppercase">
        {title}
      </label>
      {isTextArea ? (
        <textarea ref={ref} className={cl} {...props}></textarea>
      ) : (
        <input ref={ref} className={cl} {...props}></input>
      )}
    </p>
  );
});

export default Input;
