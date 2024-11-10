import React from "react";

const PersonalInfo = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Nombre de usuario
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Tu Nombre"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Teléfono
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Puesto
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Idioma
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Nombre de la empresa
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Número de impuesto
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-xl-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-12">
          <div className="mb10">
            <label className="heading-color ff-heading fw600 mb10">
              Sobre mí
            </label>
            <textarea
              cols={30}
              rows={4}
              placeholder="Hay muchas variaciones de pasajes."
              defaultValue={""}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-12">
          <div className="text-end">
            <button type="submit" className="ud-btn btn-dark">
              Actualizar perfil
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default PersonalInfo;
