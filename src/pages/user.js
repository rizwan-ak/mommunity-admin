import React from "react";
import Header from "../components/navbar";
import Pics from "../assets";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdbreact";

export default function User({ match }) {
  const banUser = () => {
    console.log("BAN");
  };
  const deleteUser = () => {
    console.log("DELETE");
  };
  return (
    <div>
      <Header />
      <MDBContainer className="my-5">
        <MDBCard className="z-depth-5">
          <MDBCardBody>
            <MDBCardTitle className="py-5 text-center display-4">
              User {match.params.id}
            </MDBCardTitle>
            <MDBRow>
              <MDBCol className="text-center" sm="12" md="4">
                <img
                  alt="dp"
                  src={Pics.logo}
                  width={150}
                  height={150}
                  className="rounded bg-dark mr-5"
                />
              </MDBCol>
              <MDBCol className="mt-md-0 mt-5" sm="12" md="8">
                <h3>Email: abc@xyz.com</h3>
                <h3 className="mt-4">Contact: 00900 786 01</h3>
                <h3 className="mt-4">Job: MERN Stack Developer</h3>
                <h3 className="mt-4 d-flex flex-row flex-wrap">
                  Hobbies:{" "}
                  {[1, 1, 1, 1].map((h, idx) => (
                    <p
                      key={idx}
                      className="text-white bg-dark mr-3 px-2 py-1 rounded h5"
                    >
                      Hobby {idx}
                    </p>
                  ))}
                </h3>
                <h3 className="mt-4 d-flex flex-row flex-wrap">
                  Maternal Status:{" "}
                  {[1, 1, 1].map((h, idx) => (
                    <p
                      key={idx}
                      className="text-white bg-warning mr-3 px-2 py-1 rounded h5"
                    >
                      Status {idx}
                    </p>
                  ))}
                </h3>
              </MDBCol>
            </MDBRow>
            <div className="d-flex flex-row justify-content-between">
              <div className="px-md-5 p-3 w-100">
                <MDBBtn
                  block
                  color="warning"
                  className="mt-5 z-depth-3"
                  size="lg"
                  onClick={banUser}
                >
                  <MDBIcon icon="ban" className="mr-md-3" />
                  Ban
                </MDBBtn>
              </div>
              <div className="px-md-5 p-3 w-100">
                <MDBBtn
                  block
                  color="red"
                  className="mt-5 z-depth-3"
                  size="lg"
                  onClick={deleteUser}
                >
                  <MDBIcon far icon="times-circle" className="mr-md-3" />
                  Delete
                </MDBBtn>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
