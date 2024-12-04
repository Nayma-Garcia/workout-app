import React from 'react';
import { Card, CardContent, Typography, TextField, Box, Button } from '@mui/material';

function WorkoutTracker({ workouts, setWorkouts, setCompletedWorkouts }) {
  const finishWorkout = (workoutName) => {
    const completed = { name: workoutName, details: workouts[workoutName] };
    setCompletedWorkouts((prev) => [...prev, completed]);
    const updatedWorkouts = { ...workouts };
    delete updatedWorkouts[workoutName];
    setWorkouts(updatedWorkouts);
  };

  const updateExercise = (workoutName, exerciseIndex, field, value) => {
    const updatedWorkouts = { ...workouts };
    updatedWorkouts[workoutName][exerciseIndex][field] = value;
    setWorkouts(updatedWorkouts);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Track Your Workouts</Typography>
      {Object.keys(workouts).length === 0 && <Typography>No workouts started yet.</Typography>}
      {Object.keys(workouts).map((workoutName) => (
        <Card key={workoutName} style={{ marginBottom: '10px', backgroundColor: '#3C4A5B' }}>
          <CardContent>
            <Typography variant="h6" color="white">{workoutName}</Typography>
            {workouts[workoutName].map((exercise, index) => (
              <Box key={index} style={{ marginBottom: '10px' }}>
                <Typography variant="body1" color="white"><b>{exercise.name}</b></Typography>
                <TextField 
                  label="Weight" 
                  type="number" 
                  variant="outlined" 
                  margin="dense" 
                  value={exercise.weight} 
                  onChange={(e) => updateExercise(workoutName, index, 'weight', Number(e.target.value))} 
                  fullWidth 
                />
                <TextField 
                  label="Reps" 
                  type="number" 
                  variant="outlined" 
                  margin="dense" 
                  value={exercise.reps} 
                  onChange={(e) => updateExercise(workoutName, index, 'reps', Number(e.target.value))} 
                  fullWidth 
                />
              </Box>
            ))}
            <Button 
              variant="contained" 
              color="success" 
              style={{ marginTop: '10px' }} 
              onClick={() => finishWorkout(workoutName)}
            >
              Finish Workout
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default WorkoutTracker;
