import { TbHexagonNumber1Filled } from "react-icons/tb";

const SemesterCard = ({ sem, sub }) => {
  return (
    <div className="flex items-center gap-4 border-2 border-green-600 bg-green-200 w-72 rounded-md p-4 h-40">
      <div className="">
        <h2 className="text-black font-bold">{sem}</h2>
        <p className="text-gray-700">{sub}</p>
      </div>
    </div>
  );
};

export default SemesterCard;
