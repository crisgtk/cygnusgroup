import { getUser } from "@/server/menu";
import Link from "next/link";
import React from "react";


const SignIn = ({email, password, setEmail, setPassword, handleSubmit}) => {

  return (
    <>
    <form className="form-style1" onSubmit={handleSubmit}>
      <div className="mb25">
        <label className="form-label fw600 dark-color">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Ingrese Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {/* End email */}

      <div className="mb15">
        <label className="form-label fw600 dark-color">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Ingrese Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {/* End Password */}

      <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb10">
        {/* <label className="custom_checkbox fz14 ff-heading">
          Recordarme
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />
        </label> */}
        {/* <a className="fz14 ff-heading" href="#">
          Olividaste tu password?
        </a> */}
      </div>
      {/* End  Lost your password? */}

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" type="submit">
          Iniciar sesión <i className="fal fa-arrow-right-long" />
        </button>
      </div>
      {/* End submit */}

      <div className="hr_content mb20">
        <hr />
        <span className="hr_top_text">O</span>
      </div>
    </form>
    </>
  );
};

export default SignIn;
