<template>
  <div class="dashboard">
    <p>This is dashboard</p>
    <!-- <img src="../assets/501.png" alt="" /> -->
    <h1>Hello {{ userData.name }}</h1>
    <Chart />
  </div>
</template>


<script>
import firebase from "firebase";
import Chart from "./Chart";

export default {
  name: "Dashboard",
  components: { Chart },
  methods: {
    getUserData(uid) {
      firebase
        .database()
        .ref("users/" + uid)
        .once("value", (snap) => {
          console.log(snap.val());
          this.userData = snap.val();
        });
    },
  },
  data() {
    return {
      currentUser: "",
      userData: {},
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.getUserData(user.uid);
      }
    });
  },
};
</script>

<style scoped>
.dashboard {
  background-color: #0b0c10;
  /* color: #fff; */
}
</style>