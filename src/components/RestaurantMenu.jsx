import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info || {};

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  // Dynamically find the card with itemCards
  const regularCards =
    resInfo?.cards?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const menuItemsCard = regularCards.find(
    (card) => card?.card?.card?.itemCards
  );

  const itemCards = menuItemsCard?.card?.card?.itemCards || [];

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      {itemCards.length === 0 ? (
        <p>No menu items found.</p>
      ) : (
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {" Rs."}
              {item?.card?.info?.defaultPrice / 100 ||
                item?.card?.info?.price / 100}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;
