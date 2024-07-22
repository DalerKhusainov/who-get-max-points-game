import { useState, createContext, ReactNode } from 'react'


interface PigGameContextType {
    playerOnePoints: number
    playerTwoPoints: number
    activePlayer: "player1" | "player2"
    lemitPoints: 20 | 30 | 40 | 50
    winner: string
    addCurrentPoints: (points: number) => void
    switchPlayer: () => void
    setNewGame: () => void
}

export const PigGameContext = createContext<PigGameContextType | undefined>(undefined)

export function PigGameProvider({children}: {children: ReactNode}) {
const [playerOnePoints, setPlayerOnePoints] = useState<number>(0)
const [playerTwoPoints, setPlayerTwoPoints] = useState<number>(0)
const [activePlayer, setActivePlayer] = useState<"player1" | "player2">("player1")
const [lemitPoints, setLemitPoints] = useState<20 | 30 | 40 | 50>(20)

function addCurrentPoints(points: number) {
    if (activePlayer === "player1") setPlayerOnePoints(prev => prev + points)
    if (activePlayer === "player2") setPlayerTwoPoints(prev => prev + points)
}

function switchPlayer() {
    if (activePlayer === "player1") setActivePlayer("player2")
    if (activePlayer === "player2") setActivePlayer("player1")
}

function setNewGame() {
    setActivePlayer("player1")
    setPlayerOnePoints(0)
    setPlayerTwoPoints(0)
}

    return (
    <PigGameContext.Provider value={{ playerOnePoints, playerTwoPoints, activePlayer, addCurrentPoints, switchPlayer, setNewGame}}>
        {children}
    </PigGameContext.Provider>
)
}