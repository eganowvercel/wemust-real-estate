"use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import FeaturedListings from "@/components/home/home-v1/FeatuerdListings";
import Header from "@/components/home/home-v1/Header";
import listings from "@/data/listings";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";

function page() {
  const [formData, setFormData] = useState();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const data = listings.filter((elm) => elm.id == query)[0] || listings[0];

  console.log(data);

  function getDuration() {
    if (formData?.duration >= 12) {
      const years = formData.duration / 12;
      return `${years} year${years !== 1 ? "s" : ""}`;
    } else {
      return `${formData?.duration} month${
        formData?.duration !== 1 ? "s" : ""
      }`;
    }
  }

  useEffect(() => {
    console.log(localStorage.getItem("formData"));
    setFormData(JSON.parse(localStorage.getItem("formData")));
  }, []);
  return (
    <div>
      {/* <Header /> */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      <section className="bgc-f7  ">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Review Payment</h2>
                {/* <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p> */}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                {/* <Link className="ud-btn2" href="/grid-default">
                  See All Properties
                  <i className="fal fa-arrow-right-long" />
                </Link> */}
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-6 mx-auto " data-aos="fade-up" data-aos-delay="200">
              {/* <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h2>{data?.title}</h2>
        </div>
        <div className="card-body">
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label"><strong>Name:</strong></label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">{formData?.name}</p>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label"><strong>Phone:</strong></label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">{formData?.phone}</p>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label"><strong>Email:</strong></label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">{formData?.email}</p>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label"><strong>Price:</strong></label>
            <div className="col-sm-8">
              <p className="form-control-plaintext">{formData?.price}</p>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-primary">Confirm Payment</button>
        </div>
      </div>
      
    </div> */}

              <div
                style={{
                  backgroundColor: 'white', // 50% transparency
                  // padding: '20px',
                  color: 'black',
                  
                }}
                class="  border mx-auto rounded d-flex flex-column p-2 "
              >
                <div class="p-2 me-3">
                  {/* <h4 className="text-center">Order Recap</h4> */}
                </div>
                <div class="p-2 d-flex">
                  <b class="col-4">First Name</b>
                  <div class="ms-auto">{formData?.firstName}</div>
                </div>
                <div class="p-2 d-flex">
                  <b class="col-4">Last Name</b>
                  <div class="ms-auto">{formData?.lastName}</div>
                </div>
                <div class="p-2 d-flex">
                  <b class="col-4">Telephone No.</b>
                  <div class="ms-auto">{formData?.phone}</div>
                </div>
                <div class="p-2 d-flex">
                  <b class="col-4">Email</b>
                  <div class="ms-auto">{formData?.email}</div>
                </div>

                <div class="border-top px-2 mx-2"></div>
                {/* <div class="p-2 d-flex pt-3">
                  <div class="col-8">
                    Total Deductible, Coinsurance, and Copay
                  </div>
                  <div class="ms-auto">$40.00</div>
                </div> */}
                {/* <div class="p-2 d-flex">
                  <div class="col-8">
                    Maximum out-of-pocket on Insurance Policy (not reached)
                  </div>
                  <div class="ms-auto">$6500.00</div>
                </div> */}
                <div class="border-top px-2 mx-2"></div>
                <div class="p-2 d-flex">
                  <b class="col-4">Property title</b>
                  <div class="ms-auto">{data?.title}</div>
                </div>
                <div class="p-2 d-flex">
                  <b class="col-4">Duration</b>
                  <div class="ms-auto">{getDuration()}</div>
                </div>
                <div class="border-top px-2 mx-2"></div>
                <div class="p-2 d-flex pt-3">
                  <div class="col-8">
                    <b>Total</b>
                  </div>
                  <div class="ms-auto">
                    <b class="text-success">{formData?.price}</b>
                  </div>
                </div>
                <div className="col-md-5  mx-auto">
                  <div className="d-grid">
                    <button type="submit" className="ud-btn btn-danger mt-2">
                      Pay with eganow
                      <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
    </div>
  );
}

export default page;
