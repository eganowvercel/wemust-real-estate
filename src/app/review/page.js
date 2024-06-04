"use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import FeaturedListings from "@/components/home/home-v1/FeatuerdListings";
import Header from "@/components/home/home-v1/Header";
import listings from "@/data/listings";
import { BASE_URL } from "@/utilis/constants";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";

function page() {
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const data = listings.filter((elm) => elm.id == query)[0] || listings[0];

  // console.log(data);

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

  async function onSubmit() {
    const postData = {
      payerInfo: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        mobile_number: formData.phone,
      },
      customer_id: "4BDFB5479C224EE9",
      callback_url: "https://localhost:3000",
      amount: formData.price
        ?.replace("$", "")
        .replace("₵", "")
        .replace(/,/g, ""),
      ip_address: formData.iP,
    };

    console.log(postData);
    setLoading(true);

    try {
      const sendRequest = await axios.post(`${BASE_URL}`, postData);
      setLoading(false);
      if (sendRequest.data.public_key) {
        setLoading(false);
        window.location.href = `https://eganow-mc-checkout.vercel.app/${sendRequest.data.public_key}`;
      }
      // console.log(sendRequest.data.public_key);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    // console.log(localStorage.getItem("formData"));
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
            <div
              className="col-lg-6 mx-auto "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                style={{
                  backgroundColor: "white", // 50% transparency
                  // padding: '20px',
                  color: "black",
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
                    <button
                      disabled={loading}
                      onClick={onSubmit}
                      type="submit"
                      className="ud-btn btn-danger mt-2"
                    >
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
