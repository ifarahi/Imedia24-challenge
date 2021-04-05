import React from "react";

export default function DetailsCard({ name, height, weight }) {
  return (
    <div className="details-card">
      <div className="details-card__item card-name">
        <span className="key">Name</span>
        {name}
      </div>
      <div className="details-card__item card-height">
        <span className="key">Hieght</span>
        {height}
      </div>
      <div className="details-card__item card-weight">
        <span className="key">Weight</span>
        {weight}
      </div>
    </div>
  );
}
