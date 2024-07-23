import { ReactNode, createContext, useState } from 'react'

interface MainManuContextType {
    maxPoint: number | null 
    switchMaxPoint: (point: number) => void
}

export const mainMenuContext = createContext<MainManuContextType | undefined>(undefined)

export function MainMenuProvider({children}: { children: ReactNode }) {
    const [maxPoint, setMaxPoint] = useState<number | null>(null)

    function switchMaxPoint(point: number) {
        // setMaxPoint(point)
        if (point === 20) setMaxPoint(20)
        if (point === 30) setMaxPoint(30)
        if (point === 40) setMaxPoint(40)
        if (point === 50) setMaxPoint(50)
        if (point === 100) setMaxPoint(100)
    }

    return (
        <mainMenuContext.Provider value={{maxPoint, switchMaxPoint}}>
            {children}
        </mainMenuContext.Provider>
    )
}