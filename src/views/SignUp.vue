<template>
  <div id="container">
    <h1>Bucket List</h1>
    <h2>Sign Up</h2>
    <form action="">
      <div class="form-group">
        <label for="email">Email: </label>
        <input type="email" id="userEmail">
      </div>
      <div class="form-group">
        <label for="email">Password: </label>
        <input type="password" id="userEmail">
      </div>
      <button id="submitButton">Sign Up</button>
    </form>
    
  </div>
</template>

<script>
  export default {
    name: "SignUpView",
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