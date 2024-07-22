interface PlayerCardProps {
    player: number
    count: number
    currentCount: number
    isActive: "Yes" | "No"
}

export default function PlayerCard({ player = 1, count = 10, currentCount = 45, isActive = "Yes" }: PlayerCardProps) 
{

    const isPlayerActiive = {
        Yes: "bg-rose-200",
        No: "bg-red-300/80"
    }
  return (
    <div className={`flex ${isPlayerActiive[isActive]} px-20 py-10 flex-col justify-center items-center`}>
        <h1 className="text-2xl uppercase font-medium mb-4">Player {player}</h1>
        <span className="text-red-500 font-medium text-6xl mb-20">{count}</span>
        <div className="flex flex-col items-center px-10 py-4 bg-red-500 rounded-lg text-slate-100">
            <h3 className="uppercase font-extralight mb-2">current</h3>
            <span className="text-xl">{currentCount}</span>
        </div>
    </div>
  )
}
