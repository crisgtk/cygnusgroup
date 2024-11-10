import Explore from "@/components/common/Explore";
import Footer from "@/components/home/home-v5/footer";
import MobileMenu from "@/components/common/mobile-menu";
import FeaturedListings from "@/components/home/home-v5/FeatuerdListings";
import Header from "@/components/home/home-v5/Header";
import Partner from "@/components/common/Partner";
import PropertiesByCities from "@/components/home/home-v5/PropertiesByCities";
import Testimonial from "@/components/home/home-v5/Testimonial";
import FilterWithProperties from "@/components/home/home-v5/filter-with-property";
import Blog from "@/components/common/Blog";
import Hero from "@/components/home/home-v5/Hero";
import ApartmentTypes from "@/components/home/home-v5/ApartmentTypes";
import Cta from "@/components/home/home-v5/Cta";
import Link from "next/link";
import PropertyListing from "@/components/home/home-v5/PropertyListing";

export const metadata = {
  title: "cygnusgroup Portal Inmobiliario",
};

const Home_V5 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Hero Slide */}
      <div className="banner-wrapper position-relative">
        <section className="thumbimg-countnumber-carousel p-0">
          <Hero />
        </section>
      </div>
      {/* Edn Hero Slide */}

      {/* Filter with properties */}
      <section className="pt-0 pb110 bgc-f7 pb50-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <FilterWithProperties />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Filter with properties */}

      {/* Discover Our Featured Listings */}
      <section className="pt-0 pb110 bgc-f7 pb50-md">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">
                  Descubra nuestras propiedades destacadas
                </h2>
                <p className="paragraph">
                  Proyectos con escrituración inmediata
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/grid-full-3-col">
                  Ver todas las propiedades
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Discover Our Featured Listings */}

      {/* Explore property-city */}
      <section className="pb40-md pb90">
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="100">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Propiedades por Sector</h2>
                <p className="paragraph">En el lugar que siempre soñaste</p>
              </div>
            </div>
            {/* End col-lg-9 */}

            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/map-v4">
                  Ver todas los sectores{" "}
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            {/* End col-lg-3 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider position-relative">
                <PropertiesByCities />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Explore property-city */}

      {/* Our Testimonials */}
      <section className="pb50-md">
        <div className="container maxw1600">
          <div className="row  justify-content-center text-center align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300">
                <h2 className="title">La gente nos recomienda</h2>
                <p className="paragraph">
                  Mira los comentarios de nuestros clientes :)
                </p>
              </div>
            </div>
            {/* End header */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="testimonial-slider"
                data-aos="fade-up"
                data-aos-delay="300">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Testimonials */}

      {/* Popular Property */}
      {/* <PropertyListing /> */}
      {/* End  Popular Property */}

      {/* Our Partners */}
      {/* <section className="our-partners pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300">
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Our Partners */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V5;
