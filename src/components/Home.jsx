import React from "react";
import NewImage from '../assets/NewImage.png'
import './home.css'
import {useNavigate} from 'react-router-dom'
import { Fade,Bounce } from "react-awesome-reveal";

function Home (){
    const navigate = useNavigate();
    const nextPage = () =>{
        navigate('/chat')
    }
    
    return(
        <>
            <div className="main">
                <Fade duration={3000} direction="down">
                    <img src={NewImage} alt="logo" />
                </Fade>
                <Fade delay={600} duration={2000}>
                    <h2 className="heading">Hey , Enter into Student info System</h2>
                </Fade>
                <button className="btn_home" onClick={nextPage}>Enroll Now!</button>
            </div>
            
        </>
    )
}

export default Home;