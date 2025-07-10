import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName } =
    resData?.info || [];

  const lastMileTravelString = resData?.info?.sla?.lastMileTravelString || "";

  return (
    <div
      data-testid="resCard"
      className="res-card w-60 h-72 bg-white text-black shadow-primary rounded-lg"
    >
      <img
        className="res-logo w-full h-44 object-cover p-3 rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-info px-3">
        <h3 className="res-name font-bold text-md text-gray-700 truncate">{name}</h3>
        <h4 className="res-cuisine truncate text-xs text-gray-700">
          {cuisines.join(", ")}
        </h4>
        <h4 className="res-location text-xs text-gray-700">{areaName}</h4>
        <div className="space-x-2 flex items-center gap-1 py-2">
          <span className="res-ratings px-1 py-0.5  bg-[#00ad1d] text-[12px] text-white font-semibold rounded flex items-center gap-1">
            <i class="fa-solid fa-star text-[8px]"></i> {avgRating}
          </span>
          <span className="text-gray-700 text-lg">•</span>
          <span className="font-semibold text-gray-700 text-[12px]">
            {lastMileTravelString}
          </span>
          <span className="text-gray-700 text-lg">•</span>
          <span className="font-bold text-gray-700 text-[12px]">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

//Higher Order Function - PromotedRestaurantCard
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-5 left-5 bg-black text-white text-xs px-2 py-1 z-20 rounded shadow">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
