import React from "react";
import { useParams } from "react-router-dom";
import { exercises } from "../data/exercises";

const ExercisePage = () => {
  const { id } = useParams();
  const exercise = exercises.find((ex) => ex.id === id);

  if (!exercise) {
    return <div className="card">Exercise not found.</div>;
  }

  return (
    <div className="card">
      <h1>{exercise.name}</h1>
      <div
        style={{
          marginBottom: 16,
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          src={exercise.videoUrl}
          title={exercise.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2>Instructions</h2>
      <ol className="instructions-list">
        {exercise.instructions.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
      <h2>Muscles Worked</h2>
      <ul className="muscles-list">
        {exercise.musclesWorked.map((muscle, idx) => (
          <li key={idx}>{muscle}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExercisePage;
