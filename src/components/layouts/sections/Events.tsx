import React from "react";
import SectionHeader from "../section-header/SectionHeader";

export default function Events() {
  return (
    <div className="section__container">
      <SectionHeader title="Tour Schedules" link="kosong" />

      <div className="bg-white hover:shadow-lg hover:shadow-[rgba(255,255,255,.3)] rounded-lg overflow-hidden  transition-all duration-300 cursor-pointer mt-10">
        <figure className="w-[20rem]">
          <img className="w-full h-full" src="https://pbs.twimg.com/media/F875lQVWYAA5RmV.jpg:large" alt="Gambar festival" />
        </figure>
        <div className="">
          {/* <h3 className="text-xl font-medium text-gray-900 mb-2">World Tour</h3>
          <p className="text-gray-700 leading-snug">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minima accusantium placeat id cupiditate. Saepe.</p> */}
          <div className="mt-4">
            <p className="text-gray-700 font-semibold">Date:</p>
            <p className="text-gray-700">{"20 Oktober 2024"}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 font-semibold">Location:</p>
            <p className="text-gray-700">{"Japan"}</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-950 text-white py-2 px-4 rounded-lg font-semibold mt-6">Buy Ticket</button>
        </div>
      </div>
    </div>
  );
}
