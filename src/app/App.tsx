import { useGameStore } from "@/entities/game/model/useGameStore";

function App() {
  const status = useGameStore((state) => state.status);
  const flagsLeft = useGameStore((state) => state.flagsLeft);
  const startGame = useGameStore((state) => state.startGame);
  const resetGame = useGameStore((state) => state.resetGame);

  return (
    <main className="min-h-svh grid place-items-center bg-stone-100">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-stone-800">Minesweeper</h1>
        <p className="text-stone-600">
          status: <span className="font-mono">{status}</span> · flags:{" "}
          {flagsLeft}
        </p>
        <div className="flex gap-2 justify-center">
          <button
            type="button"
            onClick={startGame}
            className="rounded bg-sky-600 px-3 py-1.5 text-white"
          >
            Start
          </button>
          <button
            type="button"
            onClick={resetGame}
            className="rounded bg-stone-300 px-3 py-1.5 text-stone-800"
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
export default App;
