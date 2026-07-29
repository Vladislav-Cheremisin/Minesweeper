import { Icons } from "@/shared";
import { useTimer } from "../hooks/useTimer";

export function Timer() {
  const time = useTimer();

  const minutesView = time.minutes < 10 ? `0${time.minutes}` : time.minutes;
  const secondsView = time.seconds < 10 ? `0${time.seconds}` : time.seconds;
  const dotsVisibility = time.seconds % 2 === 0 ? "opacity-100" : "opacity-50";

  return (
    <h1 className="text-2xl font-bold text-zinc-300 flex gap-2 items-center">
      <Icons.IconClock className="size-9" />
      <div className="flex items-center gap-1">
        <span>{minutesView}</span>
        <span
          className={`${dotsVisibility} pb-1 transition-opacity duration-500`}
        >
          :
        </span>
        <span>{secondsView}</span>
      </div>
    </h1>
  );
}
