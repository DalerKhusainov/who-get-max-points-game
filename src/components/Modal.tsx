import { X } from "lucide-react";

interface ModalProps {
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ toggleModal }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="w-[400px] relative flex rounded-md shadow-lg p-10 flex-col items-center justify-center bg-slate-100">
        <button
          type="button"
          className="absolute p-1 transition-colors ease-in-out rounded-full -top-10 text-slate-100 -right-10 hover:text-slate-300"
          onClick={() => toggleModal((prev) => (prev === true ? false : true))}
        >
          <X />
        </button>
        <div className="mb-6 text-xl font-medium uppercase text-rose-500">
          Game Rules:
        </div>
        <ul className="space-y-2 list-disc text-slate-600 text-pretty">
          <li>
            The points rolled (2, 3, 4, 5, or 6) are added to the player's
            score.
          </li>
          <li>
            If a player rolls a 1, no points are added for that roll, and the
            turn ends.
          </li>
          <li>
            The game continues until a predetermined winning score is reached
            (e.g., 100 points), or for a set number of rounds.
          </li>
          <li>
            The player with the highest score at the end of the game wins.
          </li>
        </ul>
      </div>
    </div>
  );
}

/*

Certainly! Here’s a rule for the game you described:

---

**Dice Roll Game Rules:**

1. **Objective**: Players aim to earn the highest score by rolling a die and accumulating points.

2. **Players**: The game is played by two players.

3. **Gameplay**:
   - Players take turns rolling a single six-sided die.
   - If a player rolls a **1**, their turn ends immediately, and the turn passes to the other player.
   - If a player rolls a **2**, **3**, **4**, **5**, or **6**, they earn points equal to the number rolled and continue their turn.

4. **Scoring**:
   - The points rolled (2, 3, 4, 5, or 6) are added to the player's score.
   - If a player rolls a 1, no points are added for that roll, and the turn ends.

5. **Winning the Game**:
   - The game continues until a predetermined winning score is reached (e.g., 100 points), or for a set number of rounds.
   - The player with the highest score at the end of the game wins.

---

Feel free to adjust the rules as needed to fit the specific mechanics or objectives you have in mind!

*/
