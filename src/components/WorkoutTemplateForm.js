import React, { useState } from 'react';

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
    <div>
      <h2>Create Workout Template</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Template Name (e.g., Upper Body)" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Exercises (comma separated, e.g., Bench Press, Pull Ups)" 
          value={exercises} 
          onChange={(e) => setExercises(e.target.value)} 
          required 
        />
        <button type="submit">Add Template</button>
      </form>
      <hr />
    </div>
  );
}

export default WorkoutTemplateForm;
