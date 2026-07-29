import { FlagCounter } from "@/features/flagCounter";
import { Timer } from "@/features/timer";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center gap-3">
      <FlagCounter />
      <Timer />
    </nav>
  );
}
