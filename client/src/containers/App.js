import React, { Component } from "react";
import UserInfo from "./UserInfo";
import * as actions from "../actions";
import { connect } from "react-redux";

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.props.fetchUserInfo(nextProps.auth);
  }

  render() {
    return <UserInfo />;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, actions)(App);
