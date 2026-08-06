import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import "../styles/concert.css";

function Concert({ allConcerts }) {
  const { year, slug } = useParams();
  const concert = allConcerts.find(
    (show) => show.slug === slug && show.date.y === year,
  );

  if (!concert) {
    return <h2>Concert not found</h2>;
  }

  const colors = ["one", "two", "three", "five"]

  const bg_color = colors[Math.floor(Math.random()*4)];

  const concert_class = concert.artist.split(" ").join("-").toLowerCase()+"-"+concert.date.m.toLowerCase()+"-"+concert.date.y;

  

  return (
    <div className={`Concert ${bg_color}`}>
      <Header />
      <div className={`concert-details ${concert_class}`}>
        <div className="info">
          <h1 className="artist">{concert.artist}</h1>
          <h2 className="tourName">{concert.tourName}</h2>
          <div className="date">
            {concert.date.m} {concert.date.d}, {concert.date.y}
          </div>
          <div className="box">
            <div className="location">
              <p className="venue">{concert.venue}</p>
              <p className="city">{concert.city}</p>
              <p className="state">{concert.state}</p>
            </div>
            <div className="setlist">
              <a href={concert.setList} target="_blank">Setlist</a>
            </div>
          </div>
        </div>
        <div className="poster">
          <img src={`/photos/${concert.poster}`} alt={`${concert.tourName} poster`} />
        </div>
        <div className="text" dangerouslySetInnerHTML={{ __html: concert.text }}></div>
        <div className="gallery">
          {Object.entries(concert.photos).map((photo) => {
            return <img src={`/photos/${photo[1]}`} alt={photo[0]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Concert;
