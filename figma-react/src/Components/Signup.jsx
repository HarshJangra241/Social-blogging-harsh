import React, { useState } from 'react'
import '../ComponentCSS/Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SignupAPI } from '../APIs/endpoints';


const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [signupdetail, setSignupDetail] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    //validation 
    const [errors, setErrors] = useState({});
    const handleError = async () => {
        const error = {};
        if (!signupdetail.userName.trim()) {
            error.userName = "Name is required!";
        }
        if (!signupdetail.email.trim()) {
            error.email = "Email is required!";
        }
        if (!signupdetail.password.trim()) {
            error.password = "Password is required!";
        }
        if (!signupdetail.confirmPassword) {
            error.confirmPassword = "Please confirm your password!";
        }
        else if (Object.keys(errors).length === 0) {
            dispatch(SignupAPI(signupdetail));
            alert("Account created successfully!");
            navigate("/");
        }
        setErrors(error);
    }
    return (
        <><div className='main-signup'>
            <div className="signup-container">
                <div className="signup-content">
                    <h1>SIGNUP</h1>
                    <p className='signup-para'>If you already have an account
                        <Link to='/'> login.</Link>
                    </p>
                </div>
                <div className="signup-inputs">
                    <input type="text" placeholder='Username' value={signupdetail.userName} onChange={(e) => { setErrors({}); setSignupDetail({ ...signupdetail, userName: e.target.value }) }} />
                    {errors.userName && <span>{errors.userName}</span>}
                    <input type="email" placeholder='Email' value={signupdetail.email} onChange={(e) => { setErrors({}); setSignupDetail({ ...signupdetail, email: e.target.value }) }} />
                    {errors.email && <span>{errors.email}</span>}
                    <input type="password" placeholder='Password' value={signupdetail.password} onChange={(e) => { setErrors({}); setSignupDetail({ ...signupdetail, password: e.target.value }) }} />
                    {errors.password && <span>{errors.password}</span>}
                    <input type="password" placeholder='Comfirm password' value={signupdetail.confirmPassword} onChange={(e) => { setErrors({}); setSignupDetail({ ...signupdetail, confirmPassword: e.target.value }) }} />
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className="signup-btn">
                    <button onClick={() => handleError()}>CREATE ACCOUNT</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Signup