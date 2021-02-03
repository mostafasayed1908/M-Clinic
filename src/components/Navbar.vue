<template>
<div class="container nav-wrapper">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/"><img src="../assets/images/Health-Clinic-Logo.png" alt=""></b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item 
           @click="selectTab(1)"
           href="#">
          <router-link class="tab-nav" to="/services">
          <a
          :class="{'router-link-border' : currentTab == 1}"
          class="nav-link" href="#">Sevices</a>
          </router-link>
        </b-nav-item>
        <b-nav-item 
           @click="selectTab(4)"
           href="#">
          <router-link class="tab-nav" to="/pricing">
          <a
          :class="{'router-link-border' : currentTab == 4}"
          class="nav-link" href="#">Vezeeta <span class="sr-only">(current)</span></a>
          </router-link>
        </b-nav-item>
        <b-nav-item 
           @click="selectTab(5)"
           href="#">
          <router-link class="tab-nav" to="/blog">
          <a
          :class="{'router-link-border' : currentTab == 5}"
          class="nav-link" href="#">Blog <span class="sr-only">(current)</span></a>
          </router-link>
        </b-nav-item>
        <b-nav-item 
          @click="selectTab(3)"
          href="#">
          <router-link class="tab-nav" to="/contactus">
          <a 
          :class="{'router-link-border' : currentTab == 3}"
          class="nav-link" href="#">Contact Us</a>
          </router-link>
        </b-nav-item>
        <b-nav-item 
          @click="selectTab(2)"
          href="#">
          <router-link class="tab-nav" to="/ourdoctors">
          <a 
          :class="{'router-link-border' : currentTab == 2}"
          class="nav-link" href="#">Our Doctors</a>
          </router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item text="Lang" right>
          <Hireme />
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
import Hireme from '@/components/Hireme'

export default {
  props: {
  },
  components: {
    Hireme,
  },
  data: function() {
    return {
      currentTab: 1
    }
  },
  methods: {
    selectTab(tabNumber) {
      this.currentTab =  tabNumber;
    }
  }
}
</script>

<style scoped>
.nav-wrapper {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 10px;
  margin-bottom: 0
}
.navbarr {
    width: 100%;
    height: 120px;
    font-family: 'Ubuntu', sans-serif;

}
.bg-info {
background-color: transparent !important;
padding: 0px 0 !important;
}
.navbar-brand {
  width: 25%;
}
.navbar-brand img {
  max-width: 85px
}
.tab-nav a {
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;
}
.navbar-dark .navbar-nav .nav-link[data-v-41458b80] {
    color: rgb(237, 237, 237);
}
.navbar-dark .navbar-nav .nav-link:focus {
    color: #2f4d66;
}
.router-link-border {
  border-bottom:  4px solid #175978
}
</style>
