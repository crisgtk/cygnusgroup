import React from "react";

const ContactMeta = () => {
  const contactInfoData = [
    {
      text: "Concepción",
      info: "Barros Arana 1098 Torre Mall del Centro Oficina #1807.",
      link: "#", // Empty link value for the first object
    },
    {
      text: "Chillán",
      info: "Av Libertad 845 Edificio Don Alfonso Oficina #303",
      link: "#",
    },
    {
      text: "Contactanos",
      info: "Ventas@jecygnus.com",
      link: "mailto:Ventas@jecygnus.com",
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5">
      {contactInfoData.map((contact, index) => (
        <div className="contact-info mb25" key={index}>
          <p className="info-title mb5">{contact.text}</p>
          {contact.link.startsWith("mailto:") ? (
            <h6 className="info-mail">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          ) : (
            <h6 className="info-phone">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
