<template>
  <div class="sideBar">
    <div>Home</div>
    <div>Dashboard</div>
    <div>Blogs</div>
    <div>Brands</div>
    <div>Collections</div>
    <div>Logout</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sideBar div {
  width: 100%;
  margin: 4px;
  padding: 10px 30px;
  border-radius: 8px;
  color: #fff;
  font-size: 1.2rem;
  background-color: rgb(6, 2, 17);
  transition: all 0.5s ease-in-out;
}

.sideBar div:hover {
  color: #000;
  background-color: #fff;
  /* background-color: rgb(20, 2, 49); */
}

/* .sideBar div:nth-child(1) {
  
}
.sideBar div:nth-child(2) {
  background-color: purple;
}
.sideBar div:nth-child(3) {
  background-color: blue;
} */
</style>