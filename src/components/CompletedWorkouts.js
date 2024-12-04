import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function CompletedWorkouts({ completedWorkouts }) {
  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>Completed Workouts</Typography>
      {completedWorkouts.length === 0 && <Typography>No completed workouts yet.</Typography>}
      {completedWorkouts.map((workout, index) => (
        <Card key={index} style={{ marginBottom: '10px', backgroundColor: '#3C4A5B' }}>
          <CardContent>
            <Typography variant="h6" color="white">{workout.name}</Typography>
            {workout.details.map((exercise, idx) => (
              <Typography key={idx} variant="body2" color="white">
                {exercise.name}: {exercise.weight} lbs, {exercise.reps} reps
              </Typography>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default CompletedWorkouts;
