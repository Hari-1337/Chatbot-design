import React, { useEffect, useRef } from "react";
import { useState } from "react";
import './chat.css'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { useDispatch } from "react-redux";
import { updateName,updateAge } from "../../feature/userSlice";
import { useNavigate } from "react-router-dom";


function Chat (){
    const [dis,setDis] = useState(false);
    const[count,setCount] = useState(8);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [text,setText] = useState('')
    const [arrayMes,setArrayMes] = useState([])

    const refIn = useRef();
    const refBtn = useRef();


    useEffect(()=>{
        if(arrayMes.length<=0){
            setArrayMes([...arrayMes,{msg:<p className="lds-ellipsis"><div></div><div></div><div></div><div></div></p>,Name:'bot'}])
            setTimeout(()=>{
                setArrayMes([...arrayMes,{
                    msg:'Hello, Welcome to Student info System!',
                    Name:'bot',
                    quick : 'Got it!'
                }])
                refIn.current.value=""
            },3000)
        }
    },[])


    function firstMsg(){
        setText('Got it!')
        if(text=="Got it!" || text == "got it!"){
            setArrayMes([...arrayMes,{msg:text,Name:'you'},{msg:<p className="lds-ellipsis"><div></div><div></div><div></div><div></div></p>,Name:'bot'}]);
            refBtn.current.style.display = 'none'
            setText('')            

            setTimeout(()=>{
                setArrayMes([...arrayMes,{msg:text,Name:'you'},{msg:"Enter Your Name",Name:"bot"}])
                refIn.current.value=""
            },3000)
            
        }
        
    }

    const sendMsg = ()=>{
        
        if(text===""){
            return
        }
        if((arrayMes[arrayMes.length-1].msg == "Enter Your Name" || arrayMes[arrayMes.length-1].msg == "Please! Enter valid name")){
            if(text.length>=4){
                setArrayMes([...arrayMes,{msg:text,Name:'you'},{msg:<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>,Name:'bot'}]);

                setTimeout(()=>{
                    setArrayMes([...arrayMes,{msg:text,Name:'you'},{msg:"Enter Your Age",Name:"bot"}])
                },3000)
                dispatch(updateName(text))
                refIn.current.value=""

            }else{
                setArrayMes([...arrayMes,{msg:text,Name:'you'},{msg:<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>,Name:'bot'}]);

                setTimeout(()=>{
                    setArrayMes([...arrayMes,{msg:text,Name:'you'},{msg:"Please! Enter valid name",Name:"bot"}])
                },3000)
                refIn.current.value=""
            }
        }
        else if((arrayMes[arrayMes.length-1].msg == "Enter Your Age" || arrayMes[arrayMes.length-1].msg == "Please! Enter valid age")){
            if(Number(text)>=20 && Number(text)<40){
                setArrayMes([...arrayMes,{msg:text,Name:'you'},{msg:<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>,Name:'bot'}]);

                setTimeout(()=>{
                    setArrayMes([...arrayMes,{msg:text,Name:'you'},{msg:"Thank You. In 5 seconds, bot will exit",Name:"bot"}])
                    setDis(true)
                },3000)
                
                dispatch(updateAge(Number(text)))
                refIn.current.value=""
                const myInterval = setInterval(() => {
                    setCount((count)=>{return count-1});
                    console.log(count)
                }, 1000);
                setTimeout(()=>{
                    clearInterval(myInterval)
                    navigate('/success')
                },8000)
                

            }else{
                setArrayMes([...arrayMes,{msg:text,Name:'you'},{msg:<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>,Name:'bot'}]);

                setTimeout(()=>{
                    setArrayMes([...arrayMes,{msg:text,Name:'you'},{msg:"Please! Enter valid age",Name:"bot"}])
                },3000)
                refIn.current.value=""

            }
        }else{
                setArrayMes([...arrayMes,{msg:text,Name:'you'},{msg:<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>,Name:'bot'}]);

                setTimeout(()=>{
                    setArrayMes([...arrayMes,{msg:text,Name:'you'},{msg:"Network Error, Try Again Later",Name:"bot"}])
                },3000)
                refIn.current.value=""

            
        }

        setText('')
    }

    return(
        <>
            <div className="container">
                <div className="chat_con">
                    {/* Here we will display all the objects which are stored in our array object */}
                    {arrayMes.map((data)=>{
                        if(data.Name=="bot" && data.quick){
                            return(<div key={data.msg}><div style={{display:"flex"}}>
                            <span className="boot"><SmartToyOutlinedIcon className="boot_im" fontSize="large" color="primary"/></span>
                            <p key={data.msg} className={data.Name}>{data.msg}</p>
                        </div>
                            <button ref={refBtn} className="quick" onClick={firstMsg}>{data.quick}</button>
                        </div>)
                        }else if(data.Name=="bot"){
                            return (<div style={{display:"flex"}} key={data.msg}>
                                <span className="boot"><SmartToyOutlinedIcon className="boot_im"fontSize="large" color="primary"/></span>
                                <p className={data.Name}>{data.msg}</p>
                            </div>)
                        }
                        else{
                            return <p key={data.msg} className={data.Name}>{data.msg}</p>
                        }
                    })}
                   
                </div>
                {/* Redirecting message starting value it is set to false */}
                {/* Conditional Rendering */}
                {dis && <p className="msg">You are being redirected in {count} seconds.</p>}
                <div className="input_con">
                    <input type="text" className="input_t" ref={refIn} onChange={(e)=>setText(e.target.value)}/>
                    <button className="btn_chat" onClick={sendMsg}><SendRoundedIcon /></button>
                </div>
                
            </div>
        </>
    )
}

export default Chat;