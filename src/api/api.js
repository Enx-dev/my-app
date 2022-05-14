import axios from "axios";
import { BASE_URL, NAME, REGION } from "./endpoints";
export const getCounByRegion = (region) => axios.get(`${REGION}${region}`);
export const getCountries = () => axios.get(`${BASE_URL}/all`);
export const getCountriesCra = (code) =>
  code && axios.get(`${BASE_URL}/alpha/${code}`);
export const getCounByName = (name) => axios.get(`${NAME}${name}`);
