import React, { useEffect, useState, useRef } from 'react';
import './Autocomplete.scss'
import cities from './../../world-cities_json.json';
import { FaSearch } from "react-icons/fa";

const Autocomplete = ({ setCity }) => {

  const [cityList, setCityList] = useState(cities);
  const [display, setDisplay] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredCityList, setFilteredCityList] = useState([])
  const wrapperRef = useRef(null);

  useEffect(() => {

    let regex = new RegExp(`^${searchText}`, "i");

    if (searchText.length > 2 && cityList) {
      const result = cityList.filter(city => {
        return regex.test(city.name)
      });
      setFilteredCityList(result);
    } else {
      setFilteredCityList([]);
    }

  }, [searchText, cityList]);


  useEffect(() => {

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };

  });

  const handleClickOutside = event => {

    const { current: wrap } = wrapperRef;

    //ha létezik a wrap és nem a wrap-en (autocomplete-container) belül kattintok, akkor...
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
      setSearchText('');
    }

  };

  const updateSearchInput = cityName => {

    setSearchText(cityName);
    setDisplay(false);
    setCity(cityName)

  };

  return (
    <div ref={wrapperRef} className="autocomplete-container">
      <div className="input-box">
        <input
          id="auto-input"
          onMouseDown={() => setDisplay(true)}
          placeholder="Search..."
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

      {display && (<div className="autocomplete-citi-list">
        {filteredCityList.map((city) => {
          const { name, geonameid } = city;

          return (
            <p
              key={geonameid.toString()}
              onClick={() => updateSearchInput(name)}
            >
              {name}
            </p>
          )
        })
        }
      </div>)}
    </div>
  );
};

export default Autocomplete
