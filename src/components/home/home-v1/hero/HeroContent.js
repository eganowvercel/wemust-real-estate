"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const HeroContent = () => {
  const router = useRouter();
  const [search, setSearch] = useState();
  const [activeTab, setActiveTab] = useState("buy");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: "buy", label: "Rent" },
    // { id: "rent", label: "Rent" },
    // { id: "sold", label: "Sold" },
  ];

  return (
    <div className="advance-search-tab mt70 mt30-md mx-auto animate-up-3">
      <ul className="nav nav-tabs p-0 m-0">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style1">
              <div className="row">
                <div className="col-md-8 col-lg-9">
                  <div className="advance-search-field position-relative text-start">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <span className="icon flaticon-home-1" />
                        <input
                          className="form-control bgc-f7 bdrs12"
                          type="text"
                          name="search"
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder={`Enter an area you would like to ${tab.label} in.`}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* End .col-md-8 */}

                <div className="col-md-4 col-lg-3">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                    {/* <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal"
                    >
                      <span className="flaticon-settings" /> Advanced
                    </button> */}
                    <button
                      className="ud-btn btn-thm"
                      onClick={() =>
                        // router.push("/grid-default", { searchTerm: search })
                        router.push(
                          `/grid-default?searchTerm=${encodeURIComponent(
                            search
                          )}`
                        )
                      }
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
