import React from "react";
import SectionHeader from "../section-header/SectionHeader";
import Image from "next/image";

export default function Events() {
  return (
    <div className="section__container">
      <SectionHeader title="Tour Schedules" link="kosong" />

      <div className="mt-10 cursor-pointer overflow-hidden rounded-lg bg-white  transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(255,255,255,.3)]">
        <figure className="w-[20rem]">
          <Image
            className="h-full w-full"
            src="https://pbs.twimg.com/media/F875lQVWYAA5RmV.jpg:large"
            alt="Gambar festival"
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </figure>
        <div className="">
          {/* <h3 className="text-xl font-medium text-gray-900 mb-2">World Tour</h3>
          <p className="text-gray-700 leading-snug">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima accusantium placeat id cupiditate. Saepe.</p> */}
          <div className="mt-4">
            <p className="font-semibold text-gray-700">Date:</p>
            <p className="text-gray-700">{"20 Oktober 2024"}</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-gray-700">Location:</p>
            <p className="text-gray-700">{"Japan"}</p>
          </div>
          <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-950">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
