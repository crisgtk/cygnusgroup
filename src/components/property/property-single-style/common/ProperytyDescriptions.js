import React from "react";

const ProperytyDescriptions = ({id, listings}) => {

  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <p className="text mb10">
       {data.parrafo1}
      </p>
      <div className="agent-single-accordion">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              style={{}}>
              <div className="accordion-body p-0">
                <p className="text">
                {data.parrafo2}
                </p>
              </div>
            </div>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button p-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne">
                Mostrar más
              </button>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
