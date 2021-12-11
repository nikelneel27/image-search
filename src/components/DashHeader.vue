<template>
  <div class="headerDash">
    <div class="nature">
      <div class="icon">
        <i class="fas fa-tree"></i>
        <p>Nature</p>
      </div>
      <div>
        <p class="randomNumb">{{ natureRandom }}</p>
      </div>
    </div>
    <div class="wildlife">
      <div class="icon">
        <i class="fas fa-hippo"></i>
        <p>Wildlife</p>
      </div>
      <div>
        <p class="randomNumb">{{ wildlifeRandom }}</p>
      </div>
    </div>
    <div class="portrait">
      <div class="icon">
        <i class="fas fa-user"></i>
        <p>Portrait</p>
      </div>
      <div>
        <p class="randomNumb">{{ portraitRandom }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    natureRandom() {
      return Math.floor(Math.random() * 1000000 + 1);
    },
    wildlifeRandom() {
      return Math.floor(Math.random() * 10000000 + 1);
    },
    portraitRandom() {
      return Math.floor(Math.random() * 1000000 + 1);
    },
  },
};
</script>

<style scoped>
.headerDash {
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 1.2rem;
  padding: 2px;
  /* height: 200px; */
}
.icon i {
  border-radius: 150%;
  /* background-color: #fff; */
  color: #fff;
  font-size: 2rem;
  padding: 10px;
}
.headerDash .nature,
.headerDash .wildlife,
.headerDash .portrait {
  display: flex;
  width: 100%;
  margin: 2px;
  padding: 10px 30px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.headerDash .nature {
  background-color: orange;
}
.headerDash .wildlife {
  background-color: purple;
}
.headerDash .portrait {
  background-color: blue;
}
.randomNumb {
  font-size: 2rem;
  font-weight: 900;
  margin: 15px;
}
@media (max-width: 768px) {
  .headerDash {
    display: block;
    margin-bottom: 40px;
  }
  .headerDash .nature,
  .headerDash .wildlife,
  .headerDash .portrait {
    display: block;
    width: 80%;
    margin: auto;
    margin-bottom: 10px;
    padding: 4px 30px;
  }
  .randomNumb {
    font-size: 2.5rem;
    margin: 0;
  }
  .icon i {
    padding: 6px;
  }
}
</style>