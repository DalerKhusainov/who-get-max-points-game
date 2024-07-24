import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SelectMaxPoints from "../components/SelectMaxPoints";
import { PigGameContext } from "../contexts/pigGamaContext";

export default function HomePage() {
  const [firstPlayer, setFirstPlayer] = useState("Player 1");
  const [secondPlayer, setSecondPlayer] = useState("Player 2");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const pigGameContext = useContext(PigGameContext);
  if (!pigGameContext) return;
  const { createPlayers, setNewGame } = pigGameContext;

  function onCreatePlayersHandler() {
    setLoading(true);
    createPlayers(firstPlayer, secondPlayer);
    setTimeout(() => {
      navigate("/game");
      setNewGame();
      setLoading(false);
    }, 1000);
  }

  return (
    <form className="bg-slate-100 mx-auto mt-20 max-w-[400px] space-y-6 shadow-xl rounded-lg py-8 px-10">
      <h1 className="text-3xl font-thin text-center uppercase text-rose-600">
        Main menu
      </h1>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col">
          <div className="text-sm font-semibold uppercase text-rose-600">
            Fisrt player
          </div>
          <input
            placeholder="Enter name"
            className="py-2 bg-transparent border-b-2 focus:outline-none"
            onChange={(e) => setFirstPlayer(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold uppercase text-rose-600">
            Second player
          </div>
          <input
            placeholder="Enter name"
            className="py-2 bg-transparent border-b-2 focus:outline-none"
            onChange={(e) => setSecondPlayer(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-3">
        <span className="text-sm font-semibold uppercase text-rose-600">
          Select limit points
        </span>
        <SelectMaxPoints />
      </div>
      <div>
        <button
          type="button"
          className="w-full py-4 mt-4 text-sm font-semibold uppercase rounded-lg bg-rose-600 text-slate-100"
          onClick={onCreatePlayersHandler}
        >
          {loading ? "Loading..." : "Start game"}
        </button>
      </div>
    </form>
  );
}
