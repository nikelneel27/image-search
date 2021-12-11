<template>
  <div class="headermain">
    <div class="header">
      <div @click="handleLogoClick" class="logo">
        <!-- <img @click="handleLogoClick" :src="image" style="width: 40px" /> -->
        <i class="fas fa-camera-retro"></i>
        <span>Image Search</span>
      </div>

      <div class="links-flex">
        <Search class="header-search" />
        <div class="links">
          <ul class="links-items">
            <!-- <li @click="hangleNewPageClick">Brands</li> -->
            <li @click="hangleBlogPage">Blogs</li>
            <!-- <li @click="hangleNewPageClick">:::</li> -->
          </ul>
        </div>

        <!-- <div @click="hangleNewPageClick" class="submit-photo">
        <button class="button-submit-photo">Submit a photo</button>
      </div> -->
        <div @click="handleLoginClick" class="user-icon">
          <i class="fas fa-user-circle fa-2x"></i>
        </div>
        <div id="sidemenu">
          <button
            class="sidemenu__btn"
            v-on:click="navOpen = !navOpen"
            v-bind:class="{ active: navOpen }"
          >
            <span class="top"></span>
            <span class="mid"></span>
            <span class="bottom"></span>
          </button>
          <transition name="translateX">
            <nav v-show="navOpen">
              <div class="sidemenu__wrapper">
                <ul class="sidemenu__list">
                  <li @click="hangleBlogPage" class="sidemenu__item">Blogs</li>
                  <li @click="handleSignUpClick" class="sidemenu__item">
                    SignUp
                  </li>
                  <li @click="handleLoginClick" class="sidemenu__item">
                    Login
                  </li>
                  <li @click="handleLogoutClick" class="sidemenu__item">
                    Logout
                  </li>
                  <li @click="hangleNewPageClick" class="sidemenu__item">
                    Brands
                  </li>
                </ul>
              </div>
            </nav>
          </transition>
        </div>
        <!-- <div @click="openNavDrawer" class="header-hamburger-menu">
          <i class="fas fa-bars fa-2x"></i>
        </div> -->
        <!-- <div class="logout-btn"><Logout /></div> -->
      </div>
    </div>

    <!-- <HeaderSecond /> -->
  </div>
</template>

<script>
import image from "../assets/unsp.svg";
// import HeaderSecond from "./HeaderSecond";
// import Logout from "./Logout";
import Search from "./Search";
export default {
  name: "Header",
  data() {
    return {
      image: image,

      navOpen: false,
    };
  },
  components: {
    // HeaderSecond,
    // Logout,
    Search,
  },
  methods: {
    openNavDrawer() {},
    handleLogoClick() {
      this.$router.push("/");
    },
    hangleNewPageClick() {
      this.$router.push("/coming-soon");
    },
    handleLoginClick() {
      this.$router.push("/login");
    },
    handleSignUpClick() {
      this.$router.push("/sign-up");
    },
    hangleBlogPage() {
      this.$router.push("/blogs");
    },
    handleLogoutClick() {
      this.$router.push("/logout");
    },
  },
};
</script>

<style lang="scss">
.headermain {
  width: 100%;
  position: fixed;
  z-index: 12;

  color: #66fcf1 !important;
}
.header-hamburger-menu {
  display: none;
}
.header {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    padding-left: 20px;
    font-size: 2rem;
    cursor: pointer;
    // color: rgb(241, 20, 157);
  }
  span {
    padding-left: 8px;
    // color: rgb(241, 20, 157);
    font-size: 1.6rem;
  }
}

.links-flex {
  display: flex;
  align-items: center;
}

.links-items {
  display: flex;
  list-style: none;
  margin: 0 !important;
  li {
    margin-left: 20px;
    float: left;
    text-align: center;
    cursor: pointer;
  }
}

.user-icon {
  margin-left: 20px;
  cursor: pointer;
}
#sidemenu,
.sidemenu__btn {
  display: none;
}

@media (max-width: 1024px) {
  .header {
    margin: 10px;
  }
  .header-hamburger-menu {
    display: none;
  }
}

@media (max-width: 768px) {
  .header {
    justify-content: flex;
  }
  .header-hamburger-menu {
    display: block;
  }
  #sidemenu,
  .sidemenu__btn {
    display: block;
  }
  .header span,
  .links,
  .user-icon {
    display: none;
  }
  .header-search {
    margin-right: 60px;
  }
  #sidemenu {
    nav {
      width: 200px;

      background: #0b0c10;
      border: 1px solid #1f2833;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 99;
    }

    .sidemenu {
      &__btn {
        display: block;
        width: 50px;
        height: 50px;
        background: none;
        border: none;
        position: relative;
        z-index: 100;
        appearance: none;
        cursor: pointer;
        outline: none;

        span {
          display: block;
          width: 20px;
          height: 2px;
          margin: auto;
          background: white;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          transition: all 0.4s ease;

          &.top {
            transform: translateY(-8px);
          }

          &.bottom {
            transform: translateY(8px);
          }
        }
        &.active {
          .top {
            transform: rotate(-45deg);
          }
          .mid {
            transform: translateX(-20px) rotate(360deg);
            opacity: 0;
          }
          .bottom {
            transform: rotate(45deg);
          }
        }
      }

      &__wrapper {
        padding-top: 20px;
      }

      &__list {
        padding-top: 20px;
        list-style: none;
        cursor: pointer;
        // padding: 10px;
        // margin: 10px;
      }

      &__item {
        a {
          text-decoration: none;
          line-height: 1.6em;
          font-size: 1.5rem;
          padding: 4rem;
          display: block;
          color: white;
          transition: 0.4s ease;

          &:hover {
            background: lightgrey;
            color: dimgrey;
          }
        }
      }
    }
  }

  .translateX-enter {
    transform: translateX(200px);
    opacity: 1;
  }

  .translateX-enter-active,
  .translateX-leave-active {
    transform-origin: top left 0;
    transition: 0.2s ease;
  }

  .translateX-leave-to {
    transform: translateX(200px);
    opacity: 0;
  }
  li.sidemenu__item {
    padding: 12px;
    font-size: 1.3rem;
    /* border-bottom: 1px solid #ddd; */
  }
}
</style>
