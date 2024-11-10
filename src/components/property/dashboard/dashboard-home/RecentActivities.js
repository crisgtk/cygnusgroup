import React from "react";

const activities = [
  {
    icon: "flaticon-home",
    text: "Has recibido un mensaje en proyecto Parcela los cerezos II",
    highlight: "Parcela los cerezos II",
  },
  {
    icon: "flaticon-review",
    text: "Has recibido un mensaje en Proyecto los Nogales Quillon",
    highlight: "los Nogales Quillon",
  },
  {
    icon: "flaticon-like",
    text: "Has recibido un mensaje en Proyecto Florida III",
    highlight: "Florida III",
  },
  {
    icon: "flaticon-home",
    text: "Has recibido un mensaje en Proyecto Los Cerezos Quinchimali",
    highlight: "Los Cerezos Quinchimali",
  },
];

const RecentActivities = () => {
  return (
    <>
      {activities.map((activity, index) => (
        <div
          key={index}
          className="recent-activity d-sm-flex align-items-center mb20">
          <span className={`icon me-3 ${activity.icon} flex-shrink-0`} />
          <p className="text mb-0 flex-grow-1">
            {activity.text.split(activity.highlight).map((part, i, array) =>
              i === array.length - 1 ? (
                part
              ) : (
                <>
                  {part}
                  <span className="fw600">{activity.highlight}</span>
                </>
              )
            )}
          </p>
        </div>
      ))}
      <div className="d-grid">
        <a href="#" className="ud-btn btn-white2">
          Ver más
          <i className="fal fa-arrow-right-long" />
        </a>
      </div>
    </>
  );
};

export default RecentActivities;
