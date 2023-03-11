import React, { useEffect } from "react";

import Aos from 'aos';
import 'aos/dist/aos.css'


function Help() {
    useEffect(() => {
        Aos.init({ duration: 1400, delay: 100 });
    }, []);

    return (
        <div className="helpcontainer">
            <div className="title">
                <p>How Can We Help You ?
                </p>
            </div>

            <div data-aos="fade-up" className="tag" >
                <div className="tagtitle">Login</div>
                <div className="tagcontent">Welcome to our Blue Sky Portal. Make sure you have your login Id and an email either for Service Provider or for Customer.
                    If you are New to this place then please Register.</div>
            </div>
            <div className="tag">
                <div className="tagtitle">SignUp</div>
                <div className="tagcontent">If you don't have an account  then please SignUp and start Your Search on Blue Sky portal as a Service Provider or for Customer.</div>
            </div>
            <div data-aos="fade-up" className="tag">
                <div className="tagtitle">Service Provider</div>
                <div className="tagcontent">The Service Provider can login and enter or add their sevices after filling the form.</div>
            </div>
            <div data-aos="fade-up" className="tag">
                <div className="tagtitle">Customer</div>
                <div className="tagcontent">The Customer can login and Start his search for budget friendly services after filling the form.</div>
            </div>
           
            <div data-aos="fade-up" className="tag">
                <div className="tagtitle">Contact Us</div>
                <div className="tagcontent">The place where you can address your issues by sending an email and be rest assured to get it sorted within 24 hours</div>
            </div>

        </div>

    );
}
export default Help;