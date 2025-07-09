import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName } =
    resData?.info || [];

  const lastMileTravelString = resData?.info?.sla?.lastMileTravelString || "";

  return (
    <div
      data-testid="resCard"
      className="res-card rounded-lg bg-white text-black shadow-primary"
    >
      <img
        className="res-logo w-full h-52 object-cover object-center p-3 rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-info pl-4">
        <h3 className="res-name font-bold text-gray-700 truncate">{name}</h3>
        <h4 className="res-cuisine truncate text-sm text-gray-700">
          {cuisines.join(", ")}
        </h4>
        <h4 className="res-location text-sm text-gray-700">{areaName}</h4>
        <div className="space-x-2 flex items-center gap-1 py-2">
          <span className="res-ratings px-1.5 py-0.5  bg-[#00ad1d] text-[14px] text-white font-semibold rounded flex items-center gap-1">
            <i class="fa-solid fa-star text-[10px]"></i> {avgRating}
          </span>
          <span className="text-gray-700 text-xl">•</span>
          <span className="font-semibold text-gray-700 text-sm">
            {lastMileTravelString}
          </span>
          <span className="text-gray-700 text-xl">•</span>
          <span className="font-bold text-gray-700 text-sm">{costForTwo}</span>
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
