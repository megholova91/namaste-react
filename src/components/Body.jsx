import RestaurantContainer from "./RestaurantContainer";
import Search from "./Search";

const Body = () => {
  return (
    <div className="body">
      <Search />
      <RestaurantContainer />
    </div>
  );
};

export default Body;