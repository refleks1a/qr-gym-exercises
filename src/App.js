import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ExercisePage from "./components/ExercisePage";
import { exercises } from "./data/exercises";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ maxWidth: 500, margin: "0 auto", padding: 24 }}>
              <h1>Gym Machine Exercises</h1>
              <p>
                Scan a QR code on a gym machine to view the exercise info, or
                select one below:
              </p>
              <ul>
                {exercises.map((ex) => (
                  <li key={ex.id}>
                    <Link to={`/exercise/${ex.id}`}>{ex.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
        <Route path="/exercise/:id" element={<ExercisePage />} />
      </Routes>
    </Router>
  );
}

export default App;
