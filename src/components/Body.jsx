import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable - Superpowerful React Variable
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  // Fetches restaurant data from API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/restaurants");

      const json = await response.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (err) {
      console.error("Error fetching restaurant data:", err);
      setError("Something went wrong while loading restaurants.");
    } finally {
      setLoading(false);
    }
  };

  //Debounce search effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = ListOfRestaurants.filter((res) =>
        res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText, ListOfRestaurants]);

  if (!onlineStatus)
    return (
      <div className="flex justify-center items-center min-h-screen dark:bg-black dark:text-white">
        <h1 className="text-lg dark:text-white">
          Oops! Looks like you're offline. Check your internet connection.
        </h1>
      </div>
    );

  return (
    <div className="body flex flex-col justify-center items-center py-24 dark:text-white">
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
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : loading ? (
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
