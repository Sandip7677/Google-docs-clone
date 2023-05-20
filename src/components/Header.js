import React, { useState } from "react";

const Header = () => {
  const [headername, setHeadername] = useState("Untitled document");
  return (
    <>
      <div className="d-flex justify-content-start align-items-center header-container">
        <div className="logo">
          <img src="./images/logo.png" alt="docs-logo" />
        </div>
        <div className="d-flex flex-column menu-bar">
          <input
            type="text"
            value={headername}
            onChange={(e) => {
              setHeadername(e.target.value);
            }}
          />
          <div className="d-flex flex-wrap">
            <p className="menu-item">File</p>
            <p className="menu-item">Edit</p>
            <p className="menu-item">View</p>
            <p className="menu-item">Insert</p>
            <p className="menu-item">Format</p>
            <p className="menu-item">Tools</p>
            <p className="menu-item">Extensions</p>
            <p className="menu-item">Help</p>
          </div>
        </div>
        <button style={{ backgroundColor: "powderblue" }}>
          <img src="./images/user.png" alt="user profile" />
          <span>Share</span>
        </button>
        <img
          src="./images/user.png"
          alt="user profile"
          className="user-profile"
        />
      </div>
    </>
  );
};

export default Header;
