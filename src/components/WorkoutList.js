import React from 'react';
import { Card, CardContent, Button, Typography, Box } from '@mui/material';

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
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>Your Workout Templates</Typography>
      {templates.length === 0 && <Typography>No templates yet. Add one above!</Typography>}
      {templates.map((template) => (
        <Card key={template.name} style={{ marginBottom: '10px', backgroundColor: '#3C4A5B' }}>
          <CardContent>
            <Typography variant="h6" color="white">{template.name}</Typography>
            <Typography variant="body2" color="white">Exercises: {template.exercises.join(', ')}</Typography>
            <Button 
              variant="contained" 
              color="secondary" 
              style={{ marginTop: '10px' }} 
              onClick={() => startWorkout(template)}
            >
              Start Workout
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default WorkoutList;
