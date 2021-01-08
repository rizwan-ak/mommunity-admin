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
  MDBBtn,
} from "mdbreact";
import { withRouter } from "react-router-dom";

function Events({ history }) {
  const editEvent = () => {
    history.push("/addEvent");
    console.log("EDIT");
  };
  const deleteEvent = () => {
    console.log("DELETE");
  };
  const data = {
    columns: [
      {
        label: "Picture",
        field: "dp",
      },
      {
        label: "Name",
        field: "name",
      },
      {
        label: "By",
        field: "by",
      },
      {
        label: "Start Time",
        field: "startTime",
      },
      {
        label: "End Time",
        field: "endTime",
      },
      {
        label: "Date",
        field: "date",
      },
      {
        label: "Edit",
        field: "edit",
      },
      {
        label: "Delete",
        field: "delete",
      },
    ],
    rows: ["user name", "user name", "user name"].map((c, idx) => ({
      dp: false ? (
        <img
          alt="dp"
          src={Pics.logo}
          width={34}
          height={34}
          className="pointer"
          onClick={() => history.push(`/event/${idx}`)}
        />
      ) : (
        <MDBIcon
          far
          icon="calendar-alt"
          size="2x"
          className="pointer"
          onClick={() => history.push(`/event/${idx}`)}
        />
      ),
      name: c,
      by: "Admin",
      startTime: "12:00 AM",
      endTime: "12:00 AM",
      date: "12-02-2020",
      edit: (
        <MDBIcon
          far
          icon="edit"
          size="2x"
          onClick={editEvent}
          className="text-warning pointer"
        />
      ),
      delete: (
        <MDBIcon
          far
          size="2x"
          icon="times-circle"
          color="danger"
          className="red-text pointer"
          onClick={deleteEvent}
        />
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
              Events
            </MDBCardTitle>
            <MDBDataTableV5
              btn
              materialSearch
              responsiveMd
              hover
              entriesOptions={[5, 10, 20]}
              entries={5}
              pagesAmount={4}
              data={data}
              fullPagination
            />
            <MDBBtn
              block
              color="dark"
              className="mt-5 z-depth-3"
              size="lg"
              onClick={() => history.push("/addEvent")}
            >
              <MDBIcon icon="plus" className="mr-md-3" />
              ADD EVENT
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
export default withRouter(Events);
