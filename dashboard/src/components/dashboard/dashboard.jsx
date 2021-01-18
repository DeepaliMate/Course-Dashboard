import React, { Component } from 'react';
import Navbar from '../navBar/navBar'
import StudCard from '../studentPerformance/studentCard'
import StudentList from '../studList/studentList'
import url from '../../enviroment'
import axios from 'axios';
class Dashboard extends Component {
    state = {
        studentsInfo: [],

    }
    async componentDidMount() {
        // fetch Data through API
        try {
            const { data: studentsInfo } = await axios.get(url.studentsInfoUrl)
            this.setState({ studentsInfo })
        } catch (error) {
            console.log(error);
        }
    }
    componentWillUnmount() {

        axios.CancelToken.source();
    }
    loadStudInfo() {
        // if data not fetch yet it will show loading...
        if (this.state.studentsInfo.length == 0)
            return (
                <span data-testid="loading">Loading.....</span>
            )
        // after loading of data
        else
            return (
                this.state.studentsInfo.map((p) => <div className="col-4" key={p.id} data-testid="resolved"><StudCard obj={p}></StudCard></div>)
            )
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" style={{ overflow: "hidden" }}>
                    <div className="row g-5 " >
                        <div className="col-1 sideNav " >
                            <img src={'icons/icon/logon.png'} className="logo" />
                        </div>
                        <div className="col-10   mx-2" >
                            <div className="container-fluid">
                                <div className="row">
                                    <Navbar></Navbar>
                                    <div className="col-12  ">
                                        <h3>Dashboard</h3>
                                        <p className="text-secondary">Mobile UX/UI Design course</p>
                                    </div>
                                </div>
                                <div className="row ">
                                    {this.loadStudInfo()}
                                    <div className="col-4  mt-2"><StudentList></StudentList></div>
                                </div>
                            </div>
                        </div>
                    </div></div>
            </React.Fragment>
        );
    }
}

export default Dashboard;