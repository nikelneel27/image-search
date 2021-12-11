<template>
  <div class="banner-image">
    <!-- <img :src="randomImage" /> -->
    <img
      class="desktop-image"
      src="https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80"
      alt=""
    />
    <img
      class="mob-image"
      src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
      alt=""
    />

    <!-- <div class="search-over-image">
          <input type="search" placeholder="Search for high resolution photos" />

      </div> -->
    <div class="main-text">
      <span>
        <h2>Images HD</h2>
      </span>

      <p>The Internet's source of freely usable images</p>
      <p>Powered by creators everywhere</p>
      <p><Search /></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "./Search.vue";
export default {
  name: "Banner",
  // data(){
  //     return{
  //         image:image
  //     }
  // },
  components: {
    Search,
  },
  computed: {
    ...mapGetters({ randomImage: "SearchImageModule/getRandomImage" }),
  },

  created() {
    this.$store.dispatch("SearchImageModule/fetchRandomImage");
  },
};
</script>

<style lang="scss" scoped>
.banner-image {
  // height: 700px;

  img {
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    background-size: cover;
    filter: grayscale(20%);
    opacity: 0.8;
  }
}
.banner {
  position: relative;
}
.main-text {
  width: 400px;
  align-items: center;
  position: absolute;
  top: 35%;
  bottom: 50%;
  left: 10%;
  color: #fff;
  font-size: 1.2rem;
  // background-color: #000;
  h2 {
    font-size: 4rem;
    font-weight: bold;
  }
  // p {
  //   color: rgb(252, 248, 26);
  // }
}
@media (max-width: 1024px) {
  .desktop-image {
    display: none;
  }
  .mob-image {
    display: block;
  }
}
@media (min-width: 1024px) {
  .mob-image {
    display: none;
  }
  .desktop-image {
    display: block;
  }
}
</style>