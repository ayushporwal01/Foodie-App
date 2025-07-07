import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName } =
    resData?.info || [];

  return (
    <div className="res-card w-70 border">
      <img
        className="res-logo w-full h-52 object-cover object-center"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-info p-2">
        <h3 className="res-name truncate">{name}</h3>
        <h4 className="res-ratings">★{avgRating}</h4>
        <h4 className="res-cuisine truncate">{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4 className="res-location">{areaName}</h4>
      </div>
    </div>
  );
};

//Higher Order Function - PromotedRestaurantCard
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-20 rounded shadow">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
