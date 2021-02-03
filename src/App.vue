<template>
<v-app>
  <div id="app">
    <div class="app-container">
      <p class="left-p">HEALTH CLINIC | HEALTH CLINIC | HEALTH CLINIC</p>
      <p class="right-p">HEALTH CLINIC | HEALTH CLINIC | HEALTH CLINIC</p>
      <Navbar />
      <v-content>
        <router-view/>
      </v-content>
    </div>
  </div>
</v-app>
</template>

<script>
/*Including Vue-bootstrap*/
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
/*Import Components*/
import Navbar from './components/Navbar';

export default {
  name: 'app',
  components: {
    Navbar,
    
  }
}
</script>

<style>

* {
  margin:0;
  padding:0;
  box-sizing: border-box
}
a:hover {
    text-decoration: none;
}
a:active {
    outline: none;
}
a, a:active, a:focus{

    outline: none; /* Works in Firefox, Chrome, IE8 and above */ 

}
html {
  width: 100%;
  height: 100%;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
/*
  background: -moz-linear-gradient(top, #7db9e8 0%, #2989d8 46%, #1e5799 100%);
  background: -webkit-linear-gradient(top, #7db9e8 0%,#2989d8 46%,#1e5799 100%);
  background: linear-gradient(to bottom, #7db9e8 0%,#2989d8 46%,#1e5799 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 );
  
  background-image: url('https://images.pexels.com/photos/953214/pexels-photo-953214.jpeg?cs=srgb&dl=backgrounds-blank-blue-953214.jpg&fm=jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  */
  /*background-color: rgb(240, 240, 240);*/
  background-image: url("./assets/images/zz.jpg");
  background-attachment: fixed;
  background-size: cover;
}
#app {
  width: 100%;
  height: 100%;
}
.app-container {
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
}
.left-p {
  position: fixed;
  top: 316px;
  left: -128px;
  font-family: 'Ubuntu', sans-serif;
  -webkit-transform: rotate(90deg);
  transform: rotate(270deg);
  font-size: 12px;
  z-index:1
}
.right-p {
  position: fixed;
  top: 316px;
  right: -128px;
  font-family: 'Ubuntu', sans-serif;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  font-size: 12px;
  z-index:1

}
.theme--light.application {
    background: transparent !important;
    color: rgba(0,0,0,0.87);
}
@media all and (max-width: 768px) { 
  .left-p {
    display: none;
  }
  .right-p {
    display: none;
  }
 }
</style>
