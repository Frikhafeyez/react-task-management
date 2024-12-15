import React, { useRef } from "react";
import Button from "./Button";

function NewTask({ onAdd }) {
  const textTask = useRef();
  return (
    <div className="flex gap-2">
      <input
        ref={textTask}
        className="w-3/5 p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
      <Button
        onClick={() => {
          if (textTask.current.value.trim().length === 0) return;
          onAdd(textTask.current.value);
          textTask.current.value = "";
        }}
      >
        Add
      </Button>
    </div>
  );
}

export default NewTask;
