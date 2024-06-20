import React from "react";
import listings from "@/data/listings";

const PropertyFeaturesAminites = ({id}) => {
  const featuresAmenitiesData = [
    ["Air Conditioning", "Barbeque", "Dryer", "Gym"],
    ["Lawn", "Microwave", "Outdoor Shower", "Refrigerator"],
    ["Swimming Pool", "TV Cable", "Washer", "WiFi6"],
  ];

  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

// console.log(data);
  return (
    <>
      {data?.features?.map((item, rowIndex) => (
        <div key={rowIndex} className="col-sm-6 col-md-4">
          <div className="pd-list">
            {/* {row.map((item, index) => ( */}
              <p  className="text mb10">
                <i className="fas fa-circle fz6 align-middle pe-2" />
                {item}
              </p>
            {/* ))} */}
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyFeaturesAminites;
