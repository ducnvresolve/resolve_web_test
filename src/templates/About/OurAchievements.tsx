"use client";

import React from "react";
import { BaseProps } from "@/types/base.types";

export default function OurAchievements({ params: { t } }: BaseProps) {
  return (
    <section className="w-full flex flex-col items-center px-6 animate-slideup-long-delayed mb-[100px]">
      <div className="w-full max-w-screen-xl">
        <h2
          id="our-achievements"
          className="font-bold text-center text-purple-700 text-3xl md:text-[40px] mb-10"
        >
          {t["our-achievements.title"]}
        </h2>
        <p className="md:text-lg leading-7 md:leading-8 mb-10 text-justify">
          {t["our-achievements.description"]}
        </p>
      </div>
      <div className="relative min-h-[90px] overflow-hidden">
        <div className="flex flex-row items-center gap-12 animate-customer-infinite-carousel">
          <img
            src={"/images/customer-bank-vpbank_logo.svg"}
            className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
            style={{ height: "60px", width: "auto" }}
            alt="techcombank"
          />
          <img
            src="/images/customer-bank-techcombank_logo.svg"
            className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
            style={{ height: "45px", width: "auto" }}
            alt="vpbank"
          />
          <img
            src="/images/customer-bank-sacombank_logo.svg"
            className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
            style={{ height: "60px", width: "auto" }}
            alt="sacombank"
          />
          <img
            src="/images/customer-bank-commerzbank_logo.svg"
            className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
            style={{ height: "60px", width: "auto" }}
            alt="commerzbank"
          />
          <img
            src="/images/customer-bank-standardcharteredbank_logo.svg"
            className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
            style={{ height: "60px", width: "auto" }}
            alt="standard-chartered-bank"
          />
          <img
            src="/images/customer-bank-royalbankofscotland_logo.svg"
            className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
            style={{ height: "60px", width: "auto" }}
            alt="royal-bank-of-scotland"
          />
          <img
            src={"/images/customer-bank-techcombank_logo.svg"}
            className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
            style={{ height: "60px", width: "auto" }}
            alt="techcombank"
          />
          <img
            src="/images/customer-bank-vpbank_logo.svg"
            className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
            style={{ height: "45px", width: "auto" }}
            alt="vpbank"
          />
          <img
            src="/images/customer-bank-sacombank_logo.svg"
            className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
            style={{ height: "60px", width: "auto" }}
            alt="sacombank"
          />
          <img
            src="/images/customer-bank-commerzbank_logo.svg"
            className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
            style={{ height: "60px", width: "auto" }}
            alt="commerzbank"
          />
          <img
            src="/images/customer-bank-standardcharteredbank_logo.svg"
            className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
            style={{ height: "60px", width: "auto" }}
            alt="standard-chartered-bank"
          />
          <img
            src="/images/customer-bank-royalbankofscotland_logo.svg"
            className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
            style={{ height: "60px", width: "auto" }}
            alt="royal-bank-of-scotland"
          />
        </div>
      </div>
    </section>
  );
}
