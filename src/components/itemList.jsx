import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-b-2 border-gray-300 flex flex-col lg:flex-row items-start lg:justify-between lg:items-center"
        >
          <div className="text-left">
            <div className="font-bold text-md text-[#555]">
              {/* Name */}
              {item?.card?.info?.name}
              {/* Price */}
              <p className="font-semibold text-[16px] text-black dark:text-[#dbdbdb]">
                ₹
                {(item?.card?.info?.defaultPrice ?? item?.card?.info?.price) /
                  100}
              </p>
            </div>
            {/* Description */}
            <p className="lg:line-clamp-2  max-w-md text-[#555]">
              {item?.card?.info?.description}
            </p>
          </div>

          {/*Absolutely Positioned  */}
          <div className="relative">
            {/* Item Image */}
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-24 h-24 lg:w-30 lg:h-30 rounded-xl mt-2"
              alt={item?.card?.info?.name}
              loading="lazy"
            />
            {/* ADD button */}
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-8 lg:w-28 lg:h-10 text-lg font-bold uppercase border border-gray-400 rounded-[8px] text-green-600 bg-white shadow-[0px_0px_2px_2px_rgba(0,0,0,0.1)]  hover:bg-gray-200 transition-all duration-200 ease-in-out cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleAddItem(item);
              }}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
