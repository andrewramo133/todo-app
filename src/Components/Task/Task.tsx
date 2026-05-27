import { FaRegTrashCan } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { PiKeyReturnBold } from "react-icons/pi";

interface TaskType {
  text: string;
  id: string;
  completed: boolean;
}
interface TaskProps {
  task: TaskType;
  deleteFun: (id: string) => void;
  toggleTask: (id: string) => void;
  editTask: (newText: string, id: string) => void;
  setEditingTaskId: React.Dispatch<React.SetStateAction<string>>;
  editingTaskId: string;
  setEditingText: React.Dispatch<React.SetStateAction<string>>;
  editingText: string;
}
function Task({
  task,
  deleteFun,
  toggleTask,
  editTask,
  setEditingTaskId,
  editingTaskId,
  setEditingText,
  editingText,
}: TaskProps) {
  function handelSaveEdit(text: string, id: string) {
    editTask(text, id);
    setEditingTaskId("");
    setEditingText("");
  }
  function cancelEditing() {
    setEditingTaskId("");
    setEditingText("");
  }
  return (
    <>
      {task.id === editingTaskId ? (
        <div className="flex gap-[10px]">
          <div className="relative w-[356px]">
            <MdModeEdit
              className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
            />

            <input
              autoFocus
              type="text"
              placeholder="Write a task item..."
              value={editingText}
              onChange={(e) => {
                setEditingText(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && editingText.trim() !== "") {
                  handelSaveEdit(editingText, editingTaskId);
                } else if (e.key === "Escape") {
                  cancelEditing();
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
              if (editingText.trim() !== "") {
                handelSaveEdit(editingText, editingTaskId);
              }
            }}
            className="w-[67.45px] h-[46.28px] rounded-[24px] bg-[#A855F7] py-[13px] px-[20px] text-[14px] font-bold text-white cursor-pointer"
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="w-[434px] h-[71px] rounded-[24px] bg-[#FFFFFF01] p-[16px] border border-[#27272A] flex items-center justify-between">
          <div className="flex gap-[14px]">
            <input
              checked={task.completed}
              onChange={() => {
                toggleTask(task.id);
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
          <div className="flex gap-[15px]">
            <button
              onClick={() => {
                setEditingTaskId(task.id);
                setEditingText(task.text);
              }}
              className="text-white cursor-pointer"
            >
              {" "}
              <MdModeEdit />
            </button>
            <button
              onClick={() => deleteFun(task.id)}
              className="text-white cursor-pointer"
            >
              {" "}
              <FaRegTrashCan />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Task;
