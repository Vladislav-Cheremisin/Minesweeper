import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { GameState } from "../model/gameModel";

export const useGameStore = create<GameState>()(
  devtools(
    () => ({
      status: "idle",
      flagsLeft: 10,
      playingTime: 0,
    }),
    {
      name: "GameStore",
    },
  ),
);
