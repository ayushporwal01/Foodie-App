import ItemsList from "./itemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Accordion Header */}
      <div
        className="w-[55%] bg-gray-200 p-4 mx-auto my-4 select-none cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="text-lg font-bold pl-4.5">
            {data.title}({data.itemCards.length})
          </span>
          <span>
            <img src="/chevron-down.svg" />
          </span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemsList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
