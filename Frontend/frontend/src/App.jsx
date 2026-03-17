import "./App.css";

function App() {
  return (
    <div className="container">
      <form className="form">
        <h2>Login</h2>
        <input className="input" placeholder="Username" />
        <input className="input" type="password" placeholder="Password" />
        <button className="button">Login</button>
      </form>
    </div>
  );
}

export default App;