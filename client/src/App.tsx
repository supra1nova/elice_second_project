import React from "react";
import logo from "./logo.svg";
import "./App.css";

//fetch test
function App() {
    return (
        <div className="App">
            <button
                onClick={() => {
                    fetch("/api/customers")
                        .then((res) => res.json())
                        .then((data) => console.log(data));
                }}
            >
                Get data
            </button>
        </div>
    );
}

export default App;
