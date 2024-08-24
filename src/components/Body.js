
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    


    const [restaurantList, setRestaurantList] = useState([]);

    const [searchtext, setSearchText] = useState("");


    useEffect(() => {
        
        fetchData();
    }, []);


    const fetchData = async () => {

        

        const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);

        setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);



    };


    


   return restaurantList.length === 0 ? <Shimmer/> : (
        
    <div className="body">
        <div className="filter">
            <div className="search">
                <input className="searchBox" type="text" value={searchtext}/>
                <button className="searchButton" >Search</button>
            </div>

            <button onClick={() => {

                const filteredList = restaurantList.filter(
                    (res) => res.info.avgRating > 4.1
                )

                setRestaurantList(filteredList);
            }}
            
            className="filter-btn">Top Rated Restaurant</button>
        </div>

        <div className="res-container">
    {
            restaurantList.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>;
            })
    }
    </div>
   </div>
)
};


export default Body;