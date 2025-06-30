import ItemsList from "./itemList";

const RestaurantCategory = ({ data }) => {
  const handleClick = () => {}

  return (
    <div>
      {/* Accordion Header */}
      <div className="w-1/2 p-4 mx-auto my-4 bg-gray-200 shadow-lg" onClick={handleClick}>
        <div className="flex justify-between">
          <span className="text-lg font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>
            <img src="/chevron-down.svg" />
          </span>
        </div>
        {/* Accordion Body */}
        <ItemsList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
