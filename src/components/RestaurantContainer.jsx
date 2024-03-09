import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from '../utils/mockData'

const RestaurantContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  //filter restaurants with 4+ rating
  const handleClick = () => {
    const filteredListOfRestaurants = listOfRestaurants.filter(res => res.data.avgRating > 4)
    setListOfRestaurants(filteredListOfRestaurants);
  }
  return (
    <>
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resData) => (
          <RestaurantCard key={resData.data.id} resData={resData} />
        ))}
      </div>
    </>
  );
};

export default RestaurantContainer
