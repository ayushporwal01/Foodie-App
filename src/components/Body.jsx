import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local State Variable - Superpowerful React Variable
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUsername } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.7195687&lng=75.8577258&carousel=true&third_party_vendor=1"
      );

      const json = await data.json();
      console.log(json);

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (err) {
      console.error("Failed to fetch restaurants: ", err);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        "Oops! Looks like you're offline. Check your internet connection."
      </h1>
    );

  //Conditional Rendering
  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body flex flex-col justify-center items-center  dark:bg-black dark:text-white">
      <div className="filter flex justify-center gap-5 m-5">
        <div className="search flex items-center">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box h-8 px-3 border border-r-0 border-gray-400 pl-2 rounded-l-md focus:outline-none"
            value={searchText}
            placeholder="Search a Restaurant..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn h-8 px-4 bg-[#e08300] text-white hover:bg-gray-600 rounded-r-md transition-all ease-in cursor-pointer"
            onClick={() => {
              //filter the restaurant cards and update the UI
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="res-container grid grid-cols-4 gap-10">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <div className="relative hover:scale-95 transition-transform duration-200 ease-in-out">
              {restaurant.info.avgRating > 4.4 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
