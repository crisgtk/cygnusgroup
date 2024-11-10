import React from "react";

const ProperytyDescriptions = () => {
  return (
    <>
      <p className="text mb10">
        Esta casa de 3 habitaciones con un altillo y 2 baños en la comunidad
        cerrada de The Hideout lo tiene todo. Desde el plano de planta abierto
        hasta la abundante luz natural que entra por las ventanas, esta casa es
        perfecta para recibir invitados. La sala de estar y el comedor tienen
        techos altos abovedados y una hermosa chimenea. Disfrutarás pasar tiempo
        en la terraza admirando las hermosas vistas. En la cocina encontrarás
        electrodomésticos de acero inoxidable, un salpicadero de azulejos y una
        barra de desayuno.
      </p>
      <div className="agent-single-accordion">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              style={{}}>
              <div className="accordion-body p-0">
                <p className="text">
                  Contenido de marcador de posición para este acordeón, que está
                  destinado a demostrar la clase. Este es el cuerpo del acordeón
                  del primer elemento, donde obtienes un rendimiento innovador y
                  una increíble duración de batería. A esto se suma una
                  impresionante pantalla Liquid Retina XDR, la mejor cámara y
                  audio jamás vistos en una MacBook, y todos los puertos que
                  necesitas.
                </p>
              </div>
            </div>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button p-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne">
                Mostrar más
              </button>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
