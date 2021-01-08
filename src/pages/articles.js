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

function Articles({ history }) {
  const editArticle = () => {
    console.log("EDIT");
  };
  const deleteArticle = () => {
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
        label: "Date",
        field: "date",
      },
      {
        label: "Likes",
        field: "likes",
      },
      {
        label: "Comments",
        field: "comments",
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
    rows: ["user name", "user name", "user name"].map((c) => ({
      dp: false ? (
        <img alt="dp" src={Pics.logo} width={34} height={34} />
      ) : (
        <MDBIcon
          icon="calendar-alt"
          size="2x"
          // className="warning-color pointer"
        />
      ),
      name: c,
      date: "12-02-2020",
      likes: 20,
      comments: 10,
      edit: (
        <MDBIcon
          far
          icon="edit"
          size="2x"
          onClick={editArticle}
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
          onClick={deleteArticle}
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
              Articles
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
              onClick={() => history.push("/addArticle")}
            >
              ADD ARTICLE
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
export default withRouter(Articles);
