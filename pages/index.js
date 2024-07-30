import { AllPost } from "@/components/AllPost";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { TrendingList } from "@/components/treding/TrendingList";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-[1280px] mx-auto">
        <Banner />
        <TrendingList />
        <AllPost />
      </div>
      <Footer />
      {/* <MobileVersion /> */}
    </main>
  );
}
