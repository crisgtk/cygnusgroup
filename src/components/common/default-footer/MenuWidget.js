import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Horario de Atención",
      links: [
        { label: "Lunes-Viernes 09:00-13:00/14:00-18:00", href: "#" },
        { label: "Concepción", href: "#" },
        {
          label: "Torre mall del centro, 1809 piso 18, Oficina #1807",
          href: "#",
        },
        {
          label: "Chillán, Av Libertad 845 Edificio Don Alfonso Oficina #303",
          href: "#",
        },
      ],
    },
    {
      title: "otras páginas",
      links: [
        { label: "Inicio", href: "#" },
        { label: "Los Nogales", href: "#" },
        { label: "Los Cerezos", href: "#" },
        { label: "El Manzano", href: "#" },
        { label: "Los Cerezos II", href: "#" },
      ],
    },
  ];

  return (
    <>
      {" "}
      {menuSections.map((section, index) => (
        <div className="col-sm-6 col-lg-3" key={index}>
          <div className="footer-widget mb-4 mb-lg-5 ps-0 ps-lg-5">
            <div className="link-style1 mb-3">
              <h6 className="text-white mb25">{section.title}</h6>
              <ul className="ps-0">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;