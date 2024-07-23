import SelectMaxPoints from "../components/SelectMaxPoints";

export default function HomePage() {
  return (
    <form className="bg-slate-100 mx-auto my-[20%] max-w-[400px] space-y-6 shadow-lg rounded-sm py-8 px-10">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col">
          <label
            htmlFor="firstPlayerName"
            className="text-rose-600 text-sm font-semibold uppercase"
          >
            Fisrt player
          </label>
          <input
            name="firstPlayerName"
            id="firstPlayerName"
            placeholder="Enter name"
            className="focus:outline-none bg-transparent border-b-2 py-2"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="secondPlayerName"
            className="text-rose-600 text-sm font-semibold uppercase"
          >
            Second player
          </label>
          <input
            name="secondPlayerName"
            id="secondPlayerName"
            placeholder="Enter name"
            className="focus:outline-none bg-transparent border-b-2 py-2"
          />
        </div>
      </div>
      <div className="space-y-3">
        <span className="text-rose-600 text-sm font-semibold uppercase">
          Select max points
        </span>
        <SelectMaxPoints />
      </div>
    </form>
  );
}
