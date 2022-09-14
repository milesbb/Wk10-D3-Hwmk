import { Component } from "react";
import "./backoffice.css";

class BackOffice extends Component {
  render() {
    return (
      <div className="py-4" style={{ background: "white" }}>
        <div className="wrapdiv mt-4 mb-5">
          <h1>Account</h1>
          <hr />
          <div className="d-flex">
            <div className="pr-5 w-25">
              <p className="text-secondary">MEMBERSHIP & BILLING</p>
              <br />
              <button className="setButton">Cancel Membership</button>
            </div>
            <div className="m-auto w-75">
              <div className="d-flex justify-content-between">
                <div className="">
                  <p>student@strive.school</p>
                  <p className="text-secondary">Password: ********</p>
                  <p className="text-secondary">Phone: 321 742 1242</p>
                </div>
                <div className="text-right">
                  <p className="link">Change Account Email</p>
                  <p className="link">Change Password</p>
                  <p className="link">Change Phone Number</p>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  
                  <p>admin@strive.school</p>
                </div>
                <div className="text-right">
                  <p className="link">Update Payment Info</p>
                  <p className="link">Billing Details</p>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div></div>
                <div className="text-right">
                  <p className="link">Redeem gift card or promo code</p>
                  <p className="link">Where to buy gift cards</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <div className="pr-5 w-25">
              <p className="text-secondary">PLAN DETAILS</p>
            </div>
            <div className="m-auto w-75">
              <div className="d-flex justify-content-between">
                <div className="text-left d-flex">
                  <p>Premium</p>
                  
                </div>
                <div className="text-right">
                  <p className="link">Change plan</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <div className="pr-5 w-25">
              <p className="text-secondary">SETTINGS</p>
            </div>
            <div className="m-auto w-75">
              <div className="d-flex justify-content-between">
                <div className="text-left">
                  <p className="link">Parental controls</p>
                  <p className="link">Test participation</p>
                  <p className="link">Manage download devices</p>
                  <p className="link">Activate a device</p>
                  <p className="link">Recent device streaming activity</p>
                  <p className="link">Sign out of all devices</p>
                </div>
                <div className="text-right"></div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            <div className="pr-5 w-25">
              <p className="text-secondary">MY PROFILE</p>
            </div>
            <div className="m-auto w-75">
              <div className="d-flex justify-content-between">
                <div className="text-left">
                  <p>
                    
                    Strive Student
                  </p>
                  <br />
                  <p className="link">Language</p>
                  <p className="link">Playback settings</p>
                  <p className="link">Subtitle appearance</p>
                </div>
                <div className="text-right">
                  <p className="link">Manage profiles</p>
                  <br />
                  <p className="link text-left">Viewing activity</p>
                  <p className="link text-left">Ratings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BackOffice;
