import { Logo as LogoImg } from "../../icons";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Nav />
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

export default Header;