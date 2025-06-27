<template>
  <router-link to="/signup"><button>Sign Up</button></router-link>
  <div class="container">
    <Header v-if="showHeader" @toggle-add-task="toggleAddTask" title="Bucket List" :showAddTask="showAddTask"/>
    <!--you can also use v-show instead of v-if-->
    <router-view :showAddTask="showAddTask"></router-view><!--List of all tasks-->
    <Footer @toggle-add-button-off="toggleAddButtonOff"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      showAddTask: false,
      showHeader: true
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    toggleAddButtonOff() {
      this.showHeader = false
    },
    toggleAddButtonOn() {
      this.showHeader = true
      setTimeout(() => {//Wait until we move to main page and reload it so header will show up
        location.reload();
      }, 1)
    },
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&family=Kanit:wght@300;400&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Kanit', sans-serif;
  }
  .container {
    max-width: 800px;
    margin: 70px auto;
    overflow: auto;
    min-height: 300px;
    border: 3px solid #7209b7;
    padding: 80px;
    border-radius: 5px;
  }
  .btn {
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 30px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }

  .btn-add:hover {
    transform: scale(1.1);
    transition: 0.5s;
    box-shadow: 1px 1px 1px #464646;
  }

  .btn:focus {
    outline: none;
  }
  .btn:active {
    transform: scale(0.98);
  }
  .btn-block {
    display: block;
    width: 100%;
  }

  .btn-block:hover {
    transform: scale(1.03);
    transition: 0.5s;
    box-shadow: 2px 2px 2px #464646;
  }
</style>
