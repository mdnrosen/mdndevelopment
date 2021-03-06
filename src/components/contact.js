import React from 'react'


const Contact = () => {
    return(
        <div className="Contact">
            <div className="containsInfo">
                <div className="email contactCard">
                    <a className="icon" href="mailto:rosenmdn@gmail.com" target="_top">
                        <i className="far fa-envelope"></i>
                    </a>
                    <a className="link emailLink" href="mailto:rosenmdn@gmail.com" target="_top">rosenmdn@gmail.com</a>
                </div>
                <div className="github contactCard">
                    <a className="icon" href="https://www.github.com/mdnrosen" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="link emailLink" href="https://www.github.com/mdnrosen" target="_blank" rel="noopener noreferrer">github.com/mdnrosen</a>
                </div>
                <div className="linkedin contactCard">
                    <a className="icon" href="https://www.github.com/mdnrosen" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className="link emailLink" href="https://www.linkedin.com/in/miles-rosen-a04300201/" target="_blank" rel="noopener noreferrer">linkedin.com/in/miles-rosen</a>
                </div>
            </div>
            
        </div>
    )
}



export default Contact