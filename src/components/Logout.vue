<template>
  <div>
    <button v-if="isLoggedIn" @click="logoutClick" class="logout">
      Logout
    </button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    async logoutClick() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.logout {
  color: #66fcf1;
  padding: 2px;
  background: none;
  outline: none;
  border: 1px solid #66fcf1;
  border-radius: 5px;
  width: 80px;
  margin-left: 40px;
  cursor: pointer;
}
</style>