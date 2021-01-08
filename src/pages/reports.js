import React from "react";
import Header from "../components/navbar";
import Pics from "../assets";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBDataTableV5,
  MDBContainer,
  MDBIcon,
} from "mdbreact";

export default function Reports() {
  const action = (e) => {
    const { value } = e.target;
    console.log("BAN", value);
  };

  const data = {
    columns: [
      {
        label: "Reported User",
        field: "reportee",
      },
      {
        label: "Reported By",
        field: "reporter",
      },
      {
        label: "Reason",
        field: "reason",
      },
      {
        label: "Comments",
        field: "comments",
      },
      {
        label: "Actions",
        field: "actions",
      },
    ],
    rows: ["user name", "user name", "user name"].map((c) => ({
      reportee: false ? (
        <>
          <img alt="dp" src={Pics.logo} width={34} height={34} />
          username
        </>
      ) : (
        <>
          <MDBIcon icon="user" size="2x" className="mr-3" />
          <span>{c}</span>
        </>
      ),
      reporter: false ? (
        <>
          <img alt="dp" src={Pics.logo} width={34} height={34} />
          <span className="bg-dark">{c}</span>
        </>
      ) : (
        <>
          <MDBIcon icon="user" size="2x" className="mr-3" />
          <span>{c}</span>
        </>
      ),
      reason: c,
      comments: c,
      actions: (
        <select className="browser-default custom-select" onChange={action}>
          <option>Choose your option</option>
          <option value="resolved">Resolved</option>
          <option value="rejected">Rejected</option>
        </select>
      ),
    })),
  };

  return (
    <div>
      <Header />
      <MDBContainer className="my-5">
        <MDBCard className="z-depth-5">
          <MDBCardBody>
            <MDBCardTitle className="py-5 text-center display-3">
              Reports
            </MDBCardTitle>
            <MDBDataTableV5
              btn
              materialSearch
              responsive
              hover
              entriesOptions={[5, 10, 20]}
              entries={5}
              pagesAmount={4}
              data={data}
              fullPagination
            />
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
