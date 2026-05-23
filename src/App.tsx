import "./App.css";
import Title from "./Components/Title/Title";

function App() {
  return (
    <>
      <main className=" bg-[#0F172B] h-screen p-4">
        <div className="w-125 min-h-[600px] border bg-[#09090B] rounded-2xl p-8 mx-auto">
          <div className="flex justify-between pb-[20px] border-b border-[#27272A99]">
            <Title />
            <h2 className="text-white">Counter</h2>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
