import React, { useState, useEffect, useContext } from "react";
import user from "../icons/user.svg";
import expand_more from "../icons/user.svg";
import expandMore from "../icons/expand_more.svg";

// const UserCardComponent = () => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleExpand = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div
//       style={{
//         height: "80px",
//         width: "500px",
//         borderRadius: "5px",
//         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         gap: "90px",
//         marginTop: "16px",
//       }}
//     >
//       <img
//         src={user}
//         style={{
//           height: "80px",
//           width: "100px",
//         }}
//       />
//       <div
//         id="user-info"
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           columnGap: "0px",
//           fontSize: "16px",
//           justifyContent: "flex-start",
//           marginLeft: "-70px",
//         }}
//       >
//         <div style={{ marginRight: "auto" }}>Alexandar the Great </div>
//         <div style={{ marginRight: "auto" }}>Administrator </div>
//         <div style={{ marginRight: "auto" }}>alexandar@conqueror.com</div>
//       </div>
//       <div
//         style={{
//           marginLeft: "50px",
//         }}
//       >
//         <img src={expandMore} onClick={toggleExpand} />
//       </div>
//       {expanded && (
//         <div>
//           {/* Additional content here */}
//           <p>More additional content for the user!</p>
//         </div>
//       )}
//     </div>
//   );
// };

const UserCardComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        width: "500px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        marginTop: "16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
        <img
          src={user}
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
            fontSize: "16px",
            justifyContent: "flex-start",
            marginLeft: "16px",
          }}
        >
          <div style={{ marginRight: "auto" }}>Alexandar the Great</div>
          <div style={{ marginRight: "auto" }}>Administrator</div>
          <div style={{ marginRight: "auto" }}>alexandar@conqueror.com</div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <img src={expandMore} onClick={toggleExpand} />
        </div>
      </div>
      {expanded && (
        <div style={{ padding: "16px" }}>
          {/* Additional content here */}
          <p>More additional content for the user!</p>
        </div>
      )}
    </div>
  );
};

export default UserCardComponent;
