<template>
  <div class="search">
    <form @submit.prevent="userSearchValue" action="">
      <i class="fas search-icon fa-search"></i>
      <input
        v-model="searchValue"
        class="search-field"
        type="search"
        placeholder="search free high-resolution photos"
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
.search {
  padding-top: 20px;
}

.search i {
  position: absolute;
}
.search-icon {
  padding: 12px;
  margin-left: 50px;
}
.search-field {
  width: 690px;
  height: 40px;
  outline: none;
  border-radius: 20px;
}
.search-field {
  margin-left: 40px;
  padding-left: 60px;
}
::placeholder {
  padding: 0px;
  font-size: 1rem;
  font-weight: lighter;
}
</style>