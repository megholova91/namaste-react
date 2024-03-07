import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const RestaurantContainer = () => {
  return (
    <div className="res-container">
      {resList.map((resData) => (
        <RestaurantCard key={resData.data.id} resData={resData} />
      ))}
    </div>
  );
};

export default RestaurantContainer
