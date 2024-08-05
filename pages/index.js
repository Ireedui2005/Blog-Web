import { AllPost } from "@/Components/AllPost";
import { Banner } from "@/Components/Banner";
import { TrendingList } from "@/Components/treding/TrendingList";


export default function Home() {
  return (
    <main className="max-w-[1280px] mx-auto">
      <Banner />
      <TrendingList />
      <AllPost />
      {/* <Contact /> */}
      {/* <NotFound /> */}
      {/* <MobileVersion /> */}
    </main>
  );
}
