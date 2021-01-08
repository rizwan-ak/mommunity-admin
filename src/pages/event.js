import React from "react";
import Header from "../components/navbar";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselInner,
  MDBView,
} from "mdbreact";

export default function Event({ match }) {
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
          <MDBCardBody className="px-3 px-md-5">
            <MDBCardTitle className="py-5 text-center display-4">
              Event Name {match.params.id}
            </MDBCardTitle>
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-3"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      draggable="false"
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                      alt="First slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      draggable="false"
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                      alt="Second slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      draggable="false"
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(71).jpg"
                      alt="Third slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>

            <MDBRow className="my-5">
              <MDBCol sm="12" md="6" className="text-center">
                <h3>By: Admin</h3>
                <h3 className="mt-4">
                  Location: Avenue Street, 53-B , Somewhere
                </h3>
              </MDBCol>
              <MDBCol sm="12" md="6" className="text-center">
                <h3>Time: 09:30 AM - 09:30 PM</h3>
                <h3 className="mt-4">Date: 10-10-2020</h3>
              </MDBCol>
            </MDBRow>
            <h3 className="mt-4">
              Description:{" "}
              <small>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </small>
            </h3>
            <MDBView className="d-flex flex-row justify-content-between">
              <MDBView className="px-md-5 p-3 w-100">
                <MDBBtn
                  block
                  color="warning"
                  className="mt-5 z-depth-3"
                  size="lg"
                  onClick={banUser}
                >
                  <MDBIcon
                    far
                    icon="edit"
                    //   onClick={editEvent}
                    className="mr-md-3"
                  />
                  Edit
                </MDBBtn>
              </MDBView>
              <MDBView className="px-md-5 p-3 w-100">
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
              </MDBView>
            </MDBView>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}
