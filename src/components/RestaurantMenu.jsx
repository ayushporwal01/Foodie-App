import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log("resInfo", resInfo);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

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

  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center mt-30">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-semibold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {/* category accordions */}
    </div>
  );
};

export default RestaurantMenu;
