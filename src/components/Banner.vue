<template>
  <div class="banner-image">
    <img :src="randomImage" />

    <!-- <div class="search-over-image">
          <input type="search" placeholder="Search for high resolution photos" />

      </div> -->
    <div class="main-text">
      <span>
        <h2>Images HD</h2>
      </span>

      <p>The Internet's source of freely usable images</p>
      <p>Powered by creators everywhere</p>
      <Search />
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
img {
  max-width: 100%;
  object-fit: contain;
}
.banner {
  position: relative;
}
.main-text {
  width: 400px;
  align-items: center;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 10%;
  right: 90%;
  color: #fff;
  font-size: 1.2rem;
  h2 {
    font-size: 3rem;
  }
  p {
    color: rgb(252, 248, 26);
  }
}

input {
  width: 400px;
  height: 35px;
  border-radius: 10px;
  /* border:none; */
}
</style>