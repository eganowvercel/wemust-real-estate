import Image from "next/image";
import Link from "next/link";
import React from "react";

const Office = () => {
  const offices = [
    {
      id: 1,
      city: "Accra",
      icon: "/images/icon/london.svg",
      address: "east legon,accra",
      phoneNumber: "(233) 245 799 703",
    },
    // {
    //   id: 2,
    //   city: "London",
    //   icon: "/images/icon/london.svg",
    //   address: "1301 2nd Ave, Seattle, WA 98101",
    //   phoneNumber: "(315) 905-2321",
    // },
    // {
    //   id: 3,
    //   city: "New York",
    //   icon: "/images/icon/new-york.svg",
    //   address: "1301 2nd Ave, Seattle, WA 98101",
    //   phoneNumber: "(315) 905-2321",
    // },
    // Add more office objects here...
  ];

  return (
    <div className=' d-flex justify-content-center'>
      {offices.map((office) => (
        <div className="col-sm-6 col-lg-4 " key={office.id}>
          <div className="iconbox-style8 text-center">
            <div className="icon">
              <Image width={120} height={120} src={office.icon} alt="icon" />
            </div>
            <div className="iconbox-content">
              <h4 className="title">{office.city}</h4>
              <p className="text mb-1">{office.address}</p>
              <h6 className="mb10">{office.phoneNumber}</h6>
              <Link className="text-decoration-underline" href="https://www.google.com/maps/place/East+Legon,+Accra,+Ghana/@5.6363812,-0.1686153,15z/data=!3m1!4b1!4m6!3m5!1s0xfdf9b501278f4a5:0xca081548a0c20ffd!8m2!3d5.6358281!4d-0.1613592!16s%2Fg%2F11btxgrxp9?entry=ttu">
                Open Google Map
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Office;
