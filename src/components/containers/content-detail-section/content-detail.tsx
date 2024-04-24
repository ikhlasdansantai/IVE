"use client";

import { useState } from "react";

export default function ContentDetail({ title, desc }: any) {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="content__detail mt-3 md:mt-8">
      <h1 className="font-semibold text-[#121212] md:text-3xl">{title}</h1>
      <span className="mt-2 block text-xs">10 Hari Yang Lalu</span>
    </div>
  );
}

function ShowContentDetail({ setState, desc }: any) {
  return (
    <div className="mt-6">
      <p>{desc}</p>

      <button
        onClick={() => setState(false)}
        className="mt-4 font-semibold text-gray-700 underline"
      >
        Show Less
      </button>
    </div>
  );
}
