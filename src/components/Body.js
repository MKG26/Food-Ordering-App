import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchtext, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You are offline</h1>;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex mt-8">
        <div className="search">
          <input
            className="ml-[100px] mb-3 mr-3 p-3 w-80 h-9 rounded-lg border-2 border-gray-300  shadow-sm "
            type="text"
            value={searchtext}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="font-semibold px-2 h-9 rounded-lg border-2 border-gray-300 shadow-sm hover:text-red-500 "
            onClick={() => {
              const filteredData = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );

              setFilteredRestaurant(filteredData);
            }}
          >
            Search
          </button>
        </div>

        <button
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.1
            );

            setFilteredRestaurant(filteredList);
          }}
          className="px-2 h-9 font-semibold ml-8  rounded-lg border-2 border-gray-300  shadow-sm   hover:text-red-500  "
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap ml-20">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.avgRating >= 4.5 ? (
                <RestaurantCardPromoted {...restaurant.info} />
              ) : (
                <RestaurantCard {...restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
