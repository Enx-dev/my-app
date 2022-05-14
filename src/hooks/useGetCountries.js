import { useState, useEffect } from "react";
import {
  getCountries,
  getCounByRegion,
  getCounByName,
  getCountriesCra,
} from "../api/api";

export const UseGetCountries = () => {
  const [countries, setCountries] = useState([]);
  const [pages, setPages] = useState(1);
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchCountries = async (page, region, name) => {
      const { data } = await (name && region
        ? getCounByName(name)
        : name
        ? getCounByName(name)
        : region
        ? getCounByRegion(region)
        : getCountries());
      const LIMIT = 20 * page;
      const newData = data.slice(0, LIMIT);
      setCountries(newData);
    };

    fetchCountries(pages, region, name);
  }, [pages, region, name]);
  return { countries, setPages, pages, setRegion, setName };
};

export const useDataByCode = () => {
  const [code, setCode] = useState("");
  const [dataCode, setDataCode] = useState("");
  const getDataByCode = async (code) => {
    if (code) {
      const { data } = await getCountriesCra(code);
      setDataCode(data || undefined);
    }
  };
  useEffect(() => {
    getDataByCode(code || undefined);
  }, [code]);
  return { setCode, dataCode };
};
