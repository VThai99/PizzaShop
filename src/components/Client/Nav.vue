<template>
  <div v-if="$route.meta.header">
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div class="container">
        <router-link class="navbar-brand" to="/"
          ><span class="flaticon-pizza-1 mr-1"></span>Pizza<br /><small
            >Delicous</small
          ></router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Menu" class="nav-link">Menu</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Services" class="nav-link"
                >Services</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/Blog" class="nav-link">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/About" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
    };
  },
  methods: {
   
  },
};
</script>

<style>
  .nav-item:hover{
    transition-delay: 0.15s;
    margin-top: -3px;
  }
</style>