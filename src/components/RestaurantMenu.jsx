import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};

  const { cloudinaryImageId, name, cuisines, avgRating, diliveryTime, costForTwoMessage} =
    restaurantInfo;

  // Dynamically find the card with itemCards
  const regularCards =
    resInfo?.cards?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const menuItemsCard = regularCards.filter(
    (card) => card?.card?.card?.itemCards
  );

  const itemCards = menuItemsCard.flatMap(
    (section) => section?.card?.card?.itemCards || []
  );

  const categories = regularCards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories);

  return (
    <div className="text-center py-28 dark:bg-black relative -top-8">
      <div className="w-[55%] bg-[#171717] text-white flex mx-auto">
        <img
          className="res-logo w-72 h-48 object-cover p-4.5 rounded-3xl"
          src={CDN_URL + cloudinaryImageId}
        />
        <div>
          <h1 className="text-4xl my-6 text-[#dbdbdb]">{name}</h1>
          <p className="text-sm text-gray-400">{cuisines?.join(", ")}</p>
        </div>

        <div className="space-x-2 flex items-center gap-1 py-2">
          <span className="res-ratings px-1.5 py-0.5 bg-[#027415] text-md text-white font-semibold rounded flex items-center gap-1">
            <i class="fa-solid fa-star text-md"></i> {avgRating}
          </span>
          <span className="text-gray-700 text-lg">|</span>
          <span className="font-semibold text-gray-700 text-[12px]">
            {diliveryTime}
          </span>
          <span className="text-gray-700 text-lg">|</span>
          <span className="font-bold text-white text-sm">
            {costForTwoMessage}
          </span>
        </div>
        <div></div>
      </div>
      {/* category accordions */}
      {categories.map((category, index) => (
        //Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
