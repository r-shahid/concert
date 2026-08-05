import React from "react";
import { Link } from "react-router-dom";
import "../styles/ticket.css";

function Ticket({ allConcerts }) {
  for (let i = 0 ; i < allConcerts.length; i++){
    allConcerts[i].index = i+1
  }

  return (
    <div className="Ticket">
      {allConcerts.map((concert) => {
        return (
          <Link
            className="stack"
            key={concert.index}
            // style={{ "--index": concert.index }}
            to={`/concert/${concert.date.y}/${concert.slug}`}
          >
            <div className="ticket-image">
              <img
                src={`photos/${concert.thumbnail}`}
                alt={`${concert.artist} at ${concert.venue}`}
              />
            </div>
            <div className="ticket-content">
              <span className="ticket-artist">{concert.artist}</span>
              <div className="tour-name">{concert.tourName}</div>
              <div className="location">
                <p className="venue">{concert.venue}</p>
                <div className="place">
                  <p className="city-state">{concert.city}, {concert.state}</p>
                </div>
              </div>
              <p className="date">{concert.date.m} {concert.date.d}, {concert.date.y}</p>
              <div className="seats">
                <span className="section">{concert.section}</span>
                <span className="row">{concert.row}</span>
                <span className="seat">{concert.seat}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Ticket;
