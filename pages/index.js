import { AllPost } from "../components/AllPost";
import { Banner } from "../components/Banner";
import { TrendingList } from "../components/treding/TrendingList";

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
