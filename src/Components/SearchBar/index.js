import React, { useState } from "react";
import {
  Wrapper,
  Searchbar,
  Serchinput,
  Filter,
  Dropdown,
  Filterwrapper,
} from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

const Search = ({ setRegion, setName }) => {
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <Searchbar id='search'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Serchinput
          onChange={(e) => setName(e.target.value)}
          placeholder='Search for a country...'
        />
      </Searchbar>
      <Filterwrapper>
        {" "}
        <Filter onClick={() => setShow((prev) => !prev)}>
          Filter by Region{" "}
          {!show ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleUp} />
          )}
        </Filter>
        {show && (
          <Dropdown>
            <ul>
              <li onClick={() => setRegion("Africa")}>Africa</li>
              <li onClick={() => setRegion("Americas")}>America</li>
              <li onClick={() => setRegion("Asia")}>Asia</li>
              <li onClick={() => setRegion("Europe")}>Europe</li>
              <li onClick={() => setRegion("Oceania")}>Oceania</li>
              <li onClick={() => setRegion("")}>All</li>
            </ul>
          </Dropdown>
        )}
      </Filterwrapper>
    </Wrapper>
  );
};

export default Search;
