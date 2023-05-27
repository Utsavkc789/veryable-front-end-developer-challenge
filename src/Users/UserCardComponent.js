import React, { useState, useEffect, useContext } from "react";
import user from "../icons/user.svg";
import admin from "../icons/admin.svg";
import viewer from "../icons/viewer.svg";
import expandLess from "../icons/expand_less.svg";
import expandMore from "../icons/expand_more.svg";
import "./UserCardComponent.css";
import { mask } from "react-hook-mask";

const UserCardComponent = (props) => {
  const [expanded, setExpanded] = useState(false);

  let imageSrc;
  if (props.info.role === "Administrator") {
    imageSrc = admin;
  } else if (props.info.role === "Viewer") {
    imageSrc = viewer;
  } else {
    imageSrc = user;
  }

  const toggleExpand = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        width: "500px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        marginTop: "60px",
        backgroundColor: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
        <img
          src={imageSrc}
          style={{
            height: "80px",
            width: "100px",
          }}
        />
        <div
          id="user-info"
          style={{
            display: "flex",
            flexDirection: "column",
            columnGap: "0px",
            justifyContent: "flex-start",
            marginLeft: "16px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <div
            style={{
              marginRight: "auto",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {`${props.info.firstName} ${props.info.lastName}`}
          </div>
          <div style={{ marginRight: "auto", fontSize: "13px" }}>
            {props.info.role}
          </div>
          <div
            style={{ marginRight: "auto", fontSize: "13px", opacity: "0.6" }}
          >
            {props.info.email}
          </div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          {!expanded && <img src={expandMore} onClick={toggleExpand} />}
          {expanded && <img src={expandLess} onClick={toggleExpand} />}
        </div>
      </div>
      {expanded && (
        <div
          style={{
            padding: "16px",
            height: "240px",
          }}
        >
          {/* Additional content here */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "115px",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "14px",
            }}
          >
            <div style={{ marginRight: "auto", fontWeight: "bolder" }}>
              Address
            </div>
            <div style={{ marginRight: "auto", marginBottom: "20px" }}>
              {`${props.info.street}, ${props.info.city}, ${props.info.state} ${props.info.zip}`}
            </div>
            <div style={{ marginRight: "auto", fontWeight: "bold" }}>Phone</div>
            <div style={{ marginRight: "auto", marginBottom: "25px" }}>
              {`(${props.info.phone.slice(1, 4)}) ${props.info.phone.slice(
                3,
                6
              )}-${props.info.phone.slice(6)}`}
            </div>
            <div style={{ marginRight: "auto", fontWeight: "bold" }}>
              Created At
            </div>
            <div style={{ marginRight: "auto", marginBottom: "25px" }}>
              {props.info.createdAt}
            </div>
            <div style={{ marginRight: "auto", fontWeight: "bold" }}>
              Last Logged In
            </div>
            <div style={{ marginRight: "auto", marginBottom: "25px" }}>
              {props.info.lastLoggedIn}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCardComponent;
