import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'semantic-ui-react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Profile(props) {
    const initialValues = {
        id: "", recrid: "", fullname: "", mobile: "", gender: "", location: "", skills: "", compName: "", compDesignation: "",
        yoexp: "", offLocation: "", compIndustry: "", description: "",
        user: { userid: "", username: "", email: "" }
    };
    const initialValues1 = {
        id: null, candid: null, fullname: "", mobile: "", gender: "", location: "", skills: "", hqual: "", major: "",
        institute: "", yoq: "", marks: "", exp: "", yoexp: "", company: "", foexp: "", description: "",
        user: { userid: null, username: "", email: "" }
    };
    const [currentUser, setCurrentUser] = useState({});
    const [showRecruiter, setRecruiter] = useState(false);
    const [showCandidate, setCandidate] = useState(false);
    const [currentRecruiter, setCurrentRecruiter] = useState(initialValues);
    const [currentCandidate, setCurrentCandidate] = useState(initialValues1);
    const navigate = useNavigate();



    function getRecruiter(id) {

        const BASE_URL = `http://localhost:8082/recruiter/${id}`;
        axios.get(BASE_URL)
            .then(response => {
                // console.log(response.data);
                setCurrentRecruiter(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    function getCandidate(id) {
        const BASE_URL = `http://localhost:8082/candidate/${id}`;
        axios.get(BASE_URL)
            .then(response => {
                // console.log(response.data);
                setCurrentCandidate(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    useEffect(() => {
        if (localStorage.getItem("user") == null) {
            Swal.fire({
                icon: "error",
                title: "Login Required",
                text: "please login to stay on this page"
            })
            navigate("/Login");
        }
        else {
            // console.log("props is");
            // console.log(props);
            const user = JSON.parse(localStorage.getItem('user'));
            // console.log(user);
            if (user) {

                setCurrentUser(user);
                setRecruiter(user.role === "Recruiter");
                setCandidate(user.role === "Candidate");
            };
            if (user.role === "Candidate") {
                getCandidate(user.userId);
            }
            if (user.role === "Recruiter") {
                getRecruiter(user.userId);
            }

        }
    }, []
    );
    return (
        <div className="profile">
            <div className="header-main">
                <p>PROFILE</p>
            </div>
            <div className="card">

                {showRecruiter && (
                    <div className="form-group">
                        <header className="header-sub">
                            <h1>
                                <u><strong>Welcome {currentRecruiter.fullname}</strong></u>
                            </h1>
                        </header>
                        <br />
                        <Table>
                            <Table.Body>
                                <div className="header-sub">Basic Details</div>
                                <Table.Row>
                                    <Table.HeaderCell>Application No:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentUser.candId}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Email:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentUser.email}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Full Name:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentRecruiter.fullname}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Mobile Number:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentRecruiter.mobile}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Current Location:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentRecruiter.location}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Skills Required:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentRecruiter.skills}</Table.Cell>
                                </Table.Row>
                                <br />
                                <div className="header-sub">Professional Details</div>
                                <Table.Row>
                                    <Table.HeaderCell>Company Name:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentRecruiter.compName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Current Designation:</Table.HeaderCell>
                                    <Table.Cell>{currentRecruiter.compDesignation}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Total Years Of Experience:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentRecruiter.yoexp}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Office Location:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentRecruiter.offLocation}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Type Of Industry:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentRecruiter.compIndustry}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Other Details:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentRecruiter.description}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <br />
                        <div>
                            <Button variant="success" href={`/EditRecruiter/${currentUser.userId}`}>Edit Profile</Button>
                        </div>
                    </div>
                )}
                {showCandidate && (
                    <div className="form-group">
                        <header className="header-text">
                            <h1>
                                <strong>Welcome {currentCandidate.fullname}</strong>
                            </h1>
                        </header>
                        <br />
                        <Table>
                            <Table.Body>
                                <div className="header-sub">Basic Details</div>
                                <Table.Row>
                                    <Table.HeaderCell>Application No:{" "}</Table.HeaderCell>
                                    <Table.Cell> {currentUser.candId}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Email:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentUser.email}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Full Name:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.fullname}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Mobile Number:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.mobile}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Gender:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.gender}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Current Location:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.location}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Skills Acquired:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.skills}</Table.Cell>
                                </Table.Row>
                                <br />
                                <div className="header-sub">Educational Qualifications</div>
                                <Table.Row>
                                    <Table.HeaderCell>Highest Qualification:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.hqual}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Specialization:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.major}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Institute:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.institute}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Year Of Qualification:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.yoq}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Qualification Marks:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.marks} %</Table.Cell>
                                </Table.Row>
                                <br />
                                <div className="header-sub">Professional Details</div>
                                <Table.Row>
                                    <Table.HeaderCell>Are You Experienced?:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.exp}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Company Name(if any):{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.company}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Field Of Experience:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.foexp}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.HeaderCell>Description:{" "}</Table.HeaderCell>
                                    <Table.Cell>{currentCandidate.description}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <br />
                        <div>
                            <Button variant="success" href={`/EditCandidate/${currentUser.userId}`}>Edit Profile</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Profile