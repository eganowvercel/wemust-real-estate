"use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
// import { useRouter } from 'next/router'
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
export const dynamic = 'force-dynamic'
function Page() {

//   const params = useSearchParams();

//   const status = params.get("status");
//   // const params = useRouter()
// console.log(status);

function PageContent() {
  const params = useSearchParams();
  const status = params.get("status");

  return (
    <>
      <DefaultHeader />
      <MobileMenu />
      <section className="bgc-f7">
        <div className="d-flex justify-content-center">
          {status === "success" ? (
            <FaCheckCircle className="text-success" size={70} />
          ) : (
            <MdCancel className="text-danger" size={70} />
          )}
        </div>
        <h1 className="text-center my-4">
          Your payment {status === "success" ? "was successful" : "failed"}
        </h1>
        <div className="d-flex justify-content-center">
        <Link href="/" className="ud-btn btn-dark">
                  Go Back To Homepages
                  <i className="fal fa-arrow-right-long" />
                </Link>
        </div>
      </section>
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
    </>
  );
}
  return (
    <Suspense fallback={<p>...loading</p>}>
    <PageContent />
  </Suspense>
  );
}

export default Page;
