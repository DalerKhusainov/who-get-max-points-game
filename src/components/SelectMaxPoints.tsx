import { useContext } from "react";
import { PigGameContext } from "../contexts/pigGamaContext";

export default function SelectMaxPoints() {
  const pigGameContext = useContext(PigGameContext);
  if (!pigGameContext) return;
  const { limitPoints, switchLimitPoints } = pigGameContext;

  return (
    <div className="flex items-center justify-between w-full overflow-hidden border rounded-full border-slate-400 last:border-r-0">
      <button
        className={`text-center w-[20%] border-r border-r-slate-400 ${
          limitPoints === 20
            ? "bg-rose-500 text-slate-100"
            : "bg-transparent text-slate-400"
        }`}
        onClick={() => switchLimitPoints(20)}
        type="button"
      >
        20
      </button>
      <button
        className={`text-center w-[20%] border-r border-r-slate-400 ${
          limitPoints === 30
            ? "bg-rose-500 text-slate-100"
            : "bg-transparent text-slate-400"
        }`}
        onClick={() => switchLimitPoints(30)}
        type="button"
      >
        30
      </button>
      <button
        className={`text-center w-[20%] border-r border-r-slate-400 ${
          limitPoints === 40
            ? "bg-rose-500 text-slate-100"
            : "bg-transparent text-slate-400"
        }`}
        onClick={() => switchLimitPoints(40)}
        type="button"
      >
        40
      </button>
      <button
        className={`text-center w-[20%] border-r border-r-slate-400 ${
          limitPoints === 50
            ? "bg-rose-500 text-slate-100"
            : "bg-transparent text-slate-400"
        }`}
        onClick={() => switchLimitPoints(50)}
        type="button"
      >
        50
      </button>
      <button
        className={`text-center w-[20%] ${
          limitPoints === 100
            ? "bg-rose-500 text-slate-100"
            : "bg-transparent text-slate-400"
        }`}
        onClick={() => switchLimitPoints(100)}
        type="button"
      >
        100
      </button>
    </div>
  );
}
