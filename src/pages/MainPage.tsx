import { Field } from "@/features/field";
import { SettingsMenu } from "@/features/settings";
import { Navbar } from "@/widgets/Navbar";

function MainPage() {
  return (
    <main className="min-h-svh grid place-items-center bg-mist-600">
      <Navbar />
      <Field />
      <SettingsMenu />
    </main>
  );
}

export default MainPage;
