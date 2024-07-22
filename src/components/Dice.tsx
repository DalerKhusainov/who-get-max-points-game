import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";

export default function Dice({ diceNumber }: { diceNumber: number }) {
  if (diceNumber === 1)
    return (
      <div>
        <Dice1 className="size-12" />
      </div>
    );
  if (diceNumber === 2)
    return (
      <div>
        <Dice2 className="size-12" />
      </div>
    );
  if (diceNumber === 3)
    return (
      <div>
        <Dice3 className="size-12" />
      </div>
    );
  if (diceNumber === 4)
    return (
      <div>
        <Dice4 className="size-12" />
      </div>
    );
  if (diceNumber === 5)
    return (
      <div>
        <Dice5 className="size-12" />
      </div>
    );
  if (diceNumber === 6)
    return (
      <div>
        <Dice6 className="size-12" />
      </div>
    );
}
