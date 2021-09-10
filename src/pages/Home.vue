<template>
  <div>
    <Banner />
    <ChatButton />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import ChatButton from "../components/ChatButton.vue";
export default {
  name: "Home",
  components: {
    Banner,
    ChatButton,
  },
};
</script>

<style>
</style>