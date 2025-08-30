import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";

const RestroMenu = () => {
  const { id } = useParams();
  const [restroMenu, setRestromenu] = useState(null);

  useEffect(() => {
    getFetchData();
  }, []);

  async function getFetchData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59430&lng=85.13520&restaurantId=1018909&query=Poori&submitAction=ENTER&source=collection"
      );
      const menuData = await data.json();
      console.log("---->", menuData); // 👈 check full structure

 
    
       setRestromenu(menuData?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1] )   
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
 return(
  <>
  {restroMenu?.data?.cards?.[1]?.card?.card?.itemCards?.map((item,index)=><div>


    <h1>{item.card.card.title }</h1>
    const data=item.card.card.itemCards[1].card.info
    <h1>{data.id}</h1>
    <h2>{data.name}</h2>
    <h3>{data.category}</h3>
      <p>{data?.description}</p>
        <p>₹{(data?.price || 0) / 100}</p>
        <img src={`data.imageId`}  alt="data.name}"     width="150"/>
  </div>  )}
  
  </>
 )
}
     

export default RestroMenu;
