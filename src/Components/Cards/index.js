import React from "react";
import millify from "millify";
import { Wrapper, Card, Container } from "./Styles";
import { Loadmore } from "..";
import { NavLink } from "react-router-dom";
const Cards = ({ countries, setPages, pages }) => {
  //spilt number in 3 from last digit
  // const convertNum = (number) => {
  //   let num = number.toString();
  //   let num2 = num.split("").reverse().join("");
  //   var parts = num2.match(/[\s\S]{1,3}/g);
  //   return parts.reverse().join(",");
  // };

  return (
    <Container>
      <Wrapper>
        {countries.map((country) => {
          return (
            <NavLink
              key={country.name.common}
              style={{ textDecoration: "none" }}
              to={"/country"}
              state={country}>
              <Card>
                <div className='card-img'>
                  <img src={country.flags.svg} alt={country.name.common} />
                </div>
                <div className='card-info'>
                  <h1>{country.name.common}</h1>
                  <ul>
                    <li>
                      <span>Population: &nbsp;</span>
                      {/* {country.population} */}
                      {millify(country.population)}
                    </li>
                    <li>
                      <span>Reion: &nbsp;</span>
                      {country.region}
                    </li>
                    <li>
                      <span>Capital: &nbsp;</span>
                      {country.capital}
                    </li>
                  </ul>
                </div>
              </Card>
            </NavLink>
          );
        })}
      </Wrapper>
      <Loadmore setPages={setPages} countries={countries} pages={pages} />
    </Container>
  );
};

export default Cards;
