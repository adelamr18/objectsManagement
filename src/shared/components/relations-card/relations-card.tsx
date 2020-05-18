import React from "react";
import "./relations-card.css";

interface relationsCardProps {
  name: string;
  type: string;
}

export default function RelationsCard(props: relationsCardProps) {
  const { name, type } = props;
  return (
    <div className="relations-card-container-inner">
      <div className="relations-info">
        <div className="relations-card">
          <div className="relations-card-title">
            <div className="card-title-text">{name}</div>
          </div>
          <div className="relations-card-body">
            <div className="relations-card-body-text">{type}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
