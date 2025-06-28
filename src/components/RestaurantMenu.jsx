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

  return (
    <div className="text-center">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
    </div>
  );
};

export default RestaurantMenu;
