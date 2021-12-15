import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./style/boilerplate.css";

const FEATURES_API =
  "https://api.themoviedb.org/3/tv/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/tv?api_key=04c35731a5ee918f014970082a0088b1&query="; // + search term

function App() {
  const [shows, setShows] = useState([]);
  const [submit, setSubmit] = useState("");

  useEffect(() => {
    fetch(FEATURES_API)
      .then((res) => res.json())
      .then((data) => {
        setShows(data.results);
      });
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    fetch(SEARCH_API + submit)
      .then((res) => res.json())
      .then((data) => {
        setShows(data.results);
      });
  };

  return (
    <React.Fragment>
      <Navbar setSubmit={setSubmit} onSubmitHandler={onSubmitHandler} />
      <div className="container">
        {shows.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            path={item.backdrop_path}
            date={item.first_air_date}
            rate={item.vote_average}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
