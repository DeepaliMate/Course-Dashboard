import React, { Component } from 'react';
class Navbar extends Component {
  state = {}
  render() {
    return (<div className="row ">
      <div className="col-11 pt-2 " style={{ textAlign: "right" }} >
        <b className=" text-right ">Cody Simmmons</b>
        <p className="text-secondary  ">  <small>Lecturer</small></p>

      </div>
      <div className="col-1   pt-2"><div><div className="col-xs-7">
        <img src="icons/user/LoggedInUser.png" className="rounded-circle" />

      </div></div></div>
    </div>);
  }
}

export default Navbar;