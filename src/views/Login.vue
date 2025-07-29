<template>
  <div id="container">
    <h1>Bucket List</h1>
    <h2>Login</h2>
    <form @submit.prevent="userLogin">
      <div class="form-group">
        <label for="email">Email: </label>
        <input type="email" id="userEmail" v-model="email" placeholder="Enter your email: " required>
      </div>
      <div class="form-group">
        <label for="email">Password: </label>
        <input type="password" id="userEmail" v-model="password" placeholder="Enter your password: " required>
      </div>
      <button type="submit" id="submitButton">Login</button>
    </form>
    
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "LoginView",
    data(){
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async userLogin() {
        try {

          //Send data to the backend
          const response = await axios.post('/api/login', {
            email: this.email,
            password: this.password
          });

          const result = await response.json();

          console.log("Success")          

          this.email = ''
          this.password = ''

          this.$router.push('/')

          return result
          
        } catch(error) {
          console.log("Error happend: " + error);
        }
      }
    }
  }
</script>

<style>

.form-group label {
  font-size: 20px;
}

.form-group input {
  padding: 0.2vw 3vh;
}

#submitButton {
  padding: 0.6vh 2.5vh;
  background-color: blueviolet;
  color: white;
  cursor: pointer;
  border-radius: 15px;
}

</style>