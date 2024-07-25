import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameWindowPage from "./pages/GameWindowPage";

function App() {
  return (
    <div className="px-4 mx-auto mt-10">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GameWindowPage />} />
      </Routes>
    </div>
  );
}

export default App;
