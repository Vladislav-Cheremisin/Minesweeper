import { useGameStore } from "@/entities/game";
import { Icons } from "@/shared";

export function FlagCounter() {
  const flags = useGameStore((state) => state.flagsLeft);

  return (
    <div className="text-2xl font-bold text-zinc-300 flex gap-2 items-center">
      <Icons.IconFlag className="size-9 text-red-400" />
      <span>{flags >= 10 ? flags : `0${flags}`}</span>
    </div>
  );
}
