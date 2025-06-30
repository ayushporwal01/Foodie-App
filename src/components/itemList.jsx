import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-b-2 border-gray-300 flex justify-between gap-20"
        >
          <div className="text-left h-full">
            <div className="font-bold text-[18px] text-gray-700">
              {/* Name */}
              {item?.card?.info?.name}
              {/* Price */}
              <p className="font-semibold text-[16px] text-black">
                ₹
                {(item?.card?.info?.defaultPrice ?? item?.card?.info?.price) /
                  100}
              </p>
            </div>
            {/* Description */}
            <p className="line-clamp-2 text-gray-600">
              {item?.card?.info?.description}
            </p>
          </div>

          {/*Absolutely Positioned  */}
          <div>
          {/* Item Image */}
          <img
            src={CDN_URL + item.card.info.imageId}
            className="w-36 h-36 mb-2 rounded-xl"
            alt={item?.card?.info?.name}
          />
          {/* ADD Button */}
          <button className="w-28 h-10 text-lg font-bold uppercase border border-gray-400 rounded-[8px] text-green-600 bg-white shadow-[0px_0px_2px_2px_rgba(0,0,0,0.1)]  hover:bg-gray-200 transition-all duration-200 ease-in-out cursor-pointer">
            Add
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
