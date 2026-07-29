import { useGameStore } from "../store/useGameStore";

export const start = () => {
  const { status } = useGameStore.getState();

  if (status === "playing") return;

  useGameStore.setState({ status: "playing" });
};

export const reset = () => {
  useGameStore.setState({ status: "idle", flagsLeft: 10, playingTime: 0 });
};

export const applySecondToTimer = () => {
  const { playingTime, status } = useGameStore.getState();

  if (status !== "playing") return;

  useGameStore.setState({ playingTime: playingTime + 1 });
};
