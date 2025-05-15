import { formatPhoneNumber } from "@/utilis/formatPhoneNumber";
import React from "react";

const ContactMeta = () => {
  const contactInfoData = [
    {
      text: "Concepción",
      info: "Barros Arana 1098, Torre Mall del Centro Oficina #1807.",
      link: "#", // Empty link value for the first object
      tel: "Cel +56 9 2383 0830"
    },
    {
      text: "Chillán",
      info: "Calle 18 de septiembre 246, Edificio Centro Urbano 18-S Oficina #312",
      link: "#",
      tel: "Cel + 56 9 6676 4574"
    },
    {
      text: "Los Angeles",
      info: "José Manso de Velazco 221 Oficina #1102",
      link: "#",
       tel: "Cel + 56 9 7306 2812"
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
            <>
            <h6 className="info-mail">
              <a href={contact.link}>{contact.info}</a>
            </h6>
          </>
          ) : (
            <>
            <h6 className="info-phone">
              <a href="/">{contact.info}</a>
            </h6>
              <h6 className="info-phone">
              <a href={`tel:${formatPhoneNumber(contact.tel)}`}>{contact.tel}</a>
            </h6>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
