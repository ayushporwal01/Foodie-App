import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName } =
    resData?.info || [];

  return (
    <div
      data-testid="resCard"
      className="res-card w-70 rounded-lg bg-white text-black shadow-primary"
    >
      <img
        className="res-logo w-full h-52 object-cover object-center p-3 rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-info p-3">
        <h3 className="res-name font-bold text-gray-800 truncate">{name}</h3>
        <h4 className="res-cuisine truncate text-sm">{cuisines.join(", ")}</h4>
        <div className="space-x-2">
          <span className="res-ratings bg-[#16eb39] text-md text-white font-semibold px-0.5 py-0 rounded">
            <i class="fa-solid fa-star"></i> {avgRating}
          </span>
          <span className="text-gray-600">•</span>
          <span className="font-semibold text-gray-800 text-sm">
            {costForTwo}
          </span>
        </div>
        <h4 className="res-location text-sm">{areaName}</h4>
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
