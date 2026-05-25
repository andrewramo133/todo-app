import { useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";

import Title from "./Components/Title/Title";
interface taskType {
  text: string;
  id: string;
  completed: boolean;
}
function App() {
  const [tasks, setTasks] = useState<taskType[]>([]);
  const tasksLength: number = tasks.length;
  const completedTasks: taskType[] = tasks.filter((task) => task.completed);

  return (
    <>
      <main className=" bg-[#0F172B] h-screen p-4 ">
        <div className="w-125 min-h-[600px] border bg-[#09090B] rounded-2xl p-8 mx-auto flex flex-col gap-[24px]">
          <div className="flex justify-between pb-[20px] border-b border-[#27272A99]">
            <Title />
            <h2 className="text-white">
              {completedTasks.length}/{tasksLength} Completed
            </h2>
          </div>
          <Input tasks={tasks} setTasks={setTasks} />
          <div>\</div>
        </div>
      </main>
    </>
  );
}

export default App;
