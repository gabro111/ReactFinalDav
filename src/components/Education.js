import React from 'react'
import "./Education.scss"
import Header from './Header'
import LogoBtu from '.././images/BTU_Logo_new-1.svg'
import LogoSchool from '.././images/mwgn-favicon.png'



function Education() {

    const btuWindow = () => {
    console.log("vax bliad")
    window.open("https://btu.edu.ge/","_blank")
    }
    const schoolWindow = () => {
        console.log("vax bliad")
        window.open("https://muschool.edu.ge/","_blank")
        }
    return (
        <div>
            <Header />

            <div className='education'>
                <div className='education_general'>

                    <img  src='https://miro.medium.com/max/587/1*CRMgWxSn_RaHCGhvC6PC2g.jpeg'></img>
                    <p>
                        Ever since childhood I've been keen to coding and to learn more about it.

                    </p>

                </div>
                <h1>Education:</h1>
                <hr></hr>
                <div onClick={btuWindow} className='education_btu'>
                    <div className='education_header'>
                        <img src={LogoBtu} alt="BtuLogo"></img>
                        <h1>BTU</h1>
                    </div>
                    <p>
                        Currently, I am a student of Business and Technology University learning IT. <br></br>Through three years of learning, I have found myself grown education-wise towards many different sectors of IT.

                    </p>

                </div>
                <div onClick={schoolWindow} className='education_school'>
                    <div className='education_header'>
                        <img src={LogoSchool}></img>
                        <h1>MU</h1>
                    </div>


                    <p>
                        I have graduated from MU (მწიგნობართ უხუცესი), where I gained experience <br></br>towards learning and got basic education throughout the years.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Education
