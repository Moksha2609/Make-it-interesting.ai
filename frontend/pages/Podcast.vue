<template>
    <div>
      <h2>AI Podcast Generator</h2>
      <button @click="generatePodcast">Generate Podcast</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      generatePodcast() {
        alert("Generating podcast...");
        // Logic for podcast generation
      }
    }
  };
  </script>
  
  <style scoped>
  /* Scoped styles for this page */
  </style>
  