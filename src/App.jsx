// import { current } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import "./app.css";

import { Search, Cart, Show } from "./components/index";
// import { data } from "./data";

// import data from "./dataa.json";

function App() {
  const [locationn, setLocation] = useState("");
  // const [updateLocation, setUpdateLocation] = useState("");
  const [data, setdata] = useState([]);
  // const fromsuggetions = useRef("");

  // const first = useRef({});

  // const key = process.env.WEATHER_KEY;

  // const key = process.env.KEY_WEATHER;
  // console.log(key);
  // const urll = `http://api.weatherapi.com/v1/current.json?key=${key}&q=kaimganj&aqi=no`;
  // const url = `http://api.weatherstack.com/current?access_key=${key}&query=New York`;
  // const url =
  //   "http://api.weatherstack.com/current?access_key=a5cd6ef3e7efcb2ceddde87f401a5803&query=Farrukhabad";
  // const url1 = `http://api.weatherstack.com/current?access_key=1623f6712256dcc43a4ae69550240d34&query=${location}`;

  // useEffect(() => {
  //   if (location !== "") {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setdata(data))
  //       .catch((err) => alert("api failed....."));
  //   }
  // }, [location]);

  // useEffect(() => {
  //   fetch(
  //     `http://api.weatherstack.com/current?access_key=1623f6712256dcc43a4ae69550240d34&query=${location}`
  //   )
  //     .then((data) => data.json())
  //     .then((current) => current)
  //     .catch((err) => console.log(err));
  // }, []);

  const urll = `http://api.weatherapi.com/v1/current.json?key=38605139d8514808aee100446231707&q=${locationn}&aqi=yes&days=7`;

  useEffect(() => {}, []);

  const datafetch = async () => {
    if (locationn !== "") {
      await fetch(urll)
        .then((res) => res.json())
        .then((datad) => setdata(Object.entries(datad)))
        .catch((err) => alert(err, "api failed....."));
    }
  };

  // console.log(data);

  const handleonChange = (e) => {
    setLocation(e.target.value);
  };

  const SearchLocation = (e) => {
    e.preventDefault();
    datafetch();
    setLocation("");
  };

  const gotoComp = (e) => {
    setLocation(e);
  };

  return (
    <main className="main">
      <section className="app">
        <div className="searchbar">
          <form>
            <input
              onChange={handleonChange}
              type="text"
              placeholder="Enter Location...."
              name="location"
              required
              value={locationn}
            />
            <button onClick={SearchLocation} type="submit">
              <Search />
            </button>
          </form>
        </div>
      </section>
      {/* <section>
        <div className="sugg">
          {locationn === "" ? null : (
            <div>
              {data
                .filter((itee) => {
                  return locationn === ""
                    ? null
                    : itee.name.includes(locationn);
                })
                .map((item) => {
                  return (
                    <div className="listitems" key={item.id}>
                      <h1 onClick={() => gotoComp(item.name)}>{item.name}</h1>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section> */}

      <section className="details">
        <div className="detail">
          <div className="png">
            {/* <img src={data.current.condition.icon} alt="" /> */}
            <h1>image</h1>
          </div>
          <div className="location_d">
            {/* <p>{data.location.name} </p> */}
            <p>location</p>
            <br />
            <p>
              {/* {data.location.region}, <span>{data.location.country} </span> */}
            </p>
          </div>
          <div className="temp">
            <span>
              temp<span>&#8451;</span>
            </span>
          </div>
        </div>

        <div className="cartss">
          <h1>Weather Details</h1>
          <Cart title="hello" />
          <Cart title="hahah" />
          <Cart title="hahah" />
          <Cart title="hahah" />
          <Cart title="hahah" />
          <Show />
        </div>
      </section>
    </main>
  );
}
export default App;
