import React from 'react';

function WorkoutList({ templates, setWorkouts, workouts }) {
  const startWorkout = (template) => {
    if (!workouts[template.name]) {
      setWorkouts({ 
        ...workouts, 
        [template.name]: template.exercises.map((exercise) => ({
          name: exercise,
          weight: 0,
          reps: 0,
        })),
      });
    }
  };

  return (
    <div>
      <h2>Workout Templates</h2>
      {templates.length === 0 && <p>No templates yet. Add one above!</p>}
      {templates.map((template) => (
        <div key={template.name} style={{ marginBottom: '10px' }}>
          <h3>{template.name}</h3>
          <p>Exercises: {template.exercises.join(', ')}</p>
          <button onClick={() => startWorkout(template)}>Start Workout</button>
        </div>
      ))}
      <hr />
    </div>
  );
}

export default WorkoutList;
