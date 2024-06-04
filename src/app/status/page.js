"use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

import { useParams, useSearchParams } from "next/navigation";
import React from "react";

function page() {
  const params = useSearchParams();

  const status = params.get("status");

  return (
    <div>
      {/* <Header /> */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* End Mobile Nav  */}

      <section className="bgc-f7  ">
        <div className="d-flex justify-content-center ">
          {status === "success" ? (
            <FaCheckCircle className="text-success" size={70}/>
          ) : (
            <MdCancel className="text-danger" size={70} />
          )}
        </div>

        <h1 className={`text-center my-4`}>
          Your payment {status === "success" ? "was successful" : "failed"}{" "}
        </h1>
        <div className="d-flex justify-content-center">
          <Link href="/" className="ud-btn btn-danger">
            return to home
          </Link>
        </div>
      </section>

      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
    </div>
  );
}

export default page;
