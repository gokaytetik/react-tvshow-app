import React from "react";
import "../style/navbar.css";
import Logo from "../assets/tvshowapplogo.png";

const Navbar = (props) => {
  const onChangeHandler = (e) => {
    props.setSubmit(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="nav">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <h1>Tv Show App</h1>
        <form onSubmit={props.onSubmitHandler}>
          <input
            value={props.input}
            onChange={onChangeHandler}
            className="search"
            type="text"
            placeholder="Search..."
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
