import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Banner from "./components/Banner/Banner.jsx";
import CardRow from "./components/CardRow/CardRow";
import requests from "./constants/constant";

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <CardRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow= {true}
      />
      <CardRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <CardRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <CardRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <CardRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <CardRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <CardRow title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <CardRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
