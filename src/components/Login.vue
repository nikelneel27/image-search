<template>
  <div class="login-signup">
    <img
      src="https://images.unsplash.com/photo-1500674425229-f692875b0ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      class="login-image desktop-image"
      alt=""
    />
    <img
      class="login-image mob-image"
      src="https://images.unsplash.com/photo-1579201157678-a242a244b34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt=""
    />
    <div class="login-left">
      <!-- <h1>Best Image Search Site</h1> -->

      <div class="login-right">
        <form @submit.prevent="loginClick">
          <h3>Welcome to Image Search</h3>
          <div class="login-sign-up-form-control">
            <label for="login">Email</label>
            <input
              class="px-2"
              type="text"
              v-model="email"
              name="login"
              id="email-input"
              placeholder="Enter email"
            />
          </div>
          <div class="login-sign-up-form-control">
            <label for="login">Password</label>
            <input
              class="px-2"
              type="text"
              v-model="password"
              name="login"
              id="password-input"
              placeholder="Enter password"
            />
          </div>
          <div if="!error === ''" class="error-mesage">{{ error }}</div>
          <button class="login-btn">Login</button>
          <p>
            Don't have an account
            <button
              @click="switchToLogin"
              class="login-signup-btn"
              type="button"
              mode="flat"
            >
              SignUp
            </button>
            now
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    switchToLogin() {
      this.$router.push("/sign-up");
    },
    async loginClick() {
      if (!this.email.includes("@") || this.password.length < 6) {
        alert("Please enter valid details");
      } else {
        try {
          const user = await firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password);
          console.log(user);
          this.$router.push("/dashboard");
        } catch (err) {
          const error = err.message;
          console.log(error);
        }
      }
    },
  },

  //   },
};
</script>

<style lang="scss" scoped>
.login-signup {
  position: relative;
  align-items: center;
  text-align: center;

  // display: flex;
}
form {
  //   border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
}
.login-image {
  width: 100%;
  height: auto;
  text-align: center;
  // filter: grayscale(20%) brightness(0.7);
}
.login-left {
  width: 50%;
  margin: auto;
  // width: 50%;
  h1 {
    margin-bottom: -16px;
    margin-top: 50px;
    font-size: 2rem;
    color: rgb(160, 137, 7);
  }
}

.login-right {
  // max-width: 600px;
  position: absolute;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 20%;
  right: 0;
  left: 0;
  opacity: 0.8;
  z-index: 999;

  // background-color: #0b0c10;
  color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  h3 {
    margin-bottom: 20px;
  }
  .login-sign-up-form-control {
    margin-bottom: 20px;
    #email-input {
      margin-left: 68px;
      background-color: #000;
      outline: none;
      border: none;
      color: #fff;
    }
    #password-input {
      margin-left: 40px;
      background-color: #000;
      outline: none;
      color: #fff;
      border: none;
    }
    #email-input::placeholder,
    #password-input::placeholder {
      font-size: 12px;
    }
  }

  .login-btn {
    background: offwhite;
    color: #000;
    border: 2px solid rgb(211, 13, 13);
    padding: 1.5px 14px;
    border-radius: 8px;
    margin-bottom: 20px;
    border: none;
    outline: none;
  }
  .login-btn:hover {
    background-color: #fff;
    cursor: pointer;
    border: none;
  }
  p {
    font-size: 10px;
  }
  .login-signup-btn {
    background: none;
    color: rgb(95, 230, 32);
    outline: none;
    border: none;
    // border: 2px solid rgb(211, 13, 13);
    padding: 1.5px 4px;
    border-radius: 10px;
    font-size: 12px;
  }
  .login-signup-btn:hover {
    color: rgb(82, 250, 4);
    cursor: pointer;
  }
}
.login-right:hover {
  opacity: 0.9;
  cursor: pointer;
}
.error-message {
  color: #fff;
}
@media (max-width: 1024px) {
  .desktop-image {
    display: none;
  }
  .mob-image {
    display: block;
  }
}
@media (min-width: 1024px) {
  .mob-image {
    display: none;
  }
  .desktop-image {
    display: block;
  }
}
</style>