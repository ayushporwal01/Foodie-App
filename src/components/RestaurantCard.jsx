import CDN_URL from '../utils/constants' 

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName } =
    resData?.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL+cloudinaryImageId} />
      <div className="res-info">
        <h3 className="res-name">{name}</h3>
        <h4 className="res-ratings">★{avgRating}</h4>
        <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4 className="res-location">{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
