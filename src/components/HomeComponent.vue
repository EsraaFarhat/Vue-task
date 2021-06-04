<template>
  <div class="mainwrapper">
    <h1>Welcome to {{ email }}</h1>
    <button type="submit" @click="logout">logout</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    email: "",
  }),
  methods: {
    logout() {
      localStorage.removeItem("logged_in_email");
      this.$router.push("/login");
    },
  },
  created() {
    this.email = localStorage.getItem("logged_in_email");
    if (this.email == null) {
      this.$router.push("/login");
    }
  },
};
</script>
<style lang="scss" scoped>
.mainwrapper {
  text-align: center;
  h1 {
    background-color: darkgray;
    padding: 2% 0;
  }
  button {
    width: 10%;
    height: 40px;
    border: none;
    border-radius: 2%;
    background-color: #ff0e42;
    color: white;
    
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
}
</style>
