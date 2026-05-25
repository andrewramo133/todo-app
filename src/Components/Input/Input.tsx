import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PiKeyReturnBold } from "react-icons/pi";
import Task from "../Task/Task";
import { nanoid } from "nanoid";

interface taskType {
  text: string;
  id: string;
  completed: boolean;
}
interface Props {
  tasks: taskType[];
  setTasks: (arr: taskType[]) => void;
}
function Input({ tasks, setTasks }: Props) {
  const [taskText, setTaskText] = useState("");

  function addTask(): void {
    if (taskText !== "") {
      const newTask: taskType = {
        text: taskText,
        id: nanoid(),
        completed: false,
      };
      const updatedTasks: taskType[] = [...tasks, newTask];

      setTasks(updatedTasks);
      setTaskText("");
    }

    console.log(taskText);
  }

  function deleteTask(id: string): void {
    const newTasks: taskType[] = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }
  function toggleTask(id: string): void {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
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
      <div className="flex flex-col gap-[16px]">
        {tasks &&
          tasks.map((taskItem) => (
            <Task
              key={taskItem.id}
              task={taskItem}
              deleteFun={deleteTask}
              check={toggleTask}
            />
          ))}
      </div>
    </>
  );
}

export default Input;
