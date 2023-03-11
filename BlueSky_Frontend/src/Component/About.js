import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'


function About() {
    useEffect(() => {
        Aos.init({ duration: 2500, delay: 300 });
    }, []);

    return (
        <div className="bodya">
            <div className="container_AboutUs">
                <div className="Job">
                    <p>BlueSky provides a convenient and reliable platform for customers to book home services and connect with trusted professionals, while also providing opportunities for skilled professionals to grow their businesses.</p>
                </div>
                <div className="website f1">
                  
                    <div data-aos="fade" className="websitecont">
                    Customers can use BlueSky to book professionals for services such as home cleaning, pest control, plumbing, electrical work, beauty services, fitness training, and more. The platform allows customers to browse through profiles of professionals, read reviews and ratings from other customers, and book appointments directly through the platform.                    </div>
                </div>
               
                <div data-aos="fade-left" className="team f1">
                    <div className="title">Team</div>
                    <div data-aos="fade-right" className="teamcard">
                       

                        <div className="teamcont">
                            <ul>
                            <li>Subrat Gupta</li>
                                <li>PRN:220941220182</li>
                                <li>guptasubrat@gmail.com </li>
                                <li>Ph:7579154706</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="teamcard">
                        
                        <div className="teamcont">
                            <ul>
                                <li>Vaidya Swapnil</li>
                                <li>PRN: 220941220302</li>
                                <li>vadiyaswapnil500@gmail.com</li>
                                <li>Ph:9356998369</li>
                            </ul>
                        </div>


                    </div>
                    
                    


                </div>


            </div>
        </div>
    );
}

export default About;

