import React from "react";
import { useParams } from "react-router-dom";
import { exercises } from "../data/exercises";

const ExercisePage = () => {
  const { id } = useParams();
  const exercise = exercises.find((ex) => ex.id === id);

  if (!exercise) {
    return <div style={{ padding: 24 }}>Exercise not found.</div>;
  }

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 24 }}>
      <h1>{exercise.name}</h1>
      <div style={{ marginBottom: 16 }}>
        <iframe
          width="100%"
          height="280"
          src={exercise.videoUrl}
          title={exercise.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2>Instructions</h2>
      <ol>
        {exercise.instructions.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
      <h2>Muscles Worked</h2>
      <ul>
        {exercise.musclesWorked.map((muscle, idx) => (
          <li key={idx}>{muscle}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExercisePage;
