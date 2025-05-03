<template>
    <div>
      <h2>Daily Tasks</h2>
      <ul>
        <li v-for="task in tasks" :key="task._id">
          {{ task.title }} - Level: {{ task.level }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        tasks: []
      };
    },
    mounted() {
      axios.get('http://localhost:5000/api/tasks')
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((error) => {
          console.error("Error fetching tasks:", error);
        });
    }
  };
  </script>
  
  <style scoped>
  /* Scoped styles for this page */
  </style>
  