type GameStatus = "idle" | "playing" | "won" | "lost";

export type GameState = {
  status: GameStatus;
  flagsLeft: number;
  startGame: () => void;
  resetGame: () => void;
};
