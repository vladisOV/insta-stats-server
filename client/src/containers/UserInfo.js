import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class UserInfo extends Component {
  render() {
    const { userInfo } = this.props;

    if (!userInfo) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="card">
          <div className="info-block">
            <div className="info-block-primary">
              <img
                className="info-block--image"
                src={userInfo.profile_picture}
              />
              <h3 className="info-block--login">@{userInfo.username}</h3>
              <h6 className="info-block--bio">{userInfo.bio}</h6>
            </div>
            <div className="info-block-sub">
              <table className="info-block--table">
                <tr>
                  <th>Media</th>
                  <th>Followers</th>
                  <th>Following</th>
                </tr>
                <tr>
                  <td>{userInfo.counts.media}</td>
                  <td>{userInfo.counts.followed_by}</td>
                  <td>{userInfo.counts.follows}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ userInfo }) {
  return {
    userInfo: userInfo.userInfo
  };
}

export default connect(mapStateToProps, actions)(UserInfo);
