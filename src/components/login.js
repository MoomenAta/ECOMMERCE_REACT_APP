import React, { useState } from "react";
import loginImg from '../imgs/loginImage.png';
import person from '../imgs/akar-icons_person.png';
import lock from '../imgs/feather_lock.png';
import fb from '../imgs/bx_bxl-facebook-circle.png';
import gmail from '../imgs/logos_google-gmail.png';
import { useSelector , useDispatch } from "react-redux";
import { loggin, userdata } from "../redux/actions";
import { Link , useHistory } from "react-router-dom";
export default function Login()
{
    const loggedIn=useSelector(state=>state.dataOne.loggedIn);
    const userData=useSelector(state=>state.dataOne.userData);
    const dispatch=useDispatch();
    const [password , setpassword] = useState();
    const [passCheck , setpassCheck] = useState();
    const [active , setActive] = useState(true);

    let history = useHistory();
    let loggining = (e)=>
    {
        e.preventDefault();
        let inusername = document.getElementById('inusername').value;
        let inpassword = document.getElementById('inpassword').value;
        let upusername = document.getElementById('upusername').value;
        let uppassword = document.getElementById('uppassword').value;
        if(inusername && inpassword)
        {
            let userindex = userData.findIndex(item=>item.userrname === inusername);
            console.log(userindex)
            if(userindex > -1 && userData[userindex].passsword === inpassword)
            {
                dispatch(loggin());
                history.push('/');
            }
            if(userindex > -1 && userData[userindex].passsword !== inpassword)
            {
                alert('check username or password');
            }else if(userindex === -1)
            {
                alert('check username or password');
            }
            
        }else if (upusername&&uppassword&&passCheck)
        {
            dispatch(loggin());
            dispatch(userdata({userrname : upusername , passsword : uppassword }));
            history.push('/');
        }
    }
    
    let setactive = ()=>
    {
        setActive(!active);
    }
    let settingPassword = (e)=>
    {
        let pass = e.target.value;
        setpassword(pass);
    }
    let checkPassword = (e) =>
    {
        if(e.target.value === password)
        {
            setpassCheck(true);
        }
        else
        {
            setpassCheck(false)
        }
    }
    return(
        <div className="loginContainer">
            <div className="loginImgContainer">
                <img className="loginImg" src={loginImg} />
            </div>
            <div className="loginTextContainer">
                <div className="loginContentContainer">
                    <span onClick={setactive} className={active ? "activeheading" : ""}>Sign In</span>
                    <span onClick={setactive} className={active ? "" : "activeheading"}>Sign Up</span>

                    <form>
                        <div className={active ? "" : "disactiveHeadingContent"}>
                            <div className="formdetailscontainer username">
                                <img className="person" src={person} />
                                <input type="text" id="inusername" placeholder="Username or Email" />
                            </div>
                            <div className="formdetailscontainer password">
                                <img className="password" src={lock} />
                                <input type="text" id="inpassword" placeholder="Password" />
                            </div>
                            <button type="submit" onClick={loggining}>Sign in</button>
                        </div>
                        <div className={active ? "disactiveHeadingContent" : ""}>
                            <div className="formdetailscontainer username">
                                <img className="person" src={person} />
                                <input type="text" id="upusername" placeholder="Username or Email" />
                            </div>
                            <div className="formdetailscontainer password">
                                <img className="password" src={lock} />
                                <input type="text" id="uppassword" onChange={(e)=>settingPassword(e)} placeholder="Password" />
                            </div>
                            <div className="formdetailscontainer password">
                                <img className="password" src={lock} />
                                <input type="text" placeholder="confirm password" onChange={(e)=>checkPassword(e)} />
                            </div>
                            {passCheck? null : "password must be equal"}
                            <button type="submit" onClick={(e)=>loggining(e)}>Sign up</button>
                        </div>
                        
                        <span id="or"> OR </span>
                        <div className="signinwith">
                            <button type="button"> 
                                <img className="fb" src={fb} />
                                <span>Join with facebook</span>
                            </button>
                            <button type="button">
                                <img className="gmail" src={gmail} />
                                <span>Join with gmail</span>
                            </button>
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>
    );
}