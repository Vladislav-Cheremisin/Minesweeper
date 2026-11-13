import { gameActions, useGameStore } from "@/entities/game";
import { SettingsMenuItem } from "./SettingsMenuItem";

export const SettingsPopup = () => {
  const gameStatus = useGameStore((state) => state.status);
  const isMenuOpen = useGameStore((state) => state.isMenuOpen);

  const restartGame = () => {
    gameActions.reset();
    gameActions.start();
  };

  return (
    <div
      className="min-w-32 flex flex-col bg-black/25 rounded-2xl absolute right-12 bottom-10 transition-opacity duration-200 overflow-hidden"
      style={{
        opacity: isMenuOpen ? "100%" : "0%",
      }}
    >
      <SettingsMenuItem
        text="Restart Game"
        isVisible={gameStatus === "playing"}
        action={restartGame}
      />
      <SettingsMenuItem
        text="Stop Game"
        isVisible={gameStatus === "playing"}
        action={gameActions.reset}
      />
      <SettingsMenuItem
        text="Start Game"
        isVisible={gameStatus === "idle"}
        action={gameActions.start}
      />
    </div>
  );
};
