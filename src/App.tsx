import "./App.css";
import StoryList from "./components/StoryList";

function App() {
  return (
    <div className="bg-zinc-800">
      <div className="max-w-md mx-auto h-screen flex flex-col bg-black text-white overflow-hidden ">
        <StoryList />
      </div>
    </div>
  );
}

export default App;
