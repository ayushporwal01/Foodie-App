import ItemsList from "./itemList";
import { HiChevronDown } from "react-icons/hi";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Accordion Header */}
      <div
        className={`w-[55%] bg-white dark:bg-black dark:text-[#dbdbdb] p-4 mx-auto my-4 select-none cursor-pointer ${
          !showItems
            ? "border-b-[15px] border-gray-200 dark:border-[#171717]"
            : ""
        }`}
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="text-lg font-bold pl-4.5">
            {data.title}({data.itemCards.length})
          </span>
          <span>
            <HiChevronDown className="w-8 h-8" />
          </span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
