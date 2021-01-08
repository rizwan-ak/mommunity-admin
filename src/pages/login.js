import React from "react";
import Pics from "../assets/index";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBox,
  MDBInput,
  MDBBtn,
} from "mdbreact";
import { withRouter } from "react-router-dom";

function Login({ history }) {
  const handleSubmit = () => {
    history.push("/users");
  };
  return (
    <MDBContainer
      fluid
      className="peach-gradient d-flex"
      style={{ height: "100vh" }}
    >
      <MDBBox className="container bg-light w-75 h-75 my-auto z-depth-5">
        <MDBRow className="h-100">
          <MDBCol
            md="7"
            className="d-flex justify-content-center align-items-center bg-dark"
          >
            <img
              style={{ objectFit: "contain" }}
              className="w-50"
              src={Pics.logo}
              alt="Logo"
            />
          </MDBCol>
          <MDBCol
            md="5"
            className="warning-color d-flex justify-content-center align-items-center"
          >
            <MDBBox className="w-75 text-white">
              <h1 className="my-md-5 md-3 text-center display-4">Sign in</h1>
              <MDBInput label="Type your email" icon="envelope" type="email" />
              <MDBInput
                label="Type your password"
                icon="lock"
                type="password"
              />
              <MDBBtn
                onClick={handleSubmit}
                size="lg"
                className="my-md-5 my-3 z-depth-5"
                color="dark"
                block
              >
                Login
              </MDBBtn>
              {/* <p
                style={{ cursor: "pointer" }}
                className="text-right"
                // onClick={this.forgotPassword}
              >
                Forgot password?
              </p> */}
            </MDBBox>
          </MDBCol>
        </MDBRow>
      </MDBBox>
    </MDBContainer>
  );
}

export default withRouter(Login);
