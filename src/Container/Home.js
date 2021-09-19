import React, { useState } from "react";
import Logo from "../Assets/My_Logo.png";
import { Registration, Login } from "../Utils/home";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import "../Styles/home.css";
function Home(props) {
    
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [cpass, setCpass] = useState("");
    const [error, setError] = useState("");
    
    const getValue = {
        "email": email,
        "pass": pass,
        "cpass":cpass
    }
    const getFunc = {
        "email": setEmail,
        "pass": setPass,
        "cpass":setCpass
    }
    const handleChange = (e,name) => {
        getFunc[name](e.target.value);
    }
    const handleRegister = () => {
        if (pass === cpass) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, pass).then((res) => {
                setError("");
                props.history.push("/d")
        }).catch((err) => {
            setError(err.message.split(":")[1].split("(")[0])
        })
        } else {
            setError("Passwords do not match")
       }
    }
    const handleLogin = () => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, pass).then((res) => {
                setError("");
                    props.history.push("/d")
        }).catch((err) => {
            setError(err.message.split(":")[1].split("(")[0])
        })
       
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
                         <input type={item.type}  name={item.name} value={getValue[item.value]} placeholder={item.placeholder}  onChange={(e)=>handleChange(e,item.name)}   />
                         </div>
                    )
                })}
                        </>
                    :
                        <>
                       { Registration.map((item) => {
                        return (
                         <div className="input" key={item.id}>
                         <input type={item.type}  name={item.name} value={getValue[item.value]} placeholder={item.placeholder}  onChange={(e)=>handleChange(e,item.name)}   />
                         </div>
                    )
                })}
                    </>
                }
                <div className="button" onClick={login ? handleLogin:handleRegister}>
                    {
                        login ?
                            "Login"
                            :
                            "Register"
                    }
                </div>
                <strong className="error-msg">{ error ? error :"" }</strong>
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