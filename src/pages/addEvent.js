import React, { useState } from "react";
import Header from "../components/navbar";
import Pics from "../assets";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBInput,
} from "mdbreact";
import { withRouter } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyA6Ch_k6SxqdHUC5jKv8w3txIrIo1D1sVM");
Geocode.setLanguage("en");
Geocode.setRegion("es");
Geocode.enableDebug();

function AddEvent({ history }) {
  const [state, setState] = useState({
    name: "",
    startTime: "",
    endTime: "",
    date: "",
    description: "",
    files: [],
    address: "",
    location: {},
  });

  const {
    name,
    date,
    startTime,
    endTime,
    description,
    files,
    address,
    location,
  } = state;

  const fileHandler = (e) => {
    const { files } = e.target;
    setState({ ...state, files });
  };

  const handleSave = (e) => {
    history.push("/users");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    if (name === "address" && value.length > 7) {
      Geocode.fromAddress(value).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setState({ ...state, location: { lat, lng } });
          console.log(lat, lng);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  const coordToAdress = (e) => {
    Geocode.fromLatLng(e.lat, e.lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        setState({ ...state, address, location: { lat: e.lat, lng: e.lng } });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <div>
      <Header />
      <MDBContainer className="my-5">
        <MDBCard className="z-depth-5">
          <MDBCardBody>
            <MDBCardTitle className="py-5 text-center display-3">
              Add Event
            </MDBCardTitle>

            <MDBView className="grey-text mx-md-5 mx-3 px-md-5">
              <MDBInput
                name="name"
                value={name}
                onChange={changeHandler}
                label="Type Events Name"
                icon="envelope"
                type="email"
              />
              <MDBInput
                name="startTime"
                value={startTime}
                onChange={changeHandler}
                label="Type Events Start Time"
                icon="clock"
                type="time"
              />
              <MDBInput
                name="endTime"
                value={endTime}
                onChange={changeHandler}
                label="Type Events End Time"
                icon="clock"
                type="time"
              />
              <MDBInput
                name="date"
                value={date}
                onChange={changeHandler}
                icon="calendar-check"
                type="date"
              />
              <MDBInput
                name="description"
                value={description}
                onChange={changeHandler}
                label="Description"
                icon="info"
                type="textarea"
                rows="4"
              />
              <MDBView className="input-group mt-5">
                <MDBView className="input-group-prepend mr-3">
                  <MDBIcon icon="file-image" size="2x" />
                </MDBView>
                <MDBView className="custom-file">
                  <input
                    multiple
                    type="file"
                    className="custom-file-input"
                    onChange={fileHandler}
                  />
                  <label className="custom-file-label">Choose files</label>
                </MDBView>
              </MDBView>
              {files.length > 0 && (
                <MDBView className="text-right">
                  {files.length} files selected
                </MDBView>
              )}

              <MDBInput
                name="address"
                value={address}
                onChange={changeHandler}
                label="Search on Map"
                icon="search"
              />
              <div style={{ height: "40vh", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyA6Ch_k6SxqdHUC5jKv8w3txIrIo1D1sVM",
                  }}
                  defaultCenter={{
                    lat: location.lat || 59.95,
                    lng: location.lng || 30.33,
                  }}
                  center={{
                    lat: location.lat || 59.95,
                    lng: location.lng || 30.33,
                  }}
                  defaultZoom={11}
                  onChange={(e) => coordToAdress(e.center)}
                  onClick={(e) => coordToAdress(e)}
                >
                  <MDBIcon
                    className="text-danger"
                    size="2x"
                    icon="map-marker-alt"
                    lat={location.lat}
                    lng={location.lng}
                  />
                </GoogleMapReact>
              </div>
            </MDBView>
            <MDBBtn
              block
              color="dark"
              className="mt-5 z-depth-3"
              size="lg"
              onClick={handleSave}
            >
              <MDBIcon far icon="save" className="mr-md-3" />
              Save
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default withRouter(AddEvent);
