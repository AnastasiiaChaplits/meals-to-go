import React, { useContext, useState, useEffect } from "react";
import { Map } from "./map.styles";
import { Search } from "../components/search.component";

export const MapScreen = () => {
  return (
    <>
      <Search />
      <Map />
    </>
  );
};
