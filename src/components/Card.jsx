import React from "react";

export default function Card(props) {
  return (
    <div className="card--container">
      <div className="card--inner">
        <img className="card--image" src={props.imageUrl} alt="" />

        <div className="card--lower">
          <div className="card--top">
            <img
              className="card--placeholder"
              src="images/placeholder.png"
              alt="placeholder"
            />
            <p className="card--country">{props.title}</p>
            <a href={props.googleMapsUrl}>View on google map</a>
          </div>

          <div className="card--bottom">
            <h1 className="card--place">{props.location}</h1>

            <h5 className="card--date">
              <span className="startDate">{props.startDate}</span> -{" "}
              <span className="endDate">{props.endDate}</span>
            </h5>

            <p className="card--text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
