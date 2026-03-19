import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import CreateAccountPage from "./CreateAccount";

// This is your Login view
function LoginView() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <h2>Login</h2>
        <input className="input" placeholder="Username" />
        <input className="input" type="password" placeholder="Password" />
        <p 
          onClick={() => navigate("/createaccount")} 
          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
        >
          Create account
        </p>
        <button className="button">Login</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Define which path shows which component */}
      <Route path="/" element={<LoginView />} />
      <Route path="/createaccount" element={<CreateAccountPage />} />
    </Routes>
  );
}

export default App;