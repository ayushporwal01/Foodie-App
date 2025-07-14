import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, decrementItem } from "../utils/cartSlice";

const ItemsList = ({ items, showQuantityControls = false }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    const itemInfo = item.card?.info || item;
    dispatch(addItem(itemInfo));
  };

  return (
    <div>
      {items.map((item) => {
        const itemInfo = item.card?.info || item;
        const itemId = itemInfo.id;

        return (
          <div
            key={itemId}
            className="m-2 p-2 border-b-2 border-gray-300 flex flex-col lg:flex-row items-start lg:justify-between lg:items-center"
          >
            <div className="text-left">
              <div className="font-bold text-md text-[#555]">
                {/* Name */}
                {itemInfo?.name}
                {/* Price */}
                <p className="font-semibold text-[16px] text-black dark:text-[#dbdbdb]">
                  ₹{(itemInfo?.defaultPrice ?? itemInfo?.price) / 100}
                </p>

                {showQuantityControls && (
                  <div className="flex items-center space-x-4 mt-3">
                    <button
                      className="text-xl px-3 py-1 border rounded hover:bg-gray-100"
                      onClick={() => dispatch(decrementItem(itemId))}
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">
                      {itemInfo.quantity || 1}
                    </span>
                    <button
                      className="text-xl px-3 py-1 border rounded hover:bg-gray-100"
                      onClick={() => dispatch(addItem(itemInfo))}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
              {/* Description */}
              <p className="lg:line-clamp-2  max-w-md text-[#555]">
                {itemInfo?.description}
              </p>
            </div>

            {/*Absolutely Positioned  */}
            <div className="relative">
              {/* Item Image */}
              <img
                src={CDN_URL + itemInfo.imageId}
                className="w-24 h-24 lg:w-30 lg:h-30 rounded-xl my-3 lg:my-0"
                alt={itemInfo?.name}
                loading="lazy"
              />
              {/* ADD button */}
              {!showQuantityControls && (
                <button
                  className="absolute bottom-4 lg:bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-8 lg:w-28 lg:h-10 text-lg font-bold uppercase border border-gray-400 rounded-[8px] text-green-600 bg-white shadow-[0px_0px_2px_2px_rgba(0,0,0,0.1)]  hover:bg-gray-200 transition-all duration-200 ease-in-out cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddItem(itemInfo);
                  }}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
