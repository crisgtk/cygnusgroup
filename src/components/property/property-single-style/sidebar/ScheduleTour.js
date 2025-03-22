import React from "react";
import emailjs from "emailjs-com";




const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_q9bn4ak', 'template_1nx4h4s', e.target, '9x-mtp4qFdy0LyxlH')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


const ScheduleTour = ({ id, listings }) => {


  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  if (!data) {
    return <div>Loading...</div>;
  }

  const tabs = [
    {
      id: "inperson",
      label: "Personalmente",
    },
    {
      id: "videochat",
      label: "Video Chat",
    },
  ];


  return (
    <div className="ps-navtab">
      <div className="tab-content" id="pills-tabContent">
        {tabs.map((tab) => (
          <div
            className={`tab-pane fade${
              tab.id === "inperson" ? " show active" : ""
            }`}
            id={`pills-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`pills-${tab.id}-tab`}
            key={tab.id}>
            <form className="form-style1" onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="dia y hora"
                      name="date_time"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      name="name"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telefono"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb20">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb10">
                    <textarea
                      cols={30}
                      rows={4}
                      placeholder="Escribe algun mensaje"
                      name="message"
                      required
                    />
                  </div>
                </div>


                <input type="hidden" name="executiveEmail" value={data.executiveEmail} />
                <input type="hidden" name="propiedad" value={data.title} />
                <div className="col-md-12">
                  <div className="d-grid">
                    <button type="submit" className="ud-btn btn-thm">
                      Enviar solicitud
                      <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTour;
