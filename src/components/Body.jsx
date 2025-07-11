import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable - Superpowerful React Variable
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

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

  if (!onlineStatus)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-lg dark:text-white">
          Oops! Looks like you're offline. Check your internet connection.
        </h1>
      </div>
    );

  return (
    <div className="body flex flex-col justify-center items-center py-24 dark:bg-black dark:text-white">
      {/* Search Bar - Always Visible */}
      <div className="filter flex justify-center gap-5 m-5">
        <div className="search flex items-center">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box w-full md:w-64 lg:w-96 xl:w-128 px-4 py-1.5 font-medium border border-r-0 border-gray-400 pl-3 rounded-l-md focus:border-[#e08300] focus:ring-0 focus:outline-none"
            value={searchText}
            placeholder="Search a Restaurant..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-[7px] bg-[#e08300] text-white hover:bg-gray-600 rounded-r-md transition-all ease-in cursor-pointer"
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

      {/* Restaurant Card or Shimmer */}
      {ListOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container flex flex-wrap justify-center gap-10 py-4">
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
      )}
    </div>
  );
};

export default Body;
