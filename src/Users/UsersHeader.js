import React, { useState, useEffect, useContext } from "react";
import group from "../icons/group.svg";

const UsersHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "64px",
        alignContent: "center",
      }}
    >
      <img src={group} />
      <p>USERS</p>
    </div>
  );
};

export default UsersHeader;
