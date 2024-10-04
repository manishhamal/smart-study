import { Button } from "@/components/ui/button";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex mr-24 items-center mt-8 bg-white shadow-lg p-2 border border-red-800 rounded-lg w-[500px]">
      <IoSearch />

      <input
        type="text"
        placeholder="Input your search here....."
        className="p-2 rounded-lg outline-none grow block"
      />
      <Button className="">Search</Button>
    </div>
  );
};

export default SearchBar;
