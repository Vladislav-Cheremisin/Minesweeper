import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { GameState } from "./types";

export const useGameStore = create<GameState>()(
  devtools(
    (set) => ({
      status: "idle",
      flagsLeft: 10,
      startGame: () => set({ status: "playing" }, false, "game/start"),
      resetGame: () =>
        set({ status: "idle", flagsLeft: 10 }, false, "game/reset"),
    }),
    {
      name: "GameStore",
    },
  ),
);
