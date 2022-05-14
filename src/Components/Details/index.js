import React from "react";
import { Container, Frame1, Frame2, Frame3, Pane1, Pane2, Back } from "./Style";
import millify from "millify";
import { useNavigate } from "react-router-dom";
import { useDataByCode } from "../../hooks/useGetCountries";

const Details = ({ countries }) => {
  const navigate = useNavigate();
  const { setCode, dataCode } = useDataByCode();
  const state = dataCode[0] || countries;
  return (
    <>
      <Back onClick={() => navigate(-1)}>Back</Back>
      <Container>
        <Pane1>
          <img src={state.flags.svg} alt={state.name.common} />
        </Pane1>
        <Pane2>
          <Frame1>
            <h1>{state.name.common}</h1>
            <ul>
              <li>
                <span>Native Name: </span>
                <p>
                  {state.altSpellings[2] ||
                    state.altSpellings[1] ||
                    state.altSpellings[0]}
                </p>
              </li>
              <li>
                <span>Population: </span>
                <p> {millify(state.population)}</p>
              </li>
              <li>
                <span>Region: </span>
                <p> {state.region}</p>
              </li>
              <li>
                <span>Sub Region: </span>
                <p> {state.subregion}</p>
              </li>
              <li>
                <span>Capital: </span>
                <p> {state.capital}</p>
              </li>
            </ul>
          </Frame1>
          <Frame2>
            <ul>
              <li>
                <span>Top Level Domain: </span>
                <p> {state.tld.map((id) => id)}</p>
              </li>
              <li>
                <span>Currencies: </span>
                {Object.keys(state.currencies).map((item, key) => (
                  <p key={key}>{state.currencies[item].name}</p>
                ))}
              </li>
              <li>
                <span>Languages: </span>
                {Object.keys(state.languages).map((item, i) => (
                  <p key={item}>{state.languages[item]},&nbsp;</p>
                ))}
              </li>
            </ul>
          </Frame2>
          <Frame3>
            <h1>Border Countries:</h1>

            <div className='main'>
              {state.borders.map((item) => (
                <div key={item} onClick={() => setCode(item)}>
                  {item}
                </div>
              ))}
            </div>
          </Frame3>
        </Pane2>
      </Container>
    </>
  );
};

export default Details;
