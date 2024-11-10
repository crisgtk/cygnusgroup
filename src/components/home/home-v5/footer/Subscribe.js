const Subscribe = () => {
  return (
    <form className="mailchimp-widget text-center mb30-md mb60">
      <h2 className="title text-white">
        Subscribete y recibe nuestras mejores ofertas a tu correo
      </h2>
      <h6 className="title text-white mb35 fw400">
        No te preocupes, nosotros no enviamos spam.
      </h6>
      <div className="mailchimp-style2">
        <input
          type="email"
          className="form-control"
          placeholder="Ingresa tu correo"
          required
        />
        <button className="ud-btn btn-thm" type="submit">
          Subcribete
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
