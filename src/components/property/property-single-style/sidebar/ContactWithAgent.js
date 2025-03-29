import Image from "next/image";
import Link from "next/link";
import React from "react";
import { User, Search } from "lucide-react";

const ContactWithAgent = ({ id, listings }) => {

  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  if (!data) {
    return <div>Loading...</div>;
  }

  const formatPhoneNumber = (phoneNumber) => {
    // Remove spaces, parentheses, and dashes
    return phoneNumber.replace(/[\s()-]/g, "");
  };

  return (
    <>
      <div className="agent-single d-sm-flex align-items-center pb25">
        <div className="single-img mb30-sm">
        <User size={60} color="black" />
          {/* <Image
            width={90}
            height={90}
            className="w90"
            src={data.executiveImage === "1" ?  "/images/team/agent-3.png" : data.ExecutiveImage}
            alt="avatar"
          /> */}
        </div>
        <div className="single-contant ml20 ml0-xs">
          <h6 className="title mb-1">{data.executiveName}</h6>
          <div className="agent-meta mb10 d-md-flex align-items-center">
            <a className="text fz15"  href={`tel:${formatPhoneNumber(data.executivePhone)}`}>
              <i className="flaticon-call pe-1" />
              {data.executivePhone}
            </a>
          </div>
          {/* <Link
            // href="/agent-single/3"
            href=""
            className="text-decoration-underline fw600">
            Ver Perfil
          </Link> */}
        </div>
      </div>
      {/* End agent-single */}

      <div className="d-grid">
        <Link href={`tel:${formatPhoneNumber(data.executivePhone)}`} className="ud-btn btn-white2" >
          Contactar ejecutivo
          <i className="fal fa-arrow-right-long" />
        </Link>
      </div>
    </>
  );
};

export default ContactWithAgent;
