import { ArrowUpLeft, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function SearchBar() {


  return (
    <>
      <div className="flex flex-grow relative  ">
        <Input
          className="border-none w-full py-3 px-6 rounded-full z-10"
          type="email"
          placeholder="Search everything at Walmart online and at store"
        
        />
        <Button
          type="submit"
          className="rounded-full bg-[#623474] absolute right-3 top-1  h-9 w-9 my-[2px] z-10 flex items-center justify-center"
          size="icon">
          <Search color="white" className="w-6 " />
        </Button>
     
      </div>
    </>
  );
}
