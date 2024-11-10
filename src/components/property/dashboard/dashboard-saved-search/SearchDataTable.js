"use client";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const listingData = [
  {
    title: "los cerezos Quinchamali",
    date: "December 31, 2022",
  },
  {
    title: "Los Nogales",
    date: "December 31, 2022",
  },
  {
    title: "Florida 4",
    date: "December 31, 2022",
  },
  {
    title: "Cerezos 2",
    date: "December 31, 2022",
  },
];

const SearchDataTable = () => {
  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Fecha Creación</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {listingData.map((listing, index) => (
          <tr key={index}>
            <th scope="row">{listing.title}</th>
            <td>{listing.date}</td>
            <td>
              <div className="d-flex">
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`full_screen-${listing.id}`}>
                  <span className="flaticon-fullscreen-1" />
                </button>
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`edit-${listing.id}`}>
                  <span className="fas fa-pen fa" />
                </button>
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`delete-${listing.id}`}>
                  <span className="flaticon-bin" />
                </button>

                <ReactTooltip
                  id={`full_screen-${listing.id}`}
                  place="top"
                  content="Full Screen"
                />
                <ReactTooltip
                  id={`edit-${listing.id}`}
                  place="top"
                  content="Edi"
                />
                <ReactTooltip
                  id={`delete-${listing.id}`}
                  place="top"
                  content="Delete"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchDataTable;
