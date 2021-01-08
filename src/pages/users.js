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
import { withRouter } from "react-router-dom";

function Users({ history }) {
  const banUser = () => {
    console.log("BAN");
  };
  const deleteUser = () => {
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
        label: "Email",
        field: "email",
      },
      {
        label: "Ban",
        field: "ban",
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
          onClick={() => history.push(`/user/${idx}`)}
        />
      ) : (
        <MDBIcon
          icon="user"
          size="2x"
          className="pointer"
          onClick={() => history.push(`/user/${idx}`)}
        />
      ),
      name: c,
      email: c,
      ban: (
        <MDBIcon
          size="2x"
          icon="ban"
          className="text-warning pointer"
          onClick={banUser}
        />
      ),
      delete: (
        <MDBIcon
          far
          size="2x"
          icon="times-circle"
          color="danger"
          className="red-text pointer"
          onClick={deleteUser}
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
              Users
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
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
export default withRouter(Users);
