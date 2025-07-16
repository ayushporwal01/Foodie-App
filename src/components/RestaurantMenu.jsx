import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null)
    return (
      <div className="pt-16 dark:bg-black">
        <MenuShimmer />
      </div>
    );

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    sla,
  } = restaurantInfo;

  const deliveryTime = sla?.slaString || "";

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

  return (
    <div className="min-h-screen text-center pt-14 md:pt-20 pb-14 md:pb-0">
      {/* Menu Header */}
      <div className="w-full max-w-[52rem] bg-[#171717] flex flex-col lg:flex-row mx-auto items-start space-x-5 space-y-5 lg:space-y-0 p-5">
        {/* Menu Image */}
        <img
          className="w-64 h-40 object-cover rounded-md "
          src={CDN_URL + cloudinaryImageId}
          loading="lazy"
        />

        {/* Right Part */}
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-4xl text-[#dbdbdb]">{name}</h1>
          <p className="text-sm text-[#b1b1b1] py-2">{cuisines?.join(", ")}</p>

          <div className="flex items-center gap-5 pt-2">
            <span className="res-ratings px-2 py-1 bg-[#006711] text-sm text-white font-bold rounded flex items-center gap-1.5">
              <i className="fa-solid fa-star text-sm"></i> {avgRating}
            </span>
            <span className="text-white text-sm font-bold">|</span>
            <span className="text-sm text-white font-bold">{deliveryTime}</span>
            <span className="text-white text-sm font-bold">|</span>
            <span className="text-sm text-white font-bold">
              {costForTwoMessage}
            </span>
          </div>
        </div>
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
