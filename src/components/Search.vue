<template>
  <div class="search">
    <form @submit.prevent="userSearchValue" action="">
      <!-- <i class="fas search-icon fa-search"></i> -->
      <input
        v-model="searchValue"
        class="search-field"
        type="search"
        placeholder="Search free high-resolution photos"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    userSearchValue() {
      this.$store.dispatch(
        "SearchImageModule/userSearchValue",
        this.searchValue
      );
      this.$router.push({
        path: "/search-result",
        query: { q: this.searchValue },
      });
    },
  },
};
</script>

<style>
/* .search form {
  position: relative;
} */
/* .search i {
  position: absolute;
  top: 12px;
  left: 16px;
  color: #fff;
} */
/* .search-icon {
  padding: 12px;
  margin-left: 50px;
} */
.search-field {
  max-width: 690px;
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid rgba(223, 221, 221, 0.35);
  border-radius: 8px;
  background-color: #000;
  box-shadow: rgba(17, 17, 17, 0.35) 0px 5px 15px;
  color: #fff;
  padding-left: 10px;
}

::placeholder {
  padding-left: 10px;
  font-size: 1rem;
  font-weight: lighter;
}
</style>