/**
 *
 * @breif Ad Bar Large
 * this component is a Large Ad Bar for each Category.
 * it has title , img with height and width based on the given in its link,
 * @param props title, imgLink
 *
 */

function AdBarLarge(props: { title: string; imgLink: string }) {
  const { title, imgLink } = props;
  return (
    <>
      <div className="flex justify-center px-6 py-11 w-11/12 relative">
        <div className="absolute flex justify-center flex-col">
          <h4 className="font-bold text-2xl mt-9">
            {title} Celebration ,Offers up to 50%
          </h4>
          <p className="m-auto text-lg ">Find all you need to celebrate</p>
          <span className="mt-3 ml-40">
            <a href="#" className="underline ms-16">
              Shop now
            </a>
          </span>
        </div>
        <img src={imgLink} alt="ImgAdBarLarge" />
      </div>
    </>
  );
}

export default AdBarLarge;
