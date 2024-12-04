import React from 'react';

function WorkoutTracker({ workouts, setWorkouts }) {
  const updateExercise = (workoutName, exerciseIndex, field, value) => {
    const updatedWorkouts = { ...workouts };
    updatedWorkouts[workoutName][exerciseIndex][field] = value;
    setWorkouts(updatedWorkouts);
  };

  return (
    <div>
      <h2>Track Your Workouts</h2>
      {Object.keys(workouts).length === 0 && <p>No workouts started yet.</p>}
      {Object.keys(workouts).map((workoutName) => (
        <div key={workoutName}>
          <h3>{workoutName}</h3>
          {workouts[workoutName].map((exercise, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <p><b>{exercise.name}</b></p>
              <label>
                Weight:
                <input 
                  type="number" 
                  value={exercise.weight} 
                  onChange={(e) => updateExercise(workoutName, index, 'weight', Number(e.target.value))} 
                />
              </label>
              <label>
                Reps:
                <input 
                  type="number" 
                  value={exercise.reps} 
                  onChange={(e) => updateExercise(workoutName, index, 'reps', Number(e.target.value))} 
                />
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default WorkoutTracker;
