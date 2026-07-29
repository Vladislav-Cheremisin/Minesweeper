import { useGameStore } from "@/entities/game";

export function Field() {
  const fieldSize = useGameStore((state) => state.fieldSize);
  const status = useGameStore((state) => state.status);

  const cellsCount = fieldSize.width * fieldSize.height;

  if (status === "idle") return null;

  return (
    <div
      className="grid p-0.5 gap-0.5 bg-mist-500 rounded-xs"
      style={{
        gridTemplateColumns: `repeat(${fieldSize.width}, 1fr)`,
        gridTemplateRows: `repeat(${fieldSize.height}, 1fr)`,
      }}
    >
      {Array.from({ length: cellsCount }).map((_, index) => (
        <div key={index} className="size-10 bg-mist-700"></div>
      ))}
    </div>
  );
}
