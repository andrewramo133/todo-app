import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Title from "./Components/Title/Title";
import TaskList from "./Components/TaskList/TaskList";

interface TaskType {
  text: string;
  id: string;
  completed: boolean;
}
function App() {
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const tasksLength: number = tasks.length;
  const completedTasks: TaskType[] = tasks.filter((task) => task.completed);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <main className=" bg-[#0F172B] h-screen p-4 flex justify-center items-center">
        <div className="w-125 min-h-[200px] border bg-[#09090B] rounded-2xl p-8 mx-auto flex flex-col gap-[24px]">
          <div className="flex justify-between pb-[20px] border-b border-[#27272A99]">
            <Title />
            <h2 className="text-white">
              {completedTasks.length}/{tasksLength} Completed
            </h2>
          </div>
          <Input tasks={tasks} setTasks={setTasks} />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </main>
    </>
  );
}

export default App;
