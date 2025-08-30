import React, { useState,useEffect } from "react";
import "../index.css";
import { FiRefreshCw } from "react-icons/fi";
import Shimmer from "./Shimmer";
import { FaSearch } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
 import { useOnline } from "./custamHook/useRestraurent";
import { useRestraurent } from "./custamHook/useRestraurent"

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

function Body() {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // const [offlinedata,setOfflineData]=useState(restaurentList)
 
  const restaurant = useRestraurent();
  useEffect(() => {
    if (restaurant && restaurant.length > 0) {
      setAllRestaurants(restaurant);
      setFilteredRestaurants(restaurant);
    }
  }, [restaurant]);
 if (useOnline){
  <h1>now you are offline pleace check the internet connection</h1>
 }
 if (!allRestaurants || allRestaurants.length === 0) {
    return <h>reload......</h>;
  }
  return (!allRestaurants) || allRestaurants.length === 0 ? (<Shimmer />) : (
    <>   
    
      <div className="input-box">
        <input

          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button><FaSearch />

        <button
          className="refresh"
          onClick={() => {
            setFilteredRestaurants(allRestaurants); // reset to full list
          }}
        >
          Refresh <FiRefreshCw />
        </button>
      </div>

      <div className="card-container">
        {filteredRestaurants.map((restaurant) => (
          <div className="card" key={restaurant.info.id}>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.info.cloudinaryImageId}`}
              alt={restaurant.info.name}
              width="200"
            />
            <h2>{restaurant.info.name}</h2>
            <p>{restaurant.info.cuisines.join(", ")}</p>
            <h2>{restaurant.info.costForTwo}</h2>
            <p>⭐ {restaurant.info.avgRating}</p>
            <span><strong>DeliveryTime :</strong>  {restaurant.info.sla.deliveryTime}< FcAlarmClock /></span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Body;
