import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PiKeyReturnBold } from "react-icons/pi";
import { nanoid } from "nanoid";

interface TaskType {
  text: string;
  id: string;
  completed: boolean;
}
interface Props {
  tasks: TaskType[];
  setTasks: (arr: TaskType[]) => void;
}
function Input({ tasks, setTasks }: Props) {
  const [taskText, setTaskText] = useState("");

  function addTask(): void {
    if (taskText !== "") {
      const newTask: TaskType = {
        text: taskText,
        id: nanoid(),
        completed: false,
      };
      const updatedTasks: TaskType[] = [...tasks, newTask];

      setTasks(updatedTasks);
      setTaskText("");
    }

    console.log(taskText);
  }

  return (
    <>
      <div className="flex gap-[10px]">
        <div className="relative w-[356px]">
          <FaPlus
            className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
          />

          <input
            type="text"
            placeholder="Write a task item..."
            value={taskText}
            onChange={(e) => {
              setTaskText(e.target.value);
              console.log(taskText);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            className="
          w-full
          h-[46px]
          rounded-[24px]
          bg-[#18181B]
          border
          border-[#27272A]
          text-white
          pl-12
          pr-12
          outline-none
          focus:border-[#A855F7]
        "
          />

          <PiKeyReturnBold
            className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-gray-400
          cursor-pointer
        "
          />
        </div>
        <button
          onClick={() => {
            addTask();
          }}
          className="w-[67.45px] h-[46.28px] rounded-[24px] bg-[#A855F7] py-[13px] px-[20px] text-[14px] font-bold text-white cursor-pointer"
        >
          Add
        </button>
      </div>
    </>
  );
}

export default Input;
