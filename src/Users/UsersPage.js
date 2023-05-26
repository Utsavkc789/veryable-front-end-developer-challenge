import React, { useState, useEffect, useContext } from "react";
import UsersHeader from "./UsersHeader";
import UsersCardComponent from "./UserCardComponent";

const UsersPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        columnGap: "16px",
        flexDirection: "column",
      }}
    >
      <div>
        <UsersHeader />
      </div>
      <div
        style={{
          margin: "0 auto",
        }}
      >
        <UsersCardComponent />
      </div>
    </div>
  );
};

export default UsersPage;
