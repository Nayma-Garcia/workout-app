import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function WorkoutTemplateForm({ templates, setTemplates }) {
  const [name, setName] = useState('');
  const [exercises, setExercises] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && exercises) {
      const newTemplate = {
        name,
        exercises: exercises.split(',').map((ex) => ex.trim()),
      };
      setTemplates([...templates, newTemplate]);
      setName('');
      setExercises('');
    }
  };

  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>Create a Workout Template</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          fullWidth 
          label="Template Name (e.g., Upper Body)" 
          variant="outlined" 
          margin="normal" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <TextField 
          fullWidth 
          label="Exercises (comma-separated)" 
          variant="outlined" 
          margin="normal" 
          value={exercises} 
          onChange={(e) => setExercises(e.target.value)} 
          required 
        />
        <Button 
          variant="contained" 
          type="submit" 
          color="primary" 
          fullWidth 
          style={{ marginTop: '10px' }}
        >
          Add Template
        </Button>
      </form>
    </Box>
  );
}

export default WorkoutTemplateForm;
