"use client";
import Select from "react-select";

const PropertyDescription = ({title, setTitle, descriptionDetail, setDescriptionDetail, category, setCategory, forRent, setForRent, status, setStatus, price, setPrice, setShortDescription}) => {
  const catergoryOptions = [
    { value: 5, label: "Departamentos" },
    { value: 4, label: "Casas" },
    ,
    { value: 3, label: "Oficinas" },
    { value: 2, label: "Parcelas" },
    { value: 1, label: "Terrenos" },
  ];
  const listedIn = [
    { value: false, label: "Venta" },
    { value: true, label: "Arriendo" },
  ];
  const PropertyStatus = [
    { value: "All Cities", label: "Publicada" },
    { value: "Pending", label: "Pendiente" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Titulo
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Descripción
            </label>
            <textarea
              cols={30}
              rows={5}
              placeholder="Ingrese una descripción para la propiedad."
              value={descriptionDetail}
              onChange={(e) => setDescriptionDetail(e.target.value)}
            />
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Seleccione Categoria
            </label>
            <div className="location-area">
              <Select
                name="colors"
                options={catergoryOptions}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                onChange={setCategory}
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Tipo</label>
            <div className="location-area">
              <Select
                name="colors"
                options={listedIn}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                onChange={setForRent}
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Estado de la propiedad
            </label>
            <div className="location-area">
              <Select
                name="colors"
                options={PropertyStatus}
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                onChange={setStatus}
              />
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Precio $ (sin puntos EJ: 1000000000)
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="9000000"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">Desctipción corta ("para slice")</label>
            <input
              type="text"
              className="form-control"
              placeholder="descripcion corta"
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </div>
        </div>
        {/* End .col-6 */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">XXX</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
        </div> */}
        {/* End .col-6 */}
      </div>
    </form>
  );
};

export default PropertyDescription;
