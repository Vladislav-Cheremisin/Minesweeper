export type GameStatus = "idle" | "playing" | "won" | "lost";

export type GameState = {
  status: GameStatus;
  fieldSize: FieldSize;
  flagsLeft: number;
  playingTime: number;
  isMenuOpen: boolean;
};

export type FieldSize = {
  width: number;
  height: number;
};
