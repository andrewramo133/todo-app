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
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

type StatusType = "All" | "Active" | "Completed";
function TaskList({ tasks, setTasks }: Props) {
  const [status, setStatus] = useState<StatusType>("All");
  // delete task function
  function deleteTask(id: string): void {
    const newTasks: TaskType[] = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }
  // mark complete or non completer for task function
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
  const statusArray: StatusType[] = ["All", "Active", "Completed"];
  function filterTasks(): TaskType[] | undefined {
    if (status === "All") {
      return tasks;
    } else if (status === "Active") {
      return tasks.filter((task) => !task.completed);
    } else if (status === "Completed") {
      return tasks.filter((task) => task.completed);
    }
  }
  const filteredTasks = filterTasks();

  const activeBtn =
    "  px-5 py-2.5  rounded-xl bg-[#A855F71A] text-[#A855F7]  text-sm font-bold  border border-[#A855F733] cursor-pointer transition-all";
  const nonActive =
    " px-5  py-2.5 rounded-xl  bg-[#18181B]   text-[#A1A1AA]   text-sm  font-bold  border  border-[#27272A] hover:border-[#A855F755] hover:text-white transition-all cursor-pointer";

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="w-[434px]  border-b pb-[8px] border-[#27272A66] flex justify-between">
        <div className="flex items-center gap-3">
          {statusArray.map((item) => (
            <button
              key={item}
              onClick={() => setStatus(item)}
              className={status === item ? activeBtn : nonActive}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => {
            setTasks([]);
            setStatus("All");
          }}
          className="text-white cursor-pointer"
        >
          {" "}
          <div className=" flex items-center gap-2">
            {" "}
            clear <FaRegTrashCan />
          </div>
        </button>
      </div>

      {filteredTasks?.map((taskItem) => (
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
