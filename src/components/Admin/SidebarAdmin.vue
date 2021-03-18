<template>
    <div
      class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show"
      id="sidebar"
      v-if="$route.meta.sidebar1"
    >
      <div class="c-sidebar-brand d-lg-down-none">
          Admin
      </div>
      <ul class="c-sidebar-nav">
        <li class="c-sidebar-nav-title">Components</li>
        <li class="c-sidebar-nav-item">
         <router-link to="/Product" class="c-sidebar-nav-link">
            <svg class="c-sidebar-nav-icon">
            </svg>
            Product</router-link
          >
        </li>
        <li class="c-sidebar-nav-item">
          <router-link to="/Acount" class="c-sidebar-nav-link">
            <svg class="c-sidebar-nav-icon">
            </svg>
            Account</router-link
          >
        </li>
           <li class="c-sidebar-nav-item">
          <router-link to="/Category" class="c-sidebar-nav-link">
            <svg class="c-sidebar-nav-icon">
            </svg>
            Category</router-link
          >
        </li>
        <li class="c-sidebar-nav-title">Other</li>
        <li class="c-sidebar-nav-item">
          <a class="c-sidebar-nav-link" href="typography.html">
            <svg class="c-sidebar-nav-icon">
              <use
                xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-pencil"
              ></use>
            </svg>
            Nothing</a
          >
        </li>
             <li class="c-header-nav-item dropdown">
          <a
            class="c-header-nav-link"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="c-sidebar-nav-item">
              <!-- <img
                class="c-avatar-img"
                src="assets/img/avatars/6.jpg"
                
              /> -->
              <a>{{name}}</a>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-right pt-0">
            <a class="dropdown-item abc" @click="Logout">
              <svg class="c-icon mr-2">
                <use
                  xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-account-logout"
                ></use>
              </svg>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </div>

</template>

<script>
export default {
    data(){
      return {
        name:null
      }
    },
    mounted(){
      this.name=localStorage.getItem("username")
    },
    methods: {
       Logout() {
      if (localStorage.getItem("token")) {
        localStorage.clear();
        this.$router.push({ name: "Login" });
        this.name= null;
      }
    },
    }
};
</script>

<style>
.abc{
  cursor: pointer;
}
</style>