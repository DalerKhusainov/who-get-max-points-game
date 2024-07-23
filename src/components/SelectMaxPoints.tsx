import { useContext } from "react";
import { PigGameContext } from "../contexts/pigGamaContext";

export default function SelectMaxPoints() {
  const pigGameContext = useContext(PigGameContext);
  if (!pigGameContext) return;
  const { limitPoints, switchLimitPoints } = pigGameContext;

  function onSwitchLimitPointsHandler(point: 20 | 30 | 40 | 50 | 100) {
    console.log(point);    
  }

  return (
    <div className="flex items-center rounded-full w-full justify-between overflow-hidden border border-slate-400 last:border-r-0">
      <button
        className={`text-center w-[20%] border-r border-r-slate-400 ${
            limitPoints === 20
            ? "bg-rose-500 text-slate-100"
            : "bg-transparent text-slate-400"
        }`}
        onClick={() => onSwitchLimitPointsHandler(20)}
      >
        20
      </button>
      <button
        className={`text-center w-[20%] border-r border-r-slate-400 ${
            limitPoints === 30
            ? "bg-rose-500 text-slate-100"
            : "bg-transparent text-slate-400"
        }`}
        onClick={() => onSwitchLimitPointsHandler(30)}
      >
        30
      </button>
      <button
        className={`text-center w-[20%] border-r border-r-slate-400 ${
            limitPoints === 40
            ? "bg-rose-500 text-slate-100"
            : "bg-transparent text-slate-400"
        }`}
        onClick={() => onSwitchLimitPointsHandler(40)}
      >
        40
      </button>
      <button
        className={`text-center w-[20%] border-r border-r-slate-400 ${
            limitPoints === 50
            ? "bg-rose-500 text-slate-100"
            : "bg-transparent text-slate-400"
        }`}
        onClick={() => onSwitchLimitPointsHandler(50)}
      >
        50
      </button>
      <button
        className={`text-center w-[20%] border-r border-r-slate-400 ${
            limitPoints === 100
            ? "bg-rose-500 text-slate-100"
            : "bg-transparent text-slate-400"
        }`}
        onClick={() => onSwitchLimitPointsHandler(100)}
      >
        100
      </button>
    </div>
  );
}

// type PointsProps = {
//   point: number;
// };

// function Points({ point }: PointsProps) {
//   const mainManuContext = useContext(mainMenuContext);
//   if (!mainManuContext) return;
//   const { maxPoint, switchMaxPoint } = mainManuContext;

//   let isSelected = `${
//     maxPoint === point
//       ? "bg-rose-500 text-slate-100"
//       : "bg-transparent text-slate-400"
//   }`;

//   function onSwitchMaxPointHandler() {
//     switchMaxPoint(point);
//   }

//   return (
//     <button
//       key={point}
//       onClick={onSwitchMaxPointHandler}
//       className={`text-center w-full border-r border-r-slate-400 ${isSelected}`}
//     >
//       {point}
//     </button>
//   );
// }
