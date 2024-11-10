import React from "react";
import MultiSelectField from "./MultiSelectField";
import StructureType from "./StructureType";

const DetailsFiled = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Tamaño en pies (solo números)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Tamaño del lote en pies (solo números)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Habitaciones
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Dormitorios
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Baños</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              ID personalizado (texto)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Garajes
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Tamaño del garaje
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Año de construcción (numérico)
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Disponible desde (fecha)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="99.aa.aaaa"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Sótano
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Detalles extra
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Techo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Material Exterior
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <StructureType />
      </div>

      <div className="row">
        <MultiSelectField />

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Notas del propietario/agente (no visible en el frontend)
            </label>
            <textarea
              cols={30}
              rows={5}
              placeholder="Hay muchas variaciones de pasajes."
              defaultValue=""
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default DetailsFiled;
