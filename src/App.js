import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ExercisePage from "./components/ExercisePage";
import { exercises } from "./data/exercises";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <header className="app-header">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="FitQR Logo"
            className="brand-logo"
          />
          <span className="logo-text">FitQR</span>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <div className="card">
                <h1>Gym Machine Exercises</h1>
                <p>
                  Scan a QR code on a gym machine to view the exercise info, or
                  select one below:
                </p>
                <ul className="exercise-list">
                  {exercises.map((ex) => (
                    <li key={ex.id}>
                      <Link className="exercise-link" to={`/exercise/${ex.id}`}>
                        {ex.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
          <Route path="/exercise/:id" element={<ExercisePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
