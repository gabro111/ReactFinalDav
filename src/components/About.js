import React from 'react'
import Header from './Header'
import "./About.scss"
function About() {
    return (

        <div className='whole'>
            <Header />
            <div className='about'>
                <div className='about_content'>
                    <h1 className='about_title'>About me</h1>
                    <hr></hr>
                    <p className='about_body'>
                        Im an aspiring software developer trying to learn all kinds of technology to make a living out of the profesion that i love.
                        <br />im currently trying to learn ASP.Net Backend and become adept in this tecnology<br>
                        </br>so i can work in this field.
                    </p>


                    <form className='about_form'>
                    <h1>Contact Me</h1>
                    <hr></hr>
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                        <label for="country">Country</label>
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default About
