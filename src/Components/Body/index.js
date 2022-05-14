import React from "react";
import { Card, Searchbar } from "..";
import { Wrapper, Link } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { UseGetCountries } from "../../hooks/useGetCountries";
const Body = () => {
  const goTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const { countries, pages, setPages, setRegion, setName } = UseGetCountries();
  return (
    <Wrapper>
      <Searchbar id='search' setRegion={setRegion} setName={setName} />
      <Card countries={countries} setPages={setPages} pages={pages} />
      <Link href='#' onClick={() => goTop()}>
        <FontAwesomeIcon icon={faAngleUp} />
      </Link>
    </Wrapper>
  );
};

export default Body;
