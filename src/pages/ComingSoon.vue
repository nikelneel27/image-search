<template>
  <div class="coming-soon">
    <div>
      <h1>COMING SOON</h1>
      <!-- </div> -->
      <!-- <div> -->
      <p>
        Our website is about to launch this feature soon. Kindly vist us back.
        Thank you !
      </p>
      <!-- </div> -->
      <!-- <div> -->
      <button class="coming-soon-btn" @click="handleHomeNav">
        Take me to Home
      </button>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleHomeNav() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss" >
body {
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.coming-soon {
  padding-top: 275px;
  display: flex;
  justify-content: center;
  height: 100vh;

  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  h1 {
    letter-spacing: 0.5em;
    font-size: 5rem;
    color: white;
    font-weight: 600;
  }
  p {
    font-size: 1.3rem;
    color: #a79d9d;
    padding-left: 135px;
  }
  .coming-soon-btn {
    font-size: 1.3rem;
    color: white;
    margin: 40px 425px;
    height: 40px;
    background: none;
    outline: none;
    padding: 8px;
    border: solid 1.2px white;
  }
}
</style>