import React from 'react';
import Header from '../components/navbar';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBDataTableV5, MDBContainer, MDBIcon } from 'mdbreact';
import Pics from '../assets';
import { withRouter } from 'react-router-dom';

function Chats({ history }) {
    return (
        <div>
            <Header />
            <MDBContainer className="mt-5 text-white">
                <div className="row z-depth-3">
                    <div className="col-5 px-0">
                        <div className="text-center py-2 warning-color">
                            <p className="h5 mb-0 py-2">Recent</p>
                        </div>
                        <div className="messages-box">
                            {[1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].map((a, idx) => (
                                <div
                                    key={idx}
                                    // onClick={() => this.selectChat(c.orderId, c, c.with)}
                                    className={false ? 'list-group-item bg-dark pointer' : 'list-group-item list-group-item-action pointer'}
                                >
                                    <h5 className="mb-0">Username</h5>
                                    <p className="mb-0 mt-2">asdfasdf</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <!-- Chat Box--> */}
                    <div className="col-7 px-0">
                        {true ? (
                            <>
                                <div className="chat-box">
                                    <div className="sticky-top text-dark z-depth-1 bg-white">
                                        <h5 className="p-2" onClick={() => history.push(`user/${2}`)}>
                                            <img src={Pics.logo} alt="user" width="50" height="50" className="rounded-circle mx-3 bg-dark pointer" />
                                            Alex Mercer
                                        </h5>
                                    </div>

                                    <div className="px-4">
                                        {[1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1].map((c, idx) => (
                                            <div key={idx} className={c === 1 ? 'w-75 mb-3' : 'w-75 ml-auto mb-3'}>
                                                <div className="ml-3">
                                                    <div className={c === 1 ? 'rounded py-2 px-3 mb-2 bg-light text-dark' : 'rounded py-2 px-3 mb-2 bg-dark text-white'}>
                                                        {/* <img
                              src={Pics.logo}
                              alt="user"
                              width={50}
                              height={50}
                              className="rounded-circle bg-dark"
                            /> */}
                                                        <p className="mb-0">
                                                            loramConsectetur sint incididunt aliquip sunt sunt incididunt id minim dolor labore. Cupidatat et nulla ea sit in
                                                        </p>
                                                    </div>
                                                    <p className="small text-muted">30 july 2020 | 11:30pm</p>
                                                </div>
                                            </div>
                                        ))}

                                        {/* <div className="media w-75 ml-auto mb-3">
                          <div className="media-body">
                            <div className="rounded py-2 px-3 mb-2 primaryBg">
                              <p className="text-small mb-0 text-white">
                                loramConsectetur sint incididunt aliquip sunt
                                sunt incididunt id minim dolor labore. Cupidatat
                                et nulla ea sit in
                              </p>
                            </div>
                            <p className="small text-muted text-right">
                              30 july 2020 | 11:30pm
                            </p>
                          </div>
                          <img
                          src={dp}
                          alt="user"
                          width="50"
                          height="50"
                          className="rounded-circle ml-3"
                        />
                        </div> */}
                                    </div>
                                </div>

                                {/* <!-- Typing area --> */}
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="message"
                                        placeholder="Type your message..."
                                        // value={this.state.msg}
                                        // onChange={(e) => this.setState({ msg: e.target.value })}
                                        // onClick={() => this.messageRead(this.state.chat)}
                                        className="form-control rounded-0 py-4 bg-light"
                                    />
                                    <MDBIcon size="lg" icon="file" className="text-dark pointer mt-3 ml-3" />
                                    <MDBIcon size="lg" icon="paper-plane" className="text-dark pointer mt-3 mx-3" />
                                </div>
                            </>
                        ) : (
                            <h1 style={{ paddingTop: '40vh' }} className="text-center text-muted display-4">
                                Select a chat.
                            </h1>
                        )}
                    </div>
                </div>
            </MDBContainer>
        </div>
    );
}
export default withRouter(Chats);
