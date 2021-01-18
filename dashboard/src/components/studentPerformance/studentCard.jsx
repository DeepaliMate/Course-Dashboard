import React, { Component } from 'react';
class StudentCard extends Component {
    state = {}
    render() {

        return (
            <div className="card card-stud rounded   ">
                <div className="card-body">
                    <div className="row">
                        <div className="col-3 rounded-circle avatar " >
                            <img src={'icons/icon/' + this.props.obj.type + '.png'} style={{ textAlign: "center" }} />
                        </div>
                        <div className=" col-9 mt-2" >
                            <div><p><b className="line-1">{this.props.obj.line1} </b><small className="text-secondary"> {this.props.obj.line2}</small></p></div>
                            <small className="text-secondary">{this.props.obj.title} </small>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default StudentCard;