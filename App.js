import ReactDOM from "react-dom/client";
import { Logo as LogoImg, Pizza } from "./icons";
import resList from "./data";
/**
 * - Header
 *      - Logo
 *      - Nav Items
 * - Body
 *      - Search
 *      - RetaurantContainer
 *          - RetaurantCard
 *              - img
 *              - name of restaurant
 *              - cuisine
 *              - star rating
 *              - delivery time
 * - Footer
 *      - Copyright
 *      - About us
 *      - Links
 *      - Contact
 */

const Nav = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={LogoImg} />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Nav />
    </div>
  );
};

const Search = () => {
  return <div className="search">Search</div>;
};

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const RestaurantContainer = () => {
  return (
    <div className="res-container">
      {resList.map((resData) => (
        <RestaurantCard key={resData.data.id} resData={resData} />
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <Search />
      <RestaurantContainer />
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
