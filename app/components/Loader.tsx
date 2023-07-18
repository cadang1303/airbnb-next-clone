"use client";

import React from "react";

import { PuffLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <PuffLoader size={100} color="red" />
    </div>
  );
};

export default loading;
