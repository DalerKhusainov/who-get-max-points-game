import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
import Button from "../components/Button";
import { Dices, Download, House, RefreshCw } from "lucide-react";
import Dice from "../components/Dice";
import { randomNum } from "../utils/randomNum";
import { PigGameContext } from "../contexts/pigGamaContext";

export default function GameWindowPage() {
  const [randomNumber, setRandomNumber] = useState<number>(1);
  const [currentPoints, setCurrentPoints] = useState<number>(0);

  const pigGameContext = useContext(PigGameContext);
  if (!pigGameContext) return;
  const {
    playerOnePoints,
    playerTwoPoints,
    addCurrentPoints,
    switchPlayer,
    activePlayer,
    setNewGame,
    player1,
    player2,
    limitPoints,
  } = pigGameContext;

  function onRollDiceHandler() {
    const number = randomNum();
    setRandomNumber(number);
    setCurrentPoints((prev) => prev + number);
    if (number === 1) {
      switchPlayer();
      setCurrentPoints(0);
    }
  }

  function onHoldHandler() {
    addCurrentPoints(currentPoints);
    switchPlayer();
    setCurrentPoints(0);
    setRandomNumber(1);
  }

  function onNewGameHandler() {
    setNewGame();
    setRandomNumber(1);
    setCurrentPoints(0);
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex items-center min-w-[600px] mb-4 justify-start">
        <Link to="/" type="button" className="">
          <House className="text-slate-100" />
        </Link>
        <div className="ml-auto mr-[33.333%] text-2xl uppercase text-slate-100">
          Winner point: <span>{limitPoints}</span>
        </div>
      </div>
      <div className="relative flex overflow-hidden rounded-md">
        <PlayerCard
          player={player1}
          count={activePlayer === "player1" ? currentPoints : 0}
          isWinner={limitPoints <= playerOnePoints ? true : false}
          currentCount={playerOnePoints}
          isActive={activePlayer === "player1" ? "Yes" : "No"}
        />
        <PlayerCard
          player={player2}
          count={activePlayer === "player2" ? currentPoints : 0}
          isWinner={limitPoints <= playerTwoPoints ? true : false}
          currentCount={playerTwoPoints}
          isActive={activePlayer === "player2" ? "Yes" : "No"}
        />
        <Button positionTo="top-4" onCLickHandler={onNewGameHandler}>
          <RefreshCw className="size-4" /> New game
        </Button>
        {limitPoints <= playerOnePoints ||
          (limitPoints <= playerTwoPoints ? (
            ""
          ) : (
            <>
              <div className="absolute left-1/2 text-rose-500 -translate-x-1/2 top-[30%] bg-slate-200 rounded-lg shadow-lg">
                <Dice diceNumber={randomNumber} />
              </div>
              <Button positionTo="bottom-24" onCLickHandler={onRollDiceHandler}>
                <Dices className="size-4" /> Roll dice
              </Button>
              <Button positionTo="bottom-12" onCLickHandler={onHoldHandler}>
                <Download className="size-4" /> Hold
              </Button>
            </>
          ))}
      </div>
    </div>
  );
}
