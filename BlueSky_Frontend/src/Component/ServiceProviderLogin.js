import React, { useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function ServiceProviderLogin() {
    const navigate = useNavigate();
    const initialValues = { spEmail:"", spPassword:"" };
    const [loginValues, setloginValues] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setloginValues({ ...loginValues, [name]: value });
    };

    const loginactivity = (e) => {
        e.preventDefault();
        checkUser(loginValues);
       

    }
    const checkUser = (loginValues) => {
        axios.post("http://localhost:8080/serviceprovider/login", loginValues).then((response) => {
            console.log(response.data);
            sessionStorage.setItem("id", JSON.stringify(response.data));
            sessionStorage.setItem("spEmail", JSON.stringify(response.data.spEmail));
            sessionStorage.setItem("spId", JSON.stringify(response.data.id));
            Swal.fire({
                icon: "success",
                title: "LoggedIn Successfull",
                text: "Welcome LoggedIn Successfully"
            })
            navigate("/ServiceProviderDashboard");
        }, (error) => {
            console.log(error.data);
            Swal.fire({
                icon: "error",
                title: "Credential not Matching",
                text: "Please try again",
            }
            );
        });

    }

    // useEffect(() => {
    //     const id = JSON.parse(sessionStorage.getItem('id'));
    //     if (id !== null) {
    //         navigate("/home");
    //     }
    // })

    return (
        <div className="col-md-12">
            <br />
            <div className="card card-container">
                <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
                <div className="header-text">
                   Service Provider Login
                </div>

                <Form onSubmit={loginactivity}>
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="spEmail"
                            placeholder='Enter your email'
                            value={loginValues.spEmail}
                            onChange={handleChange}
                        //validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="spPassword"
                            placeholder='Enter your password'
                            value={loginValues.spPassword}
                            onChange={handleChange}
                        //validations={[required]}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <br />
                        <div class="form-group">
                            <button className="btn btn-primary btn-block">Sign In</button>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <p>
                            For New Customer &nbsp;
                            <a href="/RegisterCustomer">Register Here</a>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>
                             For Service Provider &nbsp;
                            <a href="/RegisterServiceProvider">Register Here</a>&nbsp;
                            or &nbsp;
                            <a href="/ServiceProviderLogin">Login</a>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>
                             Admin &nbsp;
                            <a href="/AdminLogin">Login</a>
                        </p>
                    </div>

                </Form>
            </div>
        </div>
    );
}

export default ServiceProviderLogin