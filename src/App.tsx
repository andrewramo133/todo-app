import "./App.css";
import Input from "./Components/Input/Input";

import Title from "./Components/Title/Title";

function App() {
  return (
    <>
      <main className=" bg-[#0F172B] h-screen p-4 ">
        <div className="w-125 min-h-[600px] border bg-[#09090B] rounded-2xl p-8 mx-auto flex flex-col gap-[24px]">
          <div className="flex justify-between pb-[20px] border-b border-[#27272A99]">
            <Title />
            <h2 className="text-white">Counter</h2>
          </div>
          <Input />
          <div>\</div>
        </div>
      </main>
    </>
  );
}

export default App;
