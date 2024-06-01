"use client";
import { useFormHandler } from "@/app/useform";
import { defaultFormValues } from "@/app/useform/defaultFormValues";
import listings from "@/data/listings";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ScheduleTour = ({ id }) => {
  const [price, setPrice] = useState("");
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  const router = useRouter();

  // console.log(data);
  const { register, handleSubmit, watch, getValues } = useForm({
    mode: "onChange",
    defaultValues: defaultFormValues,
  });
  const options = [
    { label: "Select a duration", value: "" },
    { label: "1 Month", value: "1" },
    { label: "3 Months", value: "3" },
    { label: "6 Months", value: "6" },
    { label: "1 Year", value: "12" },
    { label: "2 Years", value: "24" },
  ];

  async function onSubmit(values) {
    const data = {
      ...values,
      price,
    };

    console.log(values);

    if (values.duration === "") {
      return;
    }
    localStorage.setItem("formData", JSON.stringify(data));
    router.push(`/review?q=${id}`);
  }

  useEffect(() => {
    if (data?.price) {
      let cleanedValue = data.price.replace(/[$,₵]/g, "").trim();
      // Convert the cleaned string to an integer
      let amount = parseInt(cleanedValue, 10);

      let duration = parseInt(getValues("duration"), 10);
      let totalAmount = amount * duration;

      let sign = data.price.includes("$") ? "$" : "₵";
      setPrice(`${sign} ${new Intl.NumberFormat().format(totalAmount)}`);
    }
  }, [watch("duration")]);

  return (
    <div className="ps-navtab">
      {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id} role="presentation">
            <button
              className={`nav-link${
                tab.id === "inperson" ? " active mr15 mb5-lg" : ""
              }`}
              id={`pills-${tab.id}-tab`}
              data-bs-toggle="pill"
              data-bs-target={`#pills-${tab.id}`}
              type="button"
              role="tab"
              aria-controls={`pills-${tab.id}`}
              aria-selected={tab.id === "inperson" ? "true" : "false"}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul> */}
      {/* End nav-pills */}

      <div className="tab-content" id="pills-tabContent">
        <form onSubmit={handleSubmit(onSubmit)} className="form-style1 mt-2">
          <div className="row">
            <div className="col-md-12">
              <div className="mb20">
                <input
                  {...register("firstName")}
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb20">
                <input
                  {...register("lastName")}
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            {/* End .col-12 */}

            <div className="col-lg-12">
              <div className="mb20">
                <input
                  type="text"
                  {...register("phone")}
                  className="form-control"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            {/* End .col-12 */}

            <div className="col-lg-12">
              <div className="mb20">
                <input
                  type="text"
                  {...register("email")}
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            {/* End .col-12 */}

            <div className="col-md-12">
              <div className="mb20">
                {/* <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    /> */}
                <select
                  {...register("duration")}
                  name="duration"
                  id="duration"
                  className="form-control"
                >
                  {/* <option disabled >
                    {" "}
                    how long are you renting for
                  </option> */}
                  {options.map((option, i) => {
                    return (
                      <option key={i} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* End .col-12 */}

            <div className="col-md-12">
              {getValues("duration") && (
                <div className="mb10">
                  <h4>
                    You pay :{" "}
                    <span className="text-success">{price ? price : ""}</span>{" "}
                  </h4>
                </div>
              )}
            </div>
            {/* End .col-12 */}

            <div className="col-md-12">
              <div className="d-grid">
                <button type="submit" className="ud-btn btn-danger mt-2">
                  Pay with eganow
                  <i className="fal fa-arrow-right-long" />
                </button>
              </div>
            </div>
            {/* End .col-12 */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleTour;
