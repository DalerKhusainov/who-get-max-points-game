import { useState, createContext, ReactNode } from "react";

interface PigGameContextType {
  playerOnePoints: number;
  playerTwoPoints: number;
  activePlayer: "player1" | "player2";
  limitPoints: 20 | 30 | 40 | 50 | 100;
  // winner: string
  addCurrentPoints: (points: number) => void;
  switchPlayer: () => void;
  setNewGame: () => void;
  switchLimitPoints: (point: 20 | 30 | 40 | 50 | 100) => void;
}

export const PigGameContext = createContext<PigGameContextType | undefined>(
  undefined
);

export function PigGameProvider({ children }: { children: ReactNode }) {
  const [playerOnePoints, setPlayerOnePoints] = useState<number>(0);
  const [playerTwoPoints, setPlayerTwoPoints] = useState<number>(0);
  const [activePlayer, setActivePlayer] = useState<"player1" | "player2">(
    "player1"
  );
  const [limitPoints, setLimitPoints] = useState<20 | 30 | 40 | 50 | 100>(20);

  function addCurrentPoints(points: number) {
    if (activePlayer === "player1") setPlayerOnePoints((prev) => prev + points);
    if (activePlayer === "player2") setPlayerTwoPoints((prev) => prev + points);
  }

  function switchPlayer() {
    if (activePlayer === "player1") setActivePlayer("player2");
    if (activePlayer === "player2") setActivePlayer("player1");
  }

  function setNewGame() {
    setActivePlayer("player1");
    setPlayerOnePoints(0);
    setPlayerTwoPoints(0);
  }

  function switchLimitPoints(point: 20 | 30 | 40 | 50 | 100) {
    if (point) {
      setLimitPoints(point);
    }
  }

  return (
    <PigGameContext.Provider
      value={{
        playerOnePoints,
        playerTwoPoints,
        activePlayer,
        limitPoints,
        addCurrentPoints,
        switchPlayer,
        setNewGame,
        switchLimitPoints,
      }}
    >
      {children}
    </PigGameContext.Provider>
  );
}
