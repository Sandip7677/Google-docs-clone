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
        <div class="offcanvas-body"></div>
      </div>
    </>
  );
};

export default Icon;
