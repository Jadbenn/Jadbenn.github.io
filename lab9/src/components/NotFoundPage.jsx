import React from "react";
import { useTranslation, Trans } from "react-i18next";

function NotFoundPage() {
  return (
    <div className="NotFoundPage">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={require("./img/404.png")}
              alt="404"
            />
          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>

          <div className="col-lg-6">
            <h1 className="font-weight-light m-auto"  style={{"textAlign":"center"}}>  NOT FOUND!</h1>
            <p  style={{"textAlign":"center"}}>
              ERROR
            </p>
          </div>          <div className="col-lg-3"></div>

        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
