import { SettingsMenu } from "@/features/settings";
import { Navbar } from "@/widgets/Navbar";

function MainPage() {
  return (
    <main className="min-h-svh grid place-items-center bg-mist-600">
      <Navbar />
      <SettingsMenu />
    </main>
  );
}

export default MainPage;
