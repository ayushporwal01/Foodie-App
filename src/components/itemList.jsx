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
              {item?.card?.info?.name}
              <p className="font-semibold text-[16px] text-black">
                ₹
                {(item?.card?.info?.defaultPrice ?? item?.card?.info?.price) /
                  100}
              </p>
            </div>
            <p className="text-justify line-clamp-2">
              {item?.card?.info?.description}
            </p>
          </div>

          {item?.card?.info?.imageId && (
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-36 h-36 mb-2 rounded-xl"
              alt={item?.card?.info?.name}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
