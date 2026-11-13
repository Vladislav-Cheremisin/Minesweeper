import { useGameStore } from "../store/useGameStore";

export const start = () => {
  const { status } = useGameStore.getState();

  if (status === "playing") return;

  useGameStore.setState({ status: "playing" }, false, "game/start");
};

export const reset = () => {
  useGameStore.setState(
    { status: "idle", flagsLeft: 10, playingTime: 0 },
    false,
    "game/reset",
  );
};

export const applySecondToTimer = () => {
  const { playingTime, status } = useGameStore.getState();

  if (status !== "playing") return;

  useGameStore.setState(
    { playingTime: playingTime + 1 },
    false,
    "game/applySecondToTimer",
  );
};
export const toggleMenu = () => {
  const { isMenuOpen } = useGameStore.getState();

  useGameStore.setState(
    { isMenuOpen: !isMenuOpen },
    false,
    "game/toggleMenuOpen",
  );
};
