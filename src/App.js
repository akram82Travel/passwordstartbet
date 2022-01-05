import logo from "./logo.svg";
import pass from "./pass.svg";

import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const year = new Date().toISOString().slice(0, 4).replace("T", " ");

  //connexion input
  const codeAgentRef = useRef();
  const [message, setMessage] = useState("");

  //login setup
  const generatePass = () => {
    const password = codeAgentRef.current.value * 963;
    console.log(password);
    setMessage(password);
  };

  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <header className="App-header container">
        <h2>Password Generator</h2>
        <img src={pass} alt="logo" className="w-50" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <br />
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-md-10">
            <label>Veuillez inserrer le code de l'agent</label>
            <input
              ref={codeAgentRef}
              placeholder="Code Agent"
              className="form-control input-lg"
              type="number"
            ></input>
          </div>

          <div className="col-md-2">
            <button
              className="btn btn-warning btn-lg w-100 "
              onClick={generatePass}
            >
              Générer
            </button>
          </div>
          <hr></hr>
          <div className="col-md-12">
            <div className="alert alert-dark">
              <h1 className="text-primary">{message + "0"}</h1>
            </div>
          </div>
        </div>
      </header>
      <hr></hr>

      <footer className="p-4 text-white">
        <h6 className="p-4 text-white">
          Pass generator agents <i>Version 1.0</i>
        </h6>
        Copy right {year} Powered by{" "}
        <span className="text-warning">
          <b>Sagrada Soft</b>
        </span>
      </footer>
    </div>
  );
}
export default App;
