import "./App.css";
import { AdBar } from "./components/ads/AdBar";
import { AdCard } from "./components/ads/AdCard";
import { VideoAdCard } from "./components/ads/VideoAdCard";
import BottomNavBar from "./components/BottomNavBar";
import { CarouselPlugin } from "./components/carousel";
import TopNavBar from "./components/TopNavBar";
import WelcomeCard from "./components/WelcomeCard";

function App() {
  return (
    <>
      <TopNavBar />
      <BottomNavBar />
      {/* <WelcomeCard /> */}
      <section className="xl:flex xl:flex-row md:flex sm:inline sm:align-center justify-center">
        <div className="xl:w-1/2  xl:mb-3 xl:order-2 sm:inline sm:w-full sm:order-1">
          <div className=" grid grid-cols-2 gap-x-6 mt-4">
            <AdCard adData={{imgLink:'https://misr-online.com/media/wysiwyg/095645_Health-EN.jpg',href:'#',title:''}} />
            <AdCard adData={{imgLink:'https://misr-online.com/media/wysiwyg/095513_pharmacist-advice_EN.jpg',href:'#',title:''}} />
          </div>

          <div className="mt-4">
          <AdCard adData={{imgLink:'https://as2.ftcdn.net/v2/jpg/02/89/31/09/1000_F_289310957_5ZtogTtPJcfrlEH9hDmehGXmzZKTctjX.jpg',href:'#',title:''}} />
          </div>
        </div>
      </section>
      <div className="w-20">

        <CarouselPlugin/>
      </div>

      <AdBar />
    </>
  );
}

export default App;
