import cupImage from "../assets/cup.png";
import { Link } from "react-router-dom";

export default function Modal({ winner }: { winner: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="w-[400px] flex rounded-md shadow-lg p-10 flex-col items-center justify-center bg-slate-100">
        <img src={cupImage} width="250" />
        <div className="mb-6 text-4xl font-medium uppercase text-rose-500">
          Gongrats
        </div>
        <div className="mb-6 text-2xl uppercase">{winner} wins</div>
        <div className="flex items-center gap-x-8">
          <Link
            to="/"
            className="px-4 py-2 uppercase rounded bg-sky-500 text-slate-200"
          >
            Main menu
          </Link>
          <Link
            to="/"
            className="px-4 py-2 uppercase bg-green-500 rounded text-slate-200"
          >
            Play again
          </Link>
        </div>
      </div>
    </div>
  );
}
