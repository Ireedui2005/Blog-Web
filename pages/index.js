import { AllPost } from "@/Components/AllPost";
import { FirstHeader } from "@/Components/FirstHeader";
import { Footer } from "@/Components/Footer";
import { MobileVersion } from "@/Components/MobileVersion";
import { Section } from "@/Components/Section";

export default function Home() {
  return (
    <main className="w-[768px] m-auto md:w-[1280px]">
      <div className=" m-auto ">
        <MobileVersion />
        <FirstHeader />
        <Section />
        <AllPost />
        <Footer />

      </div>
    </main>
  );
}
