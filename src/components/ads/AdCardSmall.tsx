type Adprops = {
  imgLink: string;
  title: string;
  description: string;
};

/**
 *
 * @breif AdCardSmall
 * this component is a small ad card that has img on the top and mini description .
 * @param Adprops imgLink , title , description
 */
export default function AdCardSmall(props: Adprops) {
  return (
    <>
      <div className="w-[380px] md:h-[330px]  xl:h-[420px] rounded-3xl overflow-hidden shadow-md my-8">
        <img
          className="w-full"
          src={props.imgLink}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-sm">{props.description}</p>
        </div>
        <div className="px-6 pt-1 pb-5">
          <button className="border font-bold  rounded-[25px] border-black py-2 px-4">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}
