import React from 'react'
import "./Home.scss"

function Home() {
    return (
        <div className='home'>

            <div className='home_content'>
                <img className='home_content_pic' src='https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/01/20133422/software-developer-coding-500x333.jpg'></img>
                <h3>Nikoloz Gabrichidze</h3>
                <h5>Aspiring Software Developer</h5>
                <div className='home_content_nav'>
                    <ul>

                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/education">Education</a>
                        </li>
                        <li>
                            <a href="/projects">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Home
