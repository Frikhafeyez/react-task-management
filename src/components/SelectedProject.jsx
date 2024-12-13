import React from "react";
import Button from "./Button";

function SelectedProject(props) {
  const formattedDate = new Date(props.project.dueDate).toLocaleDateString(
    "fr-FR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  return (
    <div className="w-2/3 mt-16">
      <header className="pb-4 mb)4 border-b-2 border-stone-300">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-stone-600 mb-2">
            {props.project.title}
          </h1>
          <Button>Delete</Button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="mb-4 text-stone-600 whitespace-pre-wrap">
          {props.project.description}
        </p>
      </header>
      TASKS
    </div>
  );
}

export default SelectedProject;
