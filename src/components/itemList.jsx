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
          <div>
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

            {/* Quantity */}
            <div className="flex space-x-4 mx-3 my-4">
              <button className="text-xl rounded-sm cursor-pointer">-</button>
              <span className="text-lg">5</span>
              <button className="text-xl rounded-sm cursor-pointer">+</button>
            </div>
          </div>

          {/* Item Image */}
          <img
            src={CDN_URL + item.card.info.imageId}
            className="w-24 h-24 lg:w-30 lg:h-30 rounded-xl my-3 lg:my-0"
            alt={item?.card?.info?.name}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
