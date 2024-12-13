import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject(props) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function clickHandler() {
    // console.log(title.current.value);
    // console.log(description.current.value);
    // console.log(dueDate.current.value);

    if (
      title.current.value.trim().length === 0 ||
      description.current.value.trim().length === 0 ||
      dueDate.current.value.trim().length === 0
    ) {
      modal.current.open();
    } else {
      props.onAddProject({
        title: title.current.value,
        description: description.current.value,
        dueDate: dueDate.current.value,
      });
    }
  }
  return (
    <>
      <Modal ref={modal}>
        <h2>Invalid Input</h2>
        <p>Please enter valid title and description</p>
        <p>Please enter the three fields</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={clickHandler}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          {/* <label>Title</label>
        <input></input>
        <label>Description</label>
        <textarea></textarea>
        <label>Due Date</label>
        <input></input> */}
          <Input ref={title} type="text" title="Title" isTextArea={false} />
          <Input
            ref={description}
            type="text"
            title="Description"
            isTextArea={true}
          />
          {/* <Input title="Description" isTextArea /> */}
          <Input
            ref={dueDate}
            type="date"
            title="Due Date"
            isTextArea={false}
          />
        </div>
      </div>
    </>
  );
}

export default NewProject;
