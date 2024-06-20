import React from "react";

const ContactInfo = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Customer Care",
      phone: "+(233) 0244 000 000",
      phoneLink: "tel:+233244000000", // Changed phoneLink to tel: URI
    },
    {
      id: 2,
      title: "Email us",
      mail: "hi@wemust.com",
      mailLink: "mailto:hi@wemust.com", // Changed mailLink to direct email address
    },
  ];

  return (
    <>
      {contactInfo.map((info) => (
        <div className="col-auto" key={info.id}>
          <div className="contact-info">
            <p className="info-title dark-color">{info.title}</p>
            {info.phone && (
              <h6 className="info-phone dark-color">
                <a href={info.phoneHref}>{info.phone}</a>
              </h6>
            )}
            {info.mail && (
              <h6 className="info-mail dark-color">
                <a href={info.mailLink}>{info.mail}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
