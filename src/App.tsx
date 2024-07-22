import { useState, useContext } from 'react'
import PlayerCard from "./components/PlayerCard";
import Button from "./components/Button";
import {
  Dices,
  Download,
  RefreshCw,
} from "lucide-react";
import Dice from "./components/Dice";
import { randomNum } from "./utils/randomNum";
import { PigGameContext } from './contexts/pigGamaContext';

function App() {
  const [randomNumber, setRandomNumber] = useState<number>(1)
  const [currentPoints, setCurrentPoints] = useState<number>(0)

  const pigGameContext = useContext(PigGameContext)
  if (!pigGameContext) return
  const { playerOnePoints, playerTwoPoints, addCurrentPoints, switchPlayer, activePlayer, setNewGame } = pigGameContext

  function onRollDiceHandler() {
    const number = randomNum()
    setRandomNumber(number);
    setCurrentPoints(prev => prev + number)
    if (number === 1) {
      switchPlayer()
      setCurrentPoints(0)
    }    
  }

  function onHoldHandler() {
    addCurrentPoints(currentPoints)
    switchPlayer()
    setCurrentPoints(0)
    setRandomNumber(1)
  }

  function onNewGameHandler() {
    setNewGame()
    setRandomNumber(1)
    setCurrentPoints(0)
  }



  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex relative rounded-md overflow-hidden">
        <PlayerCard player={1} count={activePlayer === "player1" ? currentPoints : 0} currentCount={playerOnePoints} isActive={activePlayer === "player1" ? "Yes" : "No"} />
        <PlayerCard player={1} count={activePlayer === "player2" ? currentPoints : 0} currentCount={playerTwoPoints} isActive={activePlayer === "player2" ? "Yes" : "No"} />
        <Button positionTo="top-4" onCLickHandler={onNewGameHandler}>
          <RefreshCw className="size-4" /> New game
        </Button>
        <div className="absolute left-1/2 -translate-x-1/2 top-[30%] bg-slate-200 p-1">
          <Dice diceNumber={randomNumber} />
        </div>
        <Button positionTo="bottom-24" onCLickHandler={onRollDiceHandler}>
          <Dices className="size-4" /> Roll dice
        </Button>
        <Button positionTo="bottom-12" onCLickHandler={onHoldHandler}>
          <Download className="size-4" /> Hold
        </Button>
      </div>
    </div>
  );
}

export default App;
