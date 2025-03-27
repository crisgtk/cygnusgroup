"use client";

import MainMenu from "@/components/common/MainMenu";
import SidebarPanel from "@/components/common/sidebar-panel";
import LoginSignupModal from "@/components/common/login-signup-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { getUser } from "@/server/menu";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const modalRef = useRef(null);
  const [userPreferences, setUserPreferences] = useState(null);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.querySelector('.btn-close').click();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("userPreferences");
      setUserPreferences(localData ? JSON.parse(localData) : null);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await getUser(email, password);
      
      if(data.length === 0){
        toast.error("Usuario o contraseña incorrectos");
      }else {

        const userPreferences = {
          ID: data[0].ID,
          Name: data[0].Name,
          TOKEN: data[0].Token
        };

        localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
        toast.success("Logeado correctamente");
        closeModal();
        window.location.reload();
      }
    } catch (error) {
      toast.error("Error", error);
      console.error("Error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userPreferences');
    window.location.reload(); // Recarga la página para reflejar el estado de cierre de sesión
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <ToastContainer className="custom-toast-container"/>
      <header
        className={
          "header-nav nav-homepage-style main-menu sticky slideInDown animated"
        }>
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos mr40">
                    <Link className="header-logo logo1" href="/home-v5">
                      <Image
                        width={500}
                        height={94}
                        src="/images/logo/logo2.png"
                        alt="Header Logo"
                      />
                    </Link>
                    <Link className="header-logo logo2" href="/">
                      <Image
                        width={500}
                        height={94}
                        src="/images/logo/logo2.png"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  {/* End Logo */}

                  <MainMenu />
                  {/* End Main Menu */}
                </div>
              </div>
              {/* End .col-auto */}

              {userPreferences ? (
                <div className="col-auto">
                  <div className="d-flex align-items-center">
                    <a
                      href="#"
                      className="login-info d-flex align-items-center"
                      onClick={() => setShowDropdown(!showDropdown)}
                      role="button">
                      <i className="far fa-user-circle fz16 me-2" />{" "}
                      <span className="d-none d-xl-block">Hola {userPreferences.Name}</span>
                    </a>
                    {showDropdown && (
                      <div className="dropdown-menu show">
                        <a className="dropdown-item" href="#" onClick={handleLogout}>Cerrar sesión</a>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="col-auto">
                  <div className="d-flex align-items-center">
                    <a
                      href="#"
                      className="login-info d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#loginSignupModal"
                      role="button">
                      <i className="far fa-user-circle fz16 me-2" />{" "}
                      <span className="d-none d-xl-block">Login</span>
                    </a>
                  </div>
                </div>
              )}
              {/* End .col-auto */}
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}

      {/* Signup Modal */}
      <div className="signup-modal">
        <div
          className="modal fade"
          id="loginSignupModal"
          tabIndex={-1}
          aria-labelledby="loginSignupModalLabel"
          aria-hidden="true">
          <div className="modal-dialog  modal-dialog-scrollable modal-dialog-centered">
            <LoginSignupModal email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit} modalRef={modalRef}/>
          </div>
        </div>
      </div>
      {/* End Signup Modal */}

      {/* DesktopSidebarMenu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="SidebarPanel"
        aria-labelledby="SidebarPanelLabel">
        <SidebarPanel />
      </div>
      {/* Sidebar Panel End */}
    </>
  );
};

export default Header;
