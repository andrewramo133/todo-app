import { FaRegTrashCan } from "react-icons/fa6";
interface taskType {
  text: string;
  id: string;
  completed: boolean;
}
interface taskProps {
  task: taskType;
  deleteFun: (id: string) => void;
  check: (id: string) => void;
}
function Task({ task, deleteFun, check }: taskProps) {
  return (
    <div className="w-[434px] h-[71px] rounded-[24px] bg-[#FFFFFF01] p-[16px] border border-[#27272A] flex items-center justify-between">
      <div className="flex gap-[14px]">
        <input
          checked={task.completed}
          onChange={() => {
            check(task.id);
          }}
          type="checkbox"
          className=" w-5
    h-5
    rounded-full
    appearance-none
    border
    border-[#A1A1AA4D]
    bg-[#18181B]
    checked:bg-[#A855F7] 
    cursor-pointer"
        />
        {task.completed ? (
          <p className="text-[14px] font-bold text-gray-400 line-through">
            {task.text}
          </p>
        ) : (
          <p className="text-[14px] font-bold text-white">{task.text}</p>
        )}
      </div>

      <button
        onClick={() => deleteFun(task.id)}
        className="text-white cursor-pointer"
      >
        {" "}
        <FaRegTrashCan />
      </button>
    </div>
  );
}

export default Task;
