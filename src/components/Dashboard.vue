<template>
  <div class="dashboard">
    <!-- <p>This is dashboard</p>
    <h1>Hello {{ userData.name }}</h1> -->
    <!-- <Chart /> -->
    <DashMain />
    <DashHeader />
    <DashSideBar />
    <DashNotes />
    <DashStats />
  </div>
</template>


<script>
import firebase from "firebase";
// import Chart from "./Chart";
import DashStats from "./DashStats";
import DashNotes from "./DashNotes";
import DashSideBar from "./DashSideBar";
import DashMain from "./DashMain";
import DashHeader from "./DashHeader";

export default {
  name: "Dashboard",
  components: {
    // Chart,
    DashMain,
    DashHeader,
    DashStats,
    DashSideBar,
    DashNotes,
  },
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
  padding: 100px 25px;
  box-sizing: border-box;
  background-color: #0b0c10;
  text-align: center;
  display: grid;
  grid-gap: 30px;
  height: 100%;
  grid-template-rows: 1fr 3fr 2fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
    "SideBar Header Header"
    "SideBar Main Notes"
    "SideBar Stats Stats";
}
.main {
  /* background-color: palegoldenrod; */
  grid-area: Main;
}
.stats {
  grid-area: Stats;
  height: 150px;
}
.notes {
  grid-area: Notes;
}
.sideBar {
  grid-area: SideBar;
}
.headerDash {
  grid-area: Header;
}

@media (max-width: 768px) {
  .dashboard {
    display: block;
  }
  .sideBar {
    display: none;
  }
}
</style>