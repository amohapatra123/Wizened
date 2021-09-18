import React, { useState } from "react";
import Logo from "../Assets/My_Logo.png";
import { Registration,Login } from "../Utils/home";
import "../Styles/home.css";
function Home() {
    const [login, setLogin] = useState(false);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [cpass, setCpass] = useState("");
    
    const getValue = {
        "name": name,
        "username": username,
        "pass": pass,
        "cpass":cpass
    }
    const getFunc = {
         "name": setName,
        "username": setUsername,
        "pass": setPass,
        "cpass":setCpass
    }
    const handleChange = (e,name) => {
        getFunc[name](e.target.value);
    }
    return (
    <div className="log-container">
            <div className="log-left">
                <div className="logo">
                   <img src={Logo} alt=""/> 
                </div>
                <div className="app-name">
                Wizened - The Aura Conjecture
                </div>
            </div>
            <div className="log-right">
                {
                    login ?
                        <>
                             { Login.map((item) => {
                        return (
                         <div className="input" key={item.id}>
                         <input  name={item.name} value={getValue[item.value]} placeholder={item.placeholder}  onChange={(e)=>handleChange(e,item.name)}   />
                         </div>
                    )
                })}
                        </>
                    :
                        <>
                       { Registration.map((item) => {
                        return (
                         <div className="input" key={item.id}>
                         <input  name={item.name} value={getValue[item.value]} placeholder={item.placeholder}  onChange={(e)=>handleChange(e,item.name)}   />
                         </div>
                    )
                })}
                    </>
                }
                <div className="button">
                    {
                        login ?
                            "Login"
                            :
                            "Register"
                    }
                </div>
                <div className="but-lower">
                    {
                        login ?
                            <>
                                Don't have an account ? <span onClick={()=>setLogin(false)}>Register</span>
                            </>
                            :
                            <>
                                Have an account ? <span onClick={()=>setLogin(true)}>Login</span>
                            </>
                    }
                </div>
            </div>
    </div>
    )
}

export default Home;