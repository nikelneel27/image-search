<template>
  <div class="stats">
    <div class="facebook">
      <div>
        <p>Facebook followers</p>
        <p>{{ facebook }}</p>
      </div>
      <div><i class="fab fa-facebook-f"></i></div>
    </div>
    <div class="youtube">
      <div>
        <p>Youtube followers</p>
        <p>{{ youtube }}</p>
      </div>
      <div><i class="fab fa-youtube"></i></div>
    </div>
    <div class="twitter">
      <div>
        <p>Twitter followers</p>
        <p>{{ twitter }}</p>
      </div>
      <div><i class="fab fa-twitter"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    facebook() {
      return Math.floor(Math.random() * 10000 + 1);
    },
    youtube() {
      return Math.floor(Math.random() * 10000 + 1);
    },
    twitter() {
      return Math.floor(Math.random() * 1000 + 1);
    },
  },
};
</script>

<style scoped>
.stats {
  display: flex;
  height: 100px;
  color: #fff;
  text-align: center;
}
.facebook,
.youtube,
.twitter {
  border-radius: 8px;
  padding: 10px;
  display: flex;
  width: 100%;
  margin: 2px;
  background-color: #000;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.facebook i,
.youtube i,
.twitter i {
  font-size: 3rem;
  margin-left: 20px;
  padding: 15px;
  display: flex;
  align-items: center;
  text-align: center;
}
.facebook p:nth-child(2),
.youtube p:nth-child(2),
.twitter p:nth-child(2) {
  font-size: 2rem;
  font-weight: 700;
}
.facebook p:nth-child(1),
.youtube p:nth-child(1),
.twitter p:nth-child(1) {
  font-size: 1.2rem;
}

.facebook i {
  color: #4267b2;
}
.youtube i {
  color: #c4302b;
}
.twitter i {
  color: #00acee;
}

@media (max-width: 768px) {
  .stats {
    display: block;
    margin-top: 40px;
  }
  .facebook,
  .youtube,
  .twitter {
    width: 80%;
    margin: auto;
    margin-bottom: 12px;
  }
}
</style>