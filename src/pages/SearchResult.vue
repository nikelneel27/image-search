<template>
  <div class="search-images">
    <div class="search-name">
      <p class="search-val-size">{{ this.$route.query.q }}</p>
    </div>
    <ul>
      <li v-for="(result, index) in searchResults" :key="index">
        <img
          @click="handleClick(result.id)"
          class="searchImage"
          :src="searchResults[index].urls.small"
        />
      </li>
    </ul>
    <view-image-pop-up v-if="showImagePopUp" @tooglePopUp="tooglePopUp" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ViewImagePopUp from "../components/ViewImagePopUp.vue";
export default {
  name: "SearchResult",
  data() {
    return {
      showImagePopUp: false,
    };
  },
  watch: {
    $route(newValue) {
      this.$store.dispatch(
        "SearchImageModule/fetchSearchResult",
        newValue.query.q
      );
    },
  },
  computed: {
    ...mapGetters({ searchResults: "SearchImageModule/getSearchResult" }),
  },
  created() {
    this.$store.dispatch(
      "SearchImageModule/fetchSearchResult",
      this.$route.query.q
    );
  },
  methods: {
    handleClick(id) {
      console.log(id);

      // this.$store.dispatch("SearchImageModule/fetchImageID", id);
      this.$store.dispatch("SearchImageModule/fetchClickedImage", {
        id,
        success: this.onSuccessCallBack,
      });
    },
    onSuccessCallBack() {
      this.showImagePopUp = true;
    },

    tooglePopUp() {
      console.log("close pop");
      this.showImagePopUp = false;
    },
  },
  components: {
    ViewImagePopUp,
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  padding-top: 250px;
}
li {
  height: 50vh;
  flex-grow: 1;
  margin: 0 8px 8px 0;
}
li:last-child {
  flex-grow: 10;
}

.searchImage {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  border-radius: 4px;
}
.search-name {
  position: absolute;
  top: 180px;
  left: 0px;
}
.search-val-size {
  padding-left: 20px;
  font-size: 2.8rem;
  font-weight: 600;
}
</style>