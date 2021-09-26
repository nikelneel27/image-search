<template>
  <div class="login-signup">
    <div class="login-left">
      <!-- <h1>Best Image Search Site</h1> -->
      <img src="../assets/Login.jpg" class="login-image" alt="" />
      <div class="login-right">
        <!-- <form @submit.prevent="SubmitForm"> -->
        <form @submit.prevent="signUpClick">
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
          <div vi-if="error" class="error">
            <span>{{ error.message }}</span>
          </div>
          <button class="login-btn">Sign Up</button>
          <p>
            Already registered ?
            <button
              @click="switchToSignUp"
              class="login-signup-btn"
              type="button"
              mode="flat"
            >
              Login
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
    switchToSignUp() {
      this.$router.push("/login");
    },
    async signUpClick() {
      if (!this.email.includes("@") || this.password.length < 6) {
        alert("Please enter valid details.");
      } else {
        console.log("Signup");
        try {
          const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password);
          console.log(user);
          // this.$router.replace({ name: "dashboard" });
          this.$router.push("/dashboard");
        } catch (err) {
          const error = err.message;
          console.log(error);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// .login-signup {
//   display: flex;
//   position: relative;
//   z-index: 13;
//   top: 150px;
//   width: 800px;
//   height: 500px;
//   background-color: #000;
//   margin: 0 auto;
//   color: #fff;
//   border: 10px solid #ccc;
//   border-radius: 25px;
// }
form {
  //   border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
}
.login-image {
  max-width: 100%;
  height: auto;
  filter: grayscale(20%) brightness(0.7);
}
.login-left {
  position: relative;
  h1 {
    margin-bottom: -16px;
    margin-top: 50px;
    font-size: 2rem;
    color: rgb(160, 137, 7);
  }
}

.login-right {
  position: absolute;
  top: 220px;
  right: 100px;
  opacity: 0.7;
  background-color: #0b0c10;
  color: #fff;
  h3 {
    margin-bottom: 20px;
  }
  .login-sign-up-form-control {
    margin-bottom: 20px;
    #email-input {
      margin-left: 68px;
      background-color: #1f2833;
      outline: none;
      border: none;
      color: #fff;
    }
    #password-input {
      margin-left: 40px;
      background-color: #1f2833;
      outline: none;
      color: #fff;
      border: none;
    }
  }

  .login-btn {
    margin-left: 40%;
    background: none;
    color: white;
    border: 2px solid rgb(211, 13, 13);
    padding: 1.5px 10px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .login-btn:hover {
    background-color: rgb(211, 13, 13);
    cursor: pointer;
    border: none;
  }
  p {
    font-size: 10px;
  }
  .login-signup-btn {
    background: none;
    color: white;
    outline: none;
    border: none;
    // border: 2px solid rgb(211, 13, 13);
    padding: 1.5px 4px;
    border-radius: 10px;
    font-size: 12px;
  }
  .login-signup-btn:hover {
    color: rgb(211, 13, 13);
    cursor: pointer;
  }
}
.login-right:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>