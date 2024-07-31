import { AllPost } from "@/Components/AllPost";
import { Banner } from "@/Components/Banner";
import { Contact } from "@/Components/Contact";
import { Footer } from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { NotFound } from "@/Components/NotFound";
import { SecondPage } from "@/Components/SecondPage";
import { TrendingList } from "@/Components/treding/TrendingList";


export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-[1280px] mx-auto">
        {/* <SecondPage /> */}
        {/* <Banner />
        <TrendingList />
        <AllPost /> */}
        {/* <Contact /> */}
        <NotFound />
      </div>
      <Footer />
      {/* <MobileVersion /> */}
    </main>
  );
}
