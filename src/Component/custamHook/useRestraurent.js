import { useEffect, useState } from "react";

export const useRestraurent = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getDataFetch();
  }, []);

  async function getDataFetch() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurants(restaurants);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
    }
  }

  return restaurants; // ✅ data return kar rahe hain
};



export const useOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {



    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("online", () => setIsOnline(false));
      window.removeEventListener("offline", () => setIsOnline(true));
    };
  }, []);

  return isOnline;
};
