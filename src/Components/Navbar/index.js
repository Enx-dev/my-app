import React from "react";
import { Navbar } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { setTheme } from "../../app/action";
const Navbarpage = () => {
  const mode = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  return (
    <Navbar id='nav'>
      <h1>Where in the world?</h1>

      {mode === "darkmode" ? (
        <div>
          <FontAwesomeIcon
            onClick={() => dispatch(setTheme("lightmode"))}
            icon={faSun}
          />
          <h1>Light Mode</h1>
        </div>
      ) : (
        <div>
          <FontAwesomeIcon
            icon={faMoon}
            onClick={() => dispatch(setTheme("darkmode"))}
          />
          <h1>Dark Mode</h1>
        </div>
      )}
    </Navbar>
  );
};

export default Navbarpage;
