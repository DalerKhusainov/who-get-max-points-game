import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameWindowPage from "./pages/GameWindowPage";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GameWindowPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
