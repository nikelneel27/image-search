<template>
  <div class="headermain">
    <div class="header">
      <div class="logo">
        <img @click="handleLogoClick" :src="image" style="width: 40px" />
      </div>

      <Search />
      <div class="links">
        <ul @click="hangleNewPageClick">
          <li>Brands</li>
          <li>Blogs</li>
          <li>:::</li>
        </ul>
      </div>
      <div @click="hangleNewPageClick" class="submit-photo">
        <button class="button-submit-photo">Submit a photo</button>
      </div>
      <div @click="hangleNewPageClick" class="user-icon">
        <i class="fas user-icon fa-user-circle fa-2x"></i>
      </div>
    </div>

    <HeaderSecond />
  </div>
</template>

<script>
import image from "../assets/unsp.svg";
import HeaderSecond from "./HeaderSecond";
import Search from "./Search";
export default {
  name: "Header",
  data() {
    return {
      image: image,
    };
  },
  components: {
    HeaderSecond,
    Search,
  },
  methods: {
    handleLogoClick() {
      this.$router.push("/");
    },
    hangleNewPageClick() {
      this.$router.push("/coming-soon");
    },
  },
};
</script>

<style>
.headermain {
  width: 100%;
  position: fixed;
  z-index: 1;
  background: #ffff;
}
.header {
  margin: 20px;
  display: flex;
  justify-content: inherit;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;
}
li {
  margin-left: 20px;
  align-items: center;
}
.button-submit-photo {
  color: black;
  font-size: 0.8rem;
  margin-left: 30px;
  background: none;
  border-radius: 4px;
  outline: none;
  height: 30px;
  padding: 4px;
  border: solid rgb(150, 148, 148) 0.8px;
}
.user-icon {
  margin-left: 23px;
}
</style>
