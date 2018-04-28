import React, { Component } from "react";
import UserInfo from "./UserInfo";
import * as actions from "../actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return <UserInfo />;
  }
}

export default connect(null, actions)(App);
