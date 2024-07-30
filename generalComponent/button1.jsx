import React from "react";

function button({ value, styleButton ,bgP, backgroundGradient1 , backgroundGradient2 , backgroundGradient3, backgroundGradient4 }) {
  return (
    <>
      <button
        className={`${styleButton} capitalize flex relative justify-center items-center overflow-hidden rounded-full`}
      >
        <p className={`z-50 px-8 py-2 ${bgP}`}>{value}</p>
        <div className={`absolute top-0 w-[100%] h-[100%] ${backgroundGradient1}`}></div>
        <div className={`absolute top-0 w-[100%] h-[100%] ${backgroundGradient2}`}></div>
        <div className={`absolute top-0 w-[100%] h-[100%] ${backgroundGradient3}`}></div>
        <div className={`absolute top-0 w-[100%] h-[100%] ${backgroundGradient4}`}></div>
      </button>
    </>
  );
}

export default button;
