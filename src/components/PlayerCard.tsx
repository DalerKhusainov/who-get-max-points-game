interface PlayerCardProps {
  player: string;
  count: number | string;
  isWinner: boolean;
  currentCount: number;
  isActive: "Yes" | "No";
}

export default function PlayerCard({
  player,
  count,
  isWinner,
  currentCount,
  isActive,
}: PlayerCardProps) {
  const isPlayerActiive = {
    Yes: "bg-rose-200",
    No: "bg-red-300/80",
  };
  return (
    <div
      className={`flex ${isPlayerActiive[isActive]} px-20 py-10 flex-col justify-center items-center`}
    >
      <h1
        className={`mb-4 ${
          isActive === "Yes" ? "border-b-[4px] border-b-slate-600" : ""
        } text-slate-600 pb-1 tracking-wider text-2xl font-medium uppercase`}
      >
        {player}
      </h1>
      <span className="mb-20 text-6xl font-medium text-red-500">
        {isWinner ? "Wins" : count}
      </span>
      <div className="flex flex-col items-center px-8 py-4 bg-red-500 rounded-lg text-slate-100">
        <h3 className="mb-2 uppercase font-extralight">current</h3>
        <span className="text-4xl">{currentCount}</span>
      </div>
    </div>
  );
}
