import React from "react";
import Image from "next/image";
import { User, Search } from "lucide-react";

const SingleAgentInfo = ({ data }) => {

  const agentData = {
    id: data.executiveId,
    name: data.executiveName,
    phoneNumbers: [data.executivePhone],
    socialMedia: ["facebook", "instagram", "linkedin"],
  };

  const formatPhoneNumber = (phoneNumber) => {
    // Remove spaces, parentheses, and dashes
    return phoneNumber.replace(/[\s()-]/g, "");
  };

  return (
    <div className="agent-single d-sm-flex align-items-center bdrb1 mb30 pb25">
      <div className="single-img mb30-sm">
      <User size={60} color="black" />
        {/* <Image
          width={90}
          height={90}
          className="w90"
          src="/images/team/agent-3.png"
          alt="agent"
        /> */}
      </div>
      <div className="single-contant ml30 ml0-xs">
        <h6 className="title mb-1">{agentData.name}</h6>
        <div className="agent-meta mb10 d-md-flex align-items-center">
          {agentData.phoneNumbers.map((phoneNumber, index) => (
            <a key={index} className="text fz15 pe-2 bdrr1" href={`tel:${formatPhoneNumber(phoneNumber)}`}>
              <i className="flaticon-call pe-1 ps-1" />
              {phoneNumber}
            </a>
          ))}
          <a
            className="text fz15 ps-2"
            href={`https://wa.me/${formatPhoneNumber(agentData.phoneNumbers[0])}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="flaticon-whatsapp pe-1" />
            WhatsApp
          </a>
        </div>
        {/* <div className="agent-social">
          {agentData.socialMedia.map((social, index) => (
            <a key={index} className="mr20" href="#">
              <i className={`fab fa-${social}`} />
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default SingleAgentInfo;
