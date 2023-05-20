import React from "react";

const Icon = () => {
  return (
    <>
      <button
        class="btn sidebar-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <img src="./images/next.png" alt="" />
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-50"
        id="offcanvasRight"
        aria-labelledby="offcanvasScrollingLabel"
        style={{ width: "50px" }}
        data-bs-backdrop="false"
        data-bs-scroll="true"
      >
        <div class="offcanvas-body">
          <div className="d-flex flex-column ">
            <img
              className="icons"
              src="./images/google-calendar.png"
              alt="google-calendar"
            />
            <img className="icons" src="./images/keeps.png" alt="google-keep" />
            <img className="icons" src="./images/check.png" alt="google-Task" />
            <img
              className="icons"
              src="./images/google-contacts.png"
              alt="google-contacts"
            />
            <img
              className="icons"
              src="./images/google-maps.png"
              alt="google-maps"
            />
          </div>
          <hr />
          <img className="add-icons" src="./images/plus.png" alt="add" />
        </div>
      </div>
    </>
  );
};

export default Icon;
