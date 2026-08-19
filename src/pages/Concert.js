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

  const colors = ["one", "two", "three", "five"];

  const bg_color = colors[Math.floor(Math.random() * 4)];

  const concert_class =
    concert.artist.split(" ").join("-").toLowerCase().replaceAll("&", "") +
    "-" +
    concert.date.m.toLowerCase() +
    "-" +
    concert.date.y;

  // const openTwoLinks = (event) =>{
  //   event.preventDefault();
  //   window.open(concert.setList, '_blank');
  //   window.open(concert.setList2, '_blank');
  //   if (concert_class === "ne-yo--akon-july-2026"){
  //     console.log("neyo and akon")
  //     const setListLink = document.getElementById("setlist_link")
  //     // setListLink.href = concert.setList;
  //     setListLink.addEventListener("click", openTwoLinks())
  //   }
  // }

  // if (concert_class === "ne-yo--akon-july-2026"){
  //   const setListContainer = document.getElementsByClassName("setlist")

  //   const setListLink2 = document.createElement('a');
  //   setListLink2.href = concert.setList2;
  //   setListLink2.target = "_blank"

  //   setListContainer[0].appendChild(setListLink2)
  // }

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
            {concert.setList2 ? (
              <div className="setlist">
                <a id="setlist_link" href={concert.setList} target="_blank" rel="noreferrer">
                  Setlist 1
                </a>
                <a
                  className="second_setlist"
                  href={concert.setList2}
                  target="_blank"
                  rel="noreferrer"
                >
                  SetList 2
                </a>
              </div>
            ) : (
              <div className="setlist">
                <a id="setlist_link" href={concert.setList} target="_blank" rel="noreferrer">
                  Setlist
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="poster">
          <img
            src={`/photos/${concert.poster}`}
            alt={`${concert.tourName} poster`}
          />
        </div>
        <div
          className="text"
          dangerouslySetInnerHTML={{ __html: concert.text }}
        ></div>
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
