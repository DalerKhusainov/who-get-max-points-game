import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
import Button from "../components/Button";
import { Dices, Download, House, RefreshCw, CircleHelp } from "lucide-react";
import Dice from "../components/Dice";
import { randomNum } from "../utils/randomNum";
import { PigGameContext } from "../contexts/pigGamaContext";
import Modal from "../components/Modal";

export default function GameWindowPage() {
  const [randomNumber, setRandomNumber] = useState<number>(1);
  const [currentPoints, setCurrentPoints] = useState<number>(0);
  const [toggleModal, setToggleModal] = useState(false);

  const pigGameContext = useContext(PigGameContext);
  if (!pigGameContext) return;
  const {
    addCurrentPoints,
    switchPlayer,
    setNewGame,
    playerOnePoints,
    playerTwoPoints,
    activePlayer,
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
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center min-w-[600px] mb-4 justify-start">
        {toggleModal && <Modal toggleModal={setToggleModal} />}
        <div className="flex items-center transition-colors ease-in-out gap-x-4">
          <Link
            to="/"
            type="button"
            className="hover:text-slate-200 text-slate-100"
          >
            <House />
          </Link>
          <button
            type="button"
            className="text-slate-100 hover:text-slate-200"
            onClick={() =>
              setToggleModal((prev) => (prev === true ? false : true))
            }
          >
            <CircleHelp />
          </button>
        </div>
        <div className="ml-auto mr-[33.333%] text-2xl uppercase text-slate-100">
          Winning score: <span>{limitPoints}</span>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full overflow-hidden rounded-md">
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
