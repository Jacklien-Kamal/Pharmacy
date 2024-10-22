import { Ad } from "@/lib/models";
import { Link } from "lucide-react";
type AdProps = {
  adData: Ad;
};

/**
 * @brief Ad Card with link
 *
 * this component is a simple ad card with a simple link with the title "shop now"
 * @param adData string : the ad data {id,title,imgLink,href,query}
 */
export function AdCard(ad: AdProps) {
  const myAd = ad.adData;
  return (
    <div className="xl:mt-1 mt-4 rounded-lg  relative w-fit">
      <img
        src={myAd.imgLink}
        alt="ad card image"
        className="bg-white rounded-lg"
      />
      <div className="xl:py-6 py-4 overflow-hidden justify-start flex rounded-lg absolute top-0">
        <div className="z-0 xl:pl-6 pl-4 w-2/3 justify-start items-start flex flex-wrap ">
          <h1 className="lg:text-2xl text-xl sm:text-md w-full font-bold">
            {myAd.title}
          </h1>
          <Link
            className="underline text-sm hover:no-underline z-2 mt-4 lg:mr-4 mr-2 h-auto"
            href={myAd.href}>
            Shop now
          </Link>
        </div>
      </div>
    </div>
  );
}
/**
 * @brief Ad Card with rounded button
 *
 * this component is a simple ad card with a white rounded button with the title "shop now"
 * @param adData Ad : the ad data {id,title,imgLink,href,query}
 */
