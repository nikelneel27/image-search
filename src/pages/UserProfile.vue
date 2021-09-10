<template>
  <div class="user-profile">
    <div class="user-image-name">
      <img
        class="profile-image"
        :src="userDetails.profile_image && userDetails.profile_image.large"
      />
      <div>
        <h2>{{ userDetails && userDetails.name }}</h2>
        <div class="icon">
          <i class="fas fa-envelope fa-1x"></i>
          <i class="fab fa-facebook fa-1x"></i>
        </div>
      </div>
    </div>

    <p class="user-bio">
      {{ userDetails.bio }}
    </p>
    <p v-if="userDetails.instagram_username" class="user-instagram">
      Follow me on Instagram ;)
      <span> @{{ userDetails.instagram_username }} </span>
    </p>
    <div class="location">
      <p v-if="userDetails.location && userDetails.location.name">
        <i class="fas fa-map-marker-alt"></i>
        {{ userDetails.location && userDetails.location.name }}
      </p>
    </div>
    <div class="connections-social">
      <p>
        <i class="fas fa-link fa-1x"></i>
        Connect with
        <span>
          {{ userDetails && userDetails.name }}
        </span>

        <select name="social" id="social">
          <option value="none"></option>
          <option value="Instagram">Instagram</option>
          <option value="link">portfolio-link</option>
        </select>
      </p>
    </div>
    <div class="table-data">
      <table>
        <tr>
          <th>
            Photos <span>{{ userDetails.total_photos }}</span>
          </th>
          <th>
            Likes <span>{{ userDetails.total_likes }}</span>
          </th>
          <th>
            Collections
            <span>{{ userDetails.total_collections }}</span>
          </th>
        </tr>
      </table>
    </div>
    <div class="user-portfolio-images">
      <ul>
        <li v-for="(result, index) in userPortfolioImages" :key="index">
          <img :src="userPortfolioImages[index].urls.small" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserProfile",
  computed: {
    ...mapGetters({
      userPortfolioImages: "SearchImageModule/getUserPortfolioImages",
    }),

    userDetails() {
      if (this.userPortfolioImages.length) {
        return this.userPortfolioImages[0].user;
      }
      return [];
    },
  },
  created() {
    this.$store.dispatch(
      "SearchImageModule/fetchUserPortfolioImages",
      this.$route.query.q
    );
  },
};
</script>

<style lang="scss">
.user-profile {
  padding-top: 200px;
}
.user-image-name {
  padding-left: 100px;
  display: flex;
  font-size: 2.8rem;
  img {
    width: 150px;
    height: 150px;
  }
  h2 {
    padding: 30px 0px 30px 60px;
    font-weight: 500;
  }
}
i.fas.fa-envelope.fa-1x {
  padding-left: 76px;
  color: rgb(73, 73, 245);
}
i.fab.fa-facebook.fa-1x {
  padding-left: 40px;
  color: rgb(73, 73, 245);
}

p.user-bio {
  padding: 30px 30px 20px 327px;
  font-size: 1.3rem;
}

p.user-instagram {
  padding-left: 327px;
  font-size: 1.3rem;
  span {
    font-weight: 500;
  }
}
.location {
  padding: 20px 0px 30px 327px;
  font-size: 1.3rem;
}
select {
  border: none;
  background-color: white;
}
.connections-social {
  padding-left: 327px;
  font-size: 1.3rem;
  span {
    font-weight: 500;
  }
}
.table-data {
  font-size: 1.3rem;
  tr,
  th {
    padding: 20px;
    span {
      padding-left: 3px;
      font-size: 1.8rem;
      font-weight: 600;
    }
  }
}
.user-portfolio-images {
  ul {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>