"use client";
import Select from "react-select";

const PropertyDescription = ({title, setTitle, descriptionDetail, setDescriptionDetail, category, setCategory, forRent, setForRent, status, setStatus, price, setPrice, setShortDescription, register, errors, Controller, control}) => {
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
              id="title"
              {...register("title", { required: "El título es obligatorio" })}
              onChange={(e) => setTitle(e.target.value)}
            />
             {errors.title && (
              <span className="text-danger">{errors.title.message}</span>
            )}
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
              id="descriptionDetail"
              {...register("descriptionDetail", { required: "La descripción es obligatoria" })}
              onChange={(e) => setDescriptionDetail(e.target.value)}
            />
              {errors.descriptionDetail && (
              <span className="text-danger">{errors.descriptionDetail.message}</span>
            )}
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
                id="category"
                {...register("category", { required: "La categoría es obligatoria" })}
                onChange={setCategory}
              />
                 {errors.category && (
              <span className="text-danger">{errors.category.message}</span>
            )}
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
                id="type"
                {...register("type", { required: "El tipo es obligatorio" })}
                onChange={setForRent}
              />
                   {errors.type && (
              <span className="text-danger">{errors.type.message}</span>
            )}
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
            <Controller
  name="statusProperty"
  control={control}
  rules={{ required: "El estado de la propiedad es obligatorio" }}
  render={({ field }) => (
    <Select
      {...field}
      options={PropertyStatus}
      styles={customStyles}
      className="select-custom pl-0"
      classNamePrefix="select"
      placeholder="Seleccione el estado"
    />
  )}
/>
              {errors.statusProperty && (
                <span className="text-danger">{errors.statusProperty.message}</span>
              )}
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
              id="price"
                {...register("price", { required: "El precio es obligatorio",validate: (value) => value > 0 || "El precio debe ser mayor a 0", })}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            {errors.price && (
              <span className="text-danger">{errors.price.message}</span>
            )}
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
              id="shortDescription"
              {...register("shortDescription", { required: "La descripción corta es obligatoria" })}
              onChange={(e) => setShortDescription(e.target.value)}
            />
            {errors.shortDescription && (
              <span className="text-danger">{errors.shortDescription.message}</span>
            )}
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
