"use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import React, { Suspense } from "react";
import PropertyFiltering from "@/components/listing/grid-view/grid-default/PropertyFiltering";
import { useSearchParams } from "next/navigation";

function SearchBarFallback() {
  return <>Loading...</>;
}

function GridContent() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  function checkSearchTerm(searchTerm) {
    return searchTerm ? searchTerm : "";
  }

  return (
    <>
      <DefaultHeader />
      <MobileMenu />
      <section className="breadcumb-section bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Properties for rent</h2>
                <a
                  className="filter-btn-left mobile-filter-btn d-block d-lg-none"
                  data-bs-toggle="offcanvas"
                  href="#listingSidebarFilter"
                  role="button"
                  aria-controls="listingSidebarFilter"
                >
                  <span className="flaticon-settings" /> Filter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PropertyFiltering searchTerm={checkSearchTerm(searchTerm)} />
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
    </>
  );
}

const GridDefault = () => {
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <GridContent />
    </Suspense>
  );
};

export default GridDefault;
