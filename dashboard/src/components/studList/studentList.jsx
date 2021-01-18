import React, { Component } from 'react';
import axios from 'axios';
import url from '../../enviroment'
class StudentList extends Component {
    state = {
        sort: "Descending",
        studentList: [],
    }
    async componentDidMount() {
        const { data: studentList } = await axios.get(url.studentList)
        this.setState({ studentList })
    }
    componentWillUnmount() {
        axios.CancelToken.source();
    }
    sort = () => {
        this.setState({ studentList: this.state.studentList.reverse(), sort: this.state.sort == "Descending" ? "Ascending" : "Descending" })
    }

    loadData() {
        const style = {
            card: {
                backgroundColor: "",
                maxHeight: "295px",
                overflowY: "scroll"
            }
        }
        if (this.state.studentList.length == 0)
            return (
                <span data-testid="loading2">Loading...</span>
            )
        else {
            return (
                <div className="card-body  row" >
                    <div className="col-8 "> <b>Students by average mark</b>  </div>
                    <button className=" col-4  btn btn-light btn-sm text-secondary" onClick={() => { this.sort() }}>{this.state.sort} <i className="fa fa-angle-down" /></button>
                    <hr className="hr" />
                    <span style={style.card} className="card-stud-list scrollbar" id="style-3">
                        {this.state.studentList.map((p) =>
                            <div key={p.id} >
                                <div className="row " >
                                    <div className="col-2 "> <img src={'icons/students/AvatarIcons-' + p.id + '.png'} className="rounded-circle" /></div>
                                    <div className="col-8  mt-2 text-secondary text-left"><p>{p.name}</p>  </div>

                                    <div className="col-2  mt-2 text-right"><p>{p.marks}</p>  </div>
                                </div>
                            </div>
                        )}</span>
                </div>
            )
        }

    }
    render() {


        return (
            <div className="mt-3">
                <div className="card card-list  rounded  ">
                    {this.loadData()}
                </div>
            </div>
        );
    }
}

export default StudentList;