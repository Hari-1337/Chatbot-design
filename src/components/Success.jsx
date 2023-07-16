import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import './success.css'
import tick from '../assets/tick.svg'
import {Fade,AttentionSeeker} from 'react-awesome-reveal'
import { useNavigate } from "react-router-dom";

const Success = ()=>{
    const name = useSelector((state)=>state.user.name)
    const navigate = useNavigate()
    const age = useSelector((state)=>state.user.age)
    const navi = () =>{
        navigate('/')
    }
    
    useEffect(()=>{
        if(age==0 || name == ""){
            navigate('/chat')
        }
    },[])
    return(
         <div className="main_suc">
            <AttentionSeeker effect="pulse" duration={4000}>
                <img src={tick} alt="Completed" className="img_su"/>
            </AttentionSeeker>
                <Fade duration={4000}>
                    <h2 className="heading_su">Your name {name} aged {age} has been added to student system. You may now exit.</h2>
                </Fade>
                <button onClick={navi} className="btn_home">Go Back!</button>
        </div>
    )
}
export default Success