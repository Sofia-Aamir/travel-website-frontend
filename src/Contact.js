import React from "react";
import './Contact.css';

function Contact(){
    return (
        <section className="contact">
<div className="contact-content">
    <h2>Contact Us</h2>
    <p>Travel and tourism play a pivotal role in the global economy, fostering cultural exchange and personal growth. Exploring new destinations opens doors to enriching experiences, whether it's wandering through ancient historical sites, savoring exotic cuisines, or immersing oneself in the natural wonders of the world. 
    </p>
</div>
<div className="contact-container">
    <div className="contactInfo">
       <div className="box">
        <div className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
        <div className="text">
           <h3>Address</h3>
           <p>4653 Sugar Camp Road,</p>
           <p>Owatona, America</p>
           <p>560060</p>
        </div>
       </div>


       <div className="box">
        <div className="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
        <div className="text">
           <h3>Email Address</h3>
           <p>sofiaaamir2004@gmail.com</p>
        </div>
       </div>


       <div className="box">
        <div className="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
        <div className="text">
           <h3>Phone </h3>
           <p>5600609076</p>
        </div>
       </div>
    </div>

    <div className="contactform">
        <form>
            <h2>Send Message</h2>
            <div className="inputBox">
                <input type="text" name="" required="required"></input>
                <span>Full Name</span>
            </div>

            <div className="inputBox">
                <input type="text" name="" required="required"></input>
                <span>Email</span>
            </div>

            <div className="inputBox">
               <textarea required=""></textarea>
                <span>Type Your Message...</span>
            </div>

            <div className="inputBox">
                <input type="submit" name="" value="send"></input>
            </div>
        </form>
    </div>
</div>
        </section>
    )
}
export default Contact;