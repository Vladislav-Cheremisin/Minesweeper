import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { GameState } from "../model/gameModel";
import { DEFAULT_FIELD_SIZE } from "../model/gameConstants";

export const useGameStore = create<GameState>()(
  devtools(
    () => ({
      status: "idle",
      fieldSize: DEFAULT_FIELD_SIZE,
      flagsLeft: 10,
      playingTime: 0,
    }),
    {
      name: "GameStore",
    },
  ),
);
