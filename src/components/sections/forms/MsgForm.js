import React from 'react';
import '../../../styles/form.css';

export default function MsgForm(){
    return (
    <div className="border-left">
    
    <form>
        <div className="row">
            <div className="col-25">
                <label htmlFor="fname">First Name</label>
            </div>
            <div className="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
            </div>
        </div>

        <div className="row">
            <div className="col-25">
                <label htmlFor="email">Email</label>
            </div>
            <div className="col-75">
                <input type="email" id="email" name="email" placeholder="Your email.."/>
            </div>
        </div>


        <div className="row">
            <div className="col-25">
                <label htmlFor="message">Message</label>
            </div>
            <div className="col-75">
                <textarea id="message" name="message" placeholder="Your message.." ></textarea>
            </div>
        </div>

        <div className="row btn">
            <input type="submit" value="Submit"/>
        </div>
    </form>
    </div>
)};