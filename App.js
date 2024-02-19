import React from "react";
import ReactDOM from "react-dom/client";
import Pizza from "./icons/Pizza.jpg";
import User from "./icons/User.png";
import Search from "./icons/Search.png";

// React Element => object => HTML element (render)
//Creating React element using createElement (core React)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");

//Creating React element using JSX (HTML-like / XML-like syntax)
//JSX transpiled before reaching JS engine (Parcel does this using Babel)
const jsxHeading = <h1 id="heading">Namaste React using JSX!</h1>;

//React functional component
const Title = () => (
  <h1 id="heading">Namaste React using JSX functional component!</h1>
);

//Component composition
const HeadingComponent = () => (
  <div>
    <Title />
    {Title()}
    <Title></Title>
    <h2>{console.log("abcd")}</h2>
    {jsxHeading}
    <h1 id="heading">Namaste React functional component!</h1>
  </div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

//****************** CODING ASSIGNMENT 3************************ */

/**
 * 1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
 *      - Create the same element using JSX
        - Create a functional component of the same with JSX
        - Pass attributes into the tag in JSX
        - Composition of Component(Add a component inside another)
        - {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
    2. Create a Header Component from scratch using Functional Components with JSX
        - Add a Logo on left
        - Add a search bar in middle
        - Add User icon on right
        - Add CSS to make it look nice
 */

// Nested header Element using React.createElement
const nestedHeader = React.createElement(
  "div",
  { class: "title" },
  React.createElement(
    "h1",
    {},
    React.createElement("h2", {}, React.createElement("h3", {}, "h3"))
  )
);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// reactRoot.render(nestedHeader);

// Nested header Element using JSX
const nestedHeaderUsingJSX = (
  <div className="title">
    <h1>
      <h2>
        <h3>h3 with JSX</h3>
      </h2>
    </h1>
  </div>
);

reactRoot.render(nestedHeaderUsingJSX);

// Create a functional component of the same with JSX
const Header = () => (
  <div className="title">
    <h1>
      <h2>
        <h3>h3 with functional component</h3>
      </h2>
    </h1>
  </div>
);

// reactRoot.render(<Header />);

// Composition of Component(Add a component inside another)

const HeaderWrapper = () => (
  <div>
    This is header wrapper!
    <Header />
  </div>
);

// reactRoot.render(<HeaderWrapper />);

//{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

const SameButDiff = () => (
  <div className="title">
    {Header()}
    <Header />
    <Header></Header>
  </div>
);

// reactRoot.render(<SameButDiff />);

/**
 * 2. Create a Header Component from scratch using Functional Components with JSX
        - Add a Logo on left
        - Add a search bar in middle
        - Add User icon on right
        - Add CSS to make it look nice
 */

const HeaderComponent = () => (
  <div className="title">
    <img src={Pizza} height={80} />
    <span className="search-wrapper">
      <input type="text" />
      <img className="search-icon" src={Search} height={100} />
    </span>
    <img src={User} height={80} />
  </div>
);

reactRoot.render(<HeaderComponent />);
