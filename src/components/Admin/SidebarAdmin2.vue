<template>
 <div>
   
 </div>
</template>

<script>
export default {
    methods: {
       Logout() {
      if (localStorage.getItem("token")) {
        localStorage.clear();
        this.$router.push({ name: "Login" });
      }
    },
    }
};
</script>

<style>
</style>