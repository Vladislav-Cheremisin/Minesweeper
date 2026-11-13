import { gameActions } from "@/entities/game";
import { Icons } from "@/shared";
import { SettingsPopup } from "./SettingsPopup";

/**
 * TODO: Тут добавить меню настроек с выбором сложности/рестартом игры/таблицей рекордов
 */
export function SettingsMenu() {
  return (
    <>
      <div className="absolute bottom-4 right-4">
        <SettingsPopup />
        <button
          onClick={gameActions.toggleMenu}
          className="rounded-full bg-zinc-500 size-12 flex items-center justify-center"
        >
          <Icons.IconSettings className="size-9 text-zinc-100 cursor-pointer"/>
        </button>
      </div>
    </>
  );
}
