<template>
    <div>
      <h2>Learn Programming</h2>
      <p>Choose a language to start learning!</p>
      <button @click="startLearning('Python')">Learn Python</button>
      <button @click="startLearning('Java')">Learn Java</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      startLearning(language) {
        alert(`Starting to learn ${language}`);
        // Logic for learning will go here
      }
    }
  };
  </script>
  
  <style scoped>
  /* Scoped styles for this page */
  </style>
  