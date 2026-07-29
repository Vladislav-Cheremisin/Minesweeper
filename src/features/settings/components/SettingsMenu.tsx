import { gameActions, useGameStore } from "@/entities/game";
import { Icons } from "@/shared";

/**
 * TODO: Тут добавить меню настроек с выбором сложности/рестартом игры/таблицей рекордов
 */
export function SettingsMenu() {
  const status = useGameStore((state) => state.status);

  return (
    <button
      onClick={status === "idle" ? gameActions.start : gameActions.reset}
      className="absolute bottom-4 right-4 rounded-full bg-zinc-500 size-12 flex items-center justify-center"
    >
      <Icons.IconSettings className="size-9 text-zinc-100 cursor-pointer" />
    </button>
  );
}
