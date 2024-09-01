import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchtext, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

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
      <div className="flex mt-5">
        <div className="search">
          <input
            className=" mb-3 mx-3 p-3 w-80 h-8 rounded-xl border border-solid border-gray-400 shadow-lg"
            type="text"
            value={searchtext}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="p-2 rounded-lg bg-gray-200 shadow-md active:bg-white"
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
          className="ml-8 bg-yellow-300 mb-3 p-2 rounded-lg shadow-md active:bg-white "
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
