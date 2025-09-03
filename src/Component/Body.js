import React, { useState, useEffect } from "react";
import "../index.css";
import { FiRefreshCw } from "react-icons/fi";
import Shimmer from "./Shimmer";
import { FaSearch } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { useOnline } from "./custamHook/useRestraurent";
import { useRestraurent } from "./custamHook/useRestraurent"
import Store from "./redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/Slice";
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

function Body() {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const count = useSelector((Store => (Store.cart.value)))
  const dispatch = useDispatch()
  // const [offlinedata,setOfflineData]=useState(restaurentList)
const handleClike=(item)=>{
  dispatch(addItem( item))
}
  const restaurant = useRestraurent();
  useEffect(() => {
    if (restaurant && restaurant.length > 0) {
      setAllRestaurants(restaurant);
      setFilteredRestaurants(restaurant);
    }
  }, [restaurant]);
  if (useOnline) {
    <h1>now you are offline pleace check the internet connection</h1>
  }
  if (!allRestaurants || allRestaurants.length === 0) {
    return <h>reload......</h>;
  }
  return (!allRestaurants) || allRestaurants.length === 0 ? (<Shimmer />) : (
    <>
<h1>conterne{count.length}</h1>
      <div className="flex my-3">
        <input
          className="border-4 border-indigo-200 border-x-indigo-500 mx-12 border-y-violet-100 rounded-r-xl mr-8 w-60"
          type="text"
          placeholder="        Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="flex gap-2 px-4 py-2 bg-red-600 text-white font-bold rounded-lg shadow-md mr-6"

          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search<FaSearch />
        </button>

      </div>

      <div className="inline-grid gap-1px grid-cols-6 grid-rows-3  mx-6 shadow-lg  rounded-none bg-gradient-to-t	">
        {filteredRestaurants.map((restaurant) => (
          <div className="card" key={restaurant.info.id}>
            <img
              className="rounded-md bg-gradient-to-t"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.info.cloudinaryImageId}`}
              alt={restaurant.info.name}
              width="200"
            />
            <div className="mr-10 text-center">
              <h2 className="uppercase whitespace-nowrap font-bold">{restaurant.info.name}
                <button onClick={()=>handleClike(restaurant.info.name)} className="flex mx-40 px-4 py-2 bg-blue-300 w-20  text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition">
                  addfood +
                </button></h2>
              <p className=" ">{restaurant.info.cuisines.join(", ")}</p>
              <h2 className="font-semibold ">{restaurant.info.costForTwo}</h2>
              <p className="whitespace-nowrap ">⭐ {restaurant.info.avgRating}</p>
              <div className="flex justify-items-stretch">
                <span className="flex justify-self-auto mr-2"><strong>DeliveryTime :</strong>  {restaurant.info.sla.deliveryTime}</span>
                <FcAlarmClock />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Body;
