import React, { useState } from "react";
import Header from "../components/navbar";

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
import { Editor } from "react-draft-wysiwyg";

function AddArticle({ history }) {
  const [state, setState] = useState({
    name: "",
    file: "",
  });

  const { name, file } = state;

  const fileHandler = (e) => {
    const { files } = e.target;
    setState({ ...state, file: files[0] });
  };

  const [editorState, setEditorState] = useState();
  const handleSave = (e) => {
    history.push("/users");
  };

  const onEditorStateChange = (editorState) => {
    console.log("edit", editorState);
    setEditorState(editorState);
  };

  return (
    <div>
      <Header />
      <MDBContainer className="my-5">
        <MDBCard className="z-depth-5">
          <MDBCardBody>
            <MDBCardTitle className="py-5 text-center display-3">
              Add Article
            </MDBCardTitle>
            <MDBView>
              <MDBInput
                name="name"
                value={name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
                label="Type Events Name"
                icon="info"
                type="email"
              />
              <MDBView className="input-group mt-5">
                <MDBView className="input-group-prepend mr-3">
                  <MDBIcon icon="file-image" size="2x" />
                </MDBView>
                <MDBView className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    onChange={fileHandler}
                  />
                  <label className="custom-file-label">Choose files</label>
                </MDBView>
              </MDBView>
              {file && <MDBView className="text-right">{file.name}</MDBView>}
            </MDBView>
            <MDBView className="mt-5">
              <Editor
                spellCheck
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
              />
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

export default withRouter(AddArticle);
