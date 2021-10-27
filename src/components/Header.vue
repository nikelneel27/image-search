<template>
  <div class="headermain">
    <div class="header">
      <div class="logo">
        <img @click="handleLogoClick" :src="image" style="width: 40px" />
      </div>

      <div class="links-flex">
        <Search class="header-search" />
        <div class="links">
          <ul>
            <li @click="hangleNewPageClick">Brands</li>
            <li @click="hangleBlogPage">Blogs</li>
            <!-- <li @click="hangleNewPageClick">:::</li> -->
          </ul>
        </div>

        <!-- <div @click="hangleNewPageClick" class="submit-photo">
        <button class="button-submit-photo">Submit a photo</button>
      </div> -->
        <div @click="handleLoginClick" class="user-icon">
          <i class="fas fa-user-circle fa-2x"></i>
        </div>
        <div class="logout-btn"><Logout /></div>
      </div>
    </div>

    <!-- <HeaderSecond /> -->
  </div>
</template>

<script>
import image from "../assets/unsp.svg";
// import HeaderSecond from "./HeaderSecond";
import Logout from "./Logout";
import Search from "./Search";
export default {
  name: "Header",
  data() {
    return {
      image: image,
    };
  },
  components: {
    // HeaderSecond,
    Logout,
    Search,
  },
  methods: {
    handleLogoClick() {
      this.$router.push("/");
    },
    hangleNewPageClick() {
      this.$router.push("/coming-soon");
    },
    handleLoginClick() {
      this.$router.push("/login");
    },
    hangleBlogPage() {
      this.$router.push("/blogs");
    },
  },
};
</script>

<style lang="scss">
.headermain {
  width: 100%;
  position: fixed;
  z-index: 12;
  background-color: #0b0c10;
  color: #66fcf1 !important;
}
.header {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    background-color: #66fcf1;
    border: 2px solid #66fcf1;
    cursor: pointer;
  }
}
.links-flex {
  display: flex;
  align-items: center;
}
.header-search {
  margin-right: 10px;
}

ul {
  display: flex;
  list-style: none;
  margin: 0 !important;
}
li {
  margin-left: 20px;
  float:left;
  text-align: center;
  cursor: pointer;
}
// .button-submit-photo {
//   color: #66fcf1;
//   font-size: 0.8rem;
//   margin-left: 30px;
//   background: none;
//   border-radius: 4px;
//   outline: none;
//   height: 30px;
//   padding: 4px;
//   border: solid rgb(150, 148, 148) 0.8px;
// }
// .button-submit-photo:hover {
//   background-color: #1f2833;
// }

.user-icon {
  margin-left: 20px;
  cursor: pointer;
}
</style>
