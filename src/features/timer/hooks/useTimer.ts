import { gameActions, useGameStore } from "@/entities/game";
import { useEffect } from "react";
import type { TimerState } from "../model/timerModel";

export function useTimer(): TimerState {
  const time = useGameStore((state) => state.playingTime);
  const status = useGameStore((state) => state.status);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (status === "playing") {
      const interval = setInterval(() => {
        gameActions.applySecondToTimer();
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [status]);

  return { minutes, seconds };
}
