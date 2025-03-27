"use client";
import React from "react";
import Select from "react-select";
import emailjs from "emailjs-com";
import SingleAgentInfo from "./SingleAgentInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InfoWithForm = ({ id, listings }) => {


  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  if (!data) {
    return <div>Loading...</div>;
  }

  const inqueryType = [
    { value: "Engineer", label: "Ingeniero" },
    { value: "Doctor", label: "Doctor" },
    { value: "Employee", label: "Empleado" },
    { value: "Businessman", label: "Empresario" },
    { value: "Other", label: "Otro" },
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q9bn4ak', 'template_yvck0o8', e.target, '9x-mtp4qFdy0LyxlH')
      .then((result) => {
        toast.success("Correo enviado correctamente")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          toast.error("Error al enviar el correo")
      });
  };

  return (
    <>
      <ToastContainer className="custom-toast-container"/>
      <SingleAgentInfo data={data} />
      <div className="row">
        <div className="col-md-12">
          <form className="form-style1 row" onSubmit={sendEmail}>
            <div className="col-md-6">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa nombre"
                  name="name"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa teléfono"
                  name="phone"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="mb20">
                <label className="heading-color ff-heading fw600 mb10">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="a@a.cl"
                  name="email"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-6">
              <div className="widget-wrapper sideborder-dropdown">
                <label className="heading-color ff-heading fw600 mb10">
                  Yo soy
                </label>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[inqueryType[0]]}
                    name="inquery_type"
                    options={inqueryType}
                    styles={customStyles}
                    className="custom-react_select"
                    classNamePrefix="select"
                    required
                    isClearable={false}
                  />
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-12">
              <div className="mb10">
                <label className="heading-color ff-heading fw600 mb10">
                  Mensaje
                </label>
                <textarea
                  cols={30}
                  rows={4}
                  placeholder="Hola, yo estoy interesado en esta propiedad..."
                  name="message"
                  required
                />
              </div>
            </div>
            {/* End .col */}

            <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
              {/* <label className="custom_checkbox fz14 ff-heading">
                By submitting this form I agree to Terms of Use
                <input type="checkbox" />
                <span className="checkmark" />
              </label> */}
            </div>
            {/* End .col */}
            <input type="hidden" name="executive_email" value={data.executiveEmail} />
            <input type="hidden" name="propiedad" value={data.title} />
            <div className="btn-area mt20">
              <button type="submit" className="ud-btn btn-white2">
                Enviar Información <i className="fal fa-arrow-right-long" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InfoWithForm;
