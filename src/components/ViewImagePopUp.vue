<template>
  <div class="overlay">
    <div @click="handleClose" class="close-button">
      <i class="fas fa-times fa-2x"></i>
    </div>
    <div class="image-details">
      <div class="image">
        <img class="clicked-image" :src="clickedImage.urls.full" />
      </div>
      <div class="details">
        <div class="item-user-name">
          <img
            @click="openUserPage"
            class="profile-image"
            :src="clickedImage.user.profile_image.medium"
          />

          <div class="user-name">
            <h2>{{ clickedImage.user.name }}</h2>
            <p>available for hire !</p>
          </div>
        </div>
        <div class="item-details">
          <table style="width: 100%">
            <tr>
              <th>Total views</th>
              <th>Likes</th>
              <th>Downloads</th>
            </tr>
            <tr>
              <td>{{ clickedImage.views }}</td>
              <td>{{ clickedImage.likes }}</td>
              <td>{{ clickedImage.downloads }}</td>
            </tr>
          </table>
          <div class="date-location">
            <p v-if="clickedImage.location.name">
              <i class="fas fa-map-marker-alt"></i>
              {{ clickedImage.location.name }}
            </p>
            <p>Published on {{ convertDate() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
// import UserProfile from "../pages/UserProfile.vue";
export default {
  name: "ViewImagePopUp",
  computed: {
    ...mapGetters({ clickedImage: "SearchImageModule/getClickedImage" }),
  },

  methods: {
    convertDate() {
      return moment(this.clickedImage.created_at).format("MMM Do YY");
    },
    handleClose() {
      this.$emit("tooglePopUp");
    },
    openUserPage() {
      this.$router.push({
        path: "/user-profile",
        query: { q: this.clickedImage.user.username },
      });
    },
  },
};
</script>

<style lang="scss">
.overlay {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(8 6 6 / 60%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.close-button {
  position: absolute;
  top: 38px;
  left: 68px;
  color: white;
}

.image-details {
  background-color: white;
  padding: 5px;
  display: flex;
  width: 80%;
  height: 500px;

  .image {
    max-width: 50%;
    height: 50%;
  }
  .clicked-image {
    width: 100%;
    height: 490px;
  }
}
h1 {
  font-size: 1.4rem;
  font-weight: bolder;
}
.item-user-name {
  display: flex;
  padding: 20px;
}
.profile-image {
  border-radius: 100%;
  height: 90px;
  width: 90px;
}

.user-name {
  padding: 20px;
}
table {
  text-align: left;
  padding-left: 30px;
  padding-top: 20px;

  th {
    font-weight: 300;
    padding-bottom: 20px;
  }
  td {
    font-weight: 900;
    padding-bottom: 20px;
  }
}
.date-location {
  padding-left: 30px;
  padding-top: 20px;
  p {
    padding-bottom: 10px;
  }
}
</style>