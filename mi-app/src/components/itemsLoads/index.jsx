import React from "react";
import { FallingLines } from "react-loader-spinner";
import {  FaFrown } from "react-icons/fa";
import "./LoadsS.css";

function ItemsLoading() {
  return (
    <div className="Statusload">
    <FallingLines
      color="#ff984d"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
    <p>Cargado datos, por favor espere...</p>
    </div>

  );
}

function ItemsError() {
  return <p>Se ha detectado un error...</p>
}

function ItemsEmpty() {
  return (
    <div className="EmptyS">
    <FaFrown className="FaceS"/>
    <p>No hemos encontrado nada...</p>
    </div>

  ) 
}
export { ItemsLoading, ItemsError, ItemsEmpty };
