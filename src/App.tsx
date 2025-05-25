import "./App.css";
import StoryList from "./components/StoryList";

function App() {
  return (
    <div className="bg-zinc-800">
      <div className="max-w-md mx-auto h-screen flex flex-col bg-black text-white overflow-hidden ">
        <StoryList />

        <p className=" text-center  ">69th copy of Instagram is here! </p>
        <p className="text-center text-2xl font-mono font-medium pt-3 tracking-tight bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-clip text-transparent bg-clip-text">
          Storie's Edition
        </p>
      </div>
    </div>
  );
}

export default App;
