import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./App.css"; 

function CreateAccountPage() {
    const navigate = useNavigate()
    return (
        <div className="container">
            <form className="form">
                <h2>Create Account</h2>

                <input 
                    className="input"
                    type="text"
                    placeholder="Username"
                    />
                
                <input 
                    className="input"
                    type="email"
                    placeholder="Email"
                    />

                <input 
                    className="input"
                    type="password"
                    placeholder="Password"
                    />
                
                <p 
                    onClick={() => navigate("/")} 
                    style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                    >
                    Back to login page
                </p>

                <button className="button">Create Account</button>

            </form>
        </div>
    )
}

export default CreateAccountPage;