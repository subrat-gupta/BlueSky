import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useHistory, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

function EditRecruiterProfile() {
    const [recruiter, setRecruiter] = useState();
    const navigate = useNavigate();
    const initialValues = {
        fullname: "",
        username: "",
        password: "",
        email: "",
        mobile: "",
        gender: "",
        location: "",
        skills: "",
        compName: "",
        compDesignation: "",
        yoexp: "",
        offLocation: "",
        compIndustry: "",
        description: "",
    };

    const [candValues, setCandValues] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const { id } = useParams();
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandValues({ ...candValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(candValues));
        if (
            formErrors.email != null ||
            formErrors.fullname != null ||
            formErrors.username != null ||
            formErrors.mobile != null ||
            formErrors.password != null ||
            formErrors.gender != null ||
            formErrors.location != null ||
            formErrors.skills != null ||
            formErrors.compName != null ||
            formErrors.compDesignation != null ||
            formErrors.offLocation != null ||
            formErrors.compIndustry != null ||
            formErrors.yoexp != null ||
            formErrors.description != null
        ) {
            console.log("set is false");
            setIsSubmit(false);
        } else {
            setIsSubmit(true);
        }

        if (isSubmit) {
            let data = {
                fullname: candValues.fullname,
                username: candValues.username,
                password: candValues.password,
                email: candValues.email,
                mobile: candValues.mobile,
                gender: candValues.gender,
                location: candValues.location,
                skills: candValues.skills,
                compName: candValues.compName,
                compDesignation: candValues.compDesignation,
                offLocation: candValues.offLocation,
                compIndustry: candValues.compIndustry,
                yoexp: candValues.yoexp,
                description: candValues.description,
            };
            const url = "http://localhost:8082/signup/recruiter";
            const list = await axios.post(url, data);
            console.log(list.data);
        } else {
            Swal.fire({
                icon: "error",
                title: "Try again",
                text: "Enter valid details",
            });
        }
    };

    const validate = (values) => {
        const formErrors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regex1 = /[3-9]/;
        //const regex3 = /^[a-zA-Z\\s]*$/i;
        const regex3 = /^[a-zA-z]+([\s][a-zA-Z]+)*$/i;
        const regex2 = /^((\+)?(\d{2}[-]))?(\d{10}){1}?$/i;
        const regex4 = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (!values.fullname) {
            formErrors.fullname = "Fullname is required!";
        } else if (!regex3.test(values.fullname)) {
            formErrors.fullname = "This is not a valid Name format!";
        }

        if (!values.username) {
            formErrors.username = "Username is required!";
        } else if (!regex3.test(values.username)) {
            formErrors.username = "This is not a valid Username format!";
        }
        if (!values.password) {
            formErrors.password = "Password is required!";
        } else if (!regex3.test(values.password)) {
            formErrors.password = "This is not a valid Password format!";
        }
        if (!values.email) {
            formErrors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            formErrors.email = "This is not a valid email format!";
        }
        if (!values.mobile) {
            formErrors.mobile = "Contact number is required!";
        } else if (!regex2.test(values.mobile)) {
            formErrors.mobile = "This is not a valid phoneNo format!";
        }
        if (!values.gender) {
            formErrors.gender = "Gender required";
        }
        if (!values.location) {
            formErrors.location = "location is required";
        }
        if (!values.skills) {
            formErrors.skills = "Skills is Required";
        }
        if (!values.compName) {
            formErrors.compName = "Company Name is Required";
        }
        if (!values.compDesignation) {
            formErrors.compDesignation = "Current Designation is Required";
        }
        if (!values.offLocation) {
            formErrors.offLocation = "Office location is required";
        }
        if (!values.compIndustry) {
            formErrors.compIndustry = "Type of industry is required";
        }
        if (!values.yoexp) {
            formErrors.yoexp = "Experience is required";
        }
        if (!values.description) {
            formErrors.description = "Field of description is required";
        }

        return formErrors;
    };
    const getUser = () => {
        const BASE_URL = `http://localhost:8082/recruiter/${id}`;
        axios.get(BASE_URL)
            .then(response => {
                console.log(response.data);
                setCandValues(response.data);
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

            getUser();
        }
    }, []);

    return (
        <div className="edit-form">
            <div className="header-main">
                <p>UPDATE PROFILE</p>
            </div>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <p className="form-group">
                        <strong>User Name:</strong>
                        {currentUser.username}
                    </p>
                    <p className="form-group">
                        <strong>Application No:</strong>
                        {currentUser.id}
                    </p>
                    <p className="form-group">
                        <strong>Email:</strong>
                        {currentUser.email}
                    </p>
                    <p className="form-group">
                        <strong>Authorities:</strong>
                        {currentUser.role}
                        {/* {currentUser.roles &&
              currentUser.roles.map((role, index) => (
                <span key={index}>{role}</span>
              ))} */}
                    </p>
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            // placeholder={recruiter.fullname}
                            value={candValues.fullname}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.fullname}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="mobile"
                            // placeholder={recruiter.mobile}
                            value={candValues.mobile}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.mobile}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <input
                            type="radio"
                            value="male"
                            name="gender"
                            onChange={handleChange}
                        />
                        Male
                        <input
                            type="radio"
                            value="female"
                            name="gender"
                            onChange={handleChange}
                        />
                        Female
                        <input
                            type="radio"
                            value="others"
                            name="gender"
                            onChange={handleChange}
                        />
                        Others
                        <p className="text-danger fs-6">{formErrors.gender}</p>
                    </div>

                    <div class="form-group">
                        <label htmlFor="location">Current Location *</label>
                        <input
                            type="text"
                            id="location"
                            className="form-control"
                            // placeholder={recruiter.location}
                            value={candValues.location}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.location}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="skills">Skills Required</label>
                        <input
                            type="text"
                            className="form-control"
                            id="skills"
                            // placeholder={recruiter.skills}
                            value={candValues.skills}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.skills}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="compName">Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="compName"
                            // placeholder={recruiter.compName}
                            value={candValues.compName}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.compName}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="compDesignation">Your Designation</label>
                        <input
                            type="text"
                            className="form-control"
                            id="compDesignation"
                            // placeholder={recruiter.compDesignation}
                            value={candValues.compDesignation}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.compDesignation}</p>
                    </div>

                    <div class="form-group">
                        <label htmlFor="yoexp">Total Experience *</label>
                        <input
                            type="text"
                            id="yoexp"
                            className="form-control"
                            // placeholder={recruiter.yoexp}
                            value={candValues.yoexp}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.yoexp}</p>
                    </div>
                    <div class="form-group">
                        <label htmlFor="offLocation">Office Location *</label>
                        <input
                            type="text"
                            id="offLocation"
                            className="form-control"
                            // placeholder={recruiter.offLocation}
                            value={candValues.offLocation}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.offLocation}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="compIndustry">Work Related Industry</label>
                        <input
                            type="text"
                            className="form-control"
                            id="compIndustry"
                            // placeholder={recruiter.compIndustry}
                            value={candValues.compIndustry}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.compIndustry}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Other Things</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            // placeholder={recruiter.description}
                            value={candValues.description}
                            onChange={handleChange}
                        />
                        <p className="text-danger fs-6">{formErrors.description}</p>
                    </div>
                    <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">
                            Update and Submit
                        </button>
                        <Button
                            variant="danger"
                            // href={`/profile/${currentUser.id}`}
                            id="return-profile"
                        >
                            Return To Profile
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default EditRecruiterProfile;
