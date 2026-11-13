import { gameActions, useGameStore } from "@/entities/game";

export const StatusDialog = () => {
  const gameStatus = useGameStore((state) => state.status);

  return (
    <>
      {gameStatus === "idle" && (
        <div className="flex w-1/4 h-fit flex-col items-center text-zinc-300 bg-black/25 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold">Minesweaper</h3>
          <p className="mt-3">Do you want to start new game?</p>
          <div className="mt-4 flex justify-center flex-row">
            <button
              className="px-5 py-2 bg-emerald-600 rounded-md hover:bg-emerald-700 hover:cursor-pointer transition-bg duration-200"
              onClick={gameActions.start}
            >
              Start Game
            </button>
          </div>
        </div>
      )}
    </>
  );
};
