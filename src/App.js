import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import WorkoutTemplateForm from './components/WorkoutTemplateForm';
import WorkoutList from './components/WorkoutList';
import WorkoutTracker from './components/WorkoutTracker';
import CompletedWorkouts from './components/CompletedWorkouts';

function App() {
  const [templates, setTemplates] = useState([]);
  const [workouts, setWorkouts] = useState({});
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  return (
    <Container 
      maxWidth="sm" 
      style={{ 
        backgroundColor: '#2E3B4E', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '8px', 
        minHeight: '100vh' 
      }}
    >
      <Typography variant="h4" align="center" gutterBottom style={{ marginBottom: '20px' }}>
        Workout Tracker
      </Typography>
      <WorkoutTemplateForm templates={templates} setTemplates={setTemplates} />
      <WorkoutList templates={templates} setWorkouts={setWorkouts} workouts={workouts} />
      <WorkoutTracker 
        workouts={workouts} 
        setWorkouts={setWorkouts} 
        setCompletedWorkouts={setCompletedWorkouts} 
      />
      <CompletedWorkouts completedWorkouts={completedWorkouts} />
    </Container>
  );
}

export default App;
