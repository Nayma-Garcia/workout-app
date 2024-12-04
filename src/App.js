import React, { useState } from 'react';
import WorkoutTemplateForm from './components/WorkoutTemplateForm';
import WorkoutList from './components/WorkoutList';
import WorkoutTracker from './components/WorkoutTracker';

function App() {
  const [templates, setTemplates] = useState([]);
  const [workouts, setWorkouts] = useState({});

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Workout Tracker</h1>
      <WorkoutTemplateForm templates={templates} setTemplates={setTemplates} />
      <WorkoutList templates={templates} setWorkouts={setWorkouts} workouts={workouts} />
      <WorkoutTracker workouts={workouts} setWorkouts={setWorkouts} />
    </div>
  );
}

export default App;
