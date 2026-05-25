import { FaRegTrashCan } from "react-icons/fa6";
import Task from "../Task/Task";
import { useState } from "react";

interface TaskType {
  text: string;
  id: string;
  completed: boolean;
}
interface Props {
  tasks: TaskType[];
  setTasks: (arr: TaskType[]) => void;
}

type StatusType = "All" | "Active" | "Completed";
function TaskList({ tasks, setTasks }: Props) {
  const [status, setStatus] = useState<StatusType>("All");
  function deleteTask(id: string): void {
    const newTasks: TaskType[] = tasks.filter((task) => task.id !== id);

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
    <div className="flex flex-col gap-[16px]">
      <div className="w-[434px]  border-b pb-[8px] border-[#27272A66] flex justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setStatus("All")}
            className={
              status === "All"
                ? "  px-5 py-2.5  rounded-xl bg-[#A855F71A] text-[#A855F7]  text-sm font-bold  border border-[#A855F733]cursor-pointer transition-all"
                : " px-5  py-2.5 rounded-xl  bg-[#18181B]   text-[#A1A1AA]   text-sm  font-bold  border  border-[#27272A] hover:border-[#A855F755] hover:text-white transition-all cursor-pointer"
            }
          >
            All
          </button>

          <button
            onClick={() => setStatus("Active")}
            className={
              status === "Active"
                ? "  px-5 py-2.5  rounded-xl bg-[#A855F71A] text-[#A855F7]  text-sm font-bold  border border-[#A855F733]cursor-pointer transition-all"
                : " px-5  py-2.5 rounded-xl  bg-[#18181B]   text-[#A1A1AA]   text-sm  font-bold  border  border-[#27272A] hover:border-[#A855F755] hover:text-white transition-all cursor-pointer"
            }
          >
            Active
          </button>

          <button
            onClick={() => {
              setStatus("Completed");
            }}
            className={
              status === "Completed"
                ? "  px-5 py-2.5  rounded-xl bg-[#A855F71A] text-[#A855F7]  text-sm font-bold  border border-[#A855F733]cursor-pointer transition-all"
                : " px-5  py-2.5 rounded-xl  bg-[#18181B]   text-[#A1A1AA]   text-sm  font-bold  border  border-[#27272A] hover:border-[#A855F755] hover:text-white transition-all cursor-pointer"
            }
          >
            Completed
          </button>
        </div>
        <button className="text-white cursor-pointer">
          {" "}
          <div
            onClick={() => {
              setTasks([]);
              setStatus("All");
            }}
            className=" flex items-center gap-2"
          >
            {" "}
            clear <FaRegTrashCan />
          </div>
        </button>
      </div>

      {status === "All" &&
        tasks.map((taskItem) => (
          <Task
            key={taskItem.id}
            task={taskItem}
            deleteFun={deleteTask}
            check={toggleTask}
          />
        ))}
      {status === "Active" &&
        tasks
          .filter((taskitem) => !taskitem.completed)
          .map((taskItem) => (
            <Task
              key={taskItem.id}
              task={taskItem}
              deleteFun={deleteTask}
              check={toggleTask}
            />
          ))}
      {status === "Completed" &&
        tasks
          .filter((taskitem) => taskitem.completed)
          .map((taskItem) => (
            <Task
              key={taskItem.id}
              task={taskItem}
              deleteFun={deleteTask}
              check={toggleTask}
            />
          ))}
    </div>
  );
}

export default TaskList;
