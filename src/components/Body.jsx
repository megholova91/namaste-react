import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from '../utils/mockData'
import Search from "./Search";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchQuery, setSearchQuery] = useState('');

  //filter restaurants with 4+ rating
  const filterTopRatedRestaurants = () => {
    const filteredListOfRestaurants = listOfRestaurants.filter(res => res.data.avgRating > 4);
    setListOfRestaurants(filteredListOfRestaurants);
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  //search for restaurant
  const searchRestaurant = () => {
    const query = searchQuery.toLowerCase();
    if (!query) {
      setListOfRestaurants(resList);
    } else {
      const filteredListOfRestaurants = listOfRestaurants.filter(res => res.data.name.toLowerCase().includes(query));
      setListOfRestaurants(filteredListOfRestaurants);
    }
  }


  return (
    <div className="body">
      <div className="search-filter-container">
        <Search handleChange={handleChange} searchQuery={searchQuery} searchRestaurant={searchRestaurant} />
        <div className="filter">
          <button className="filter-btn" onClick={filterTopRatedRestaurants}>Top Rated Restaurants</button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resData) => (
          <RestaurantCard key={resData.data.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;