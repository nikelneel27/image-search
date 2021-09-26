// <template></template>

// <script>
// export default {
//   name: "LoginSignUp",

//   data() {
//     return {
//       email: "",
//       password: "",
//       formIsValid: true,
//       mode: "login",
//     };
//   },
//   computed: {
//     submitButtonCaption() {
//       if (this.mode === "login") {
//         return "Login";
//       } else {
//         return "SignUp";
//       }
//     },
//     switchModeCaption() {
//       if (this.mode === "login") {
//         return "SignUP";
//       } else {
//         return "Login";
//       }
//     },
//   },
//   methods: {
//     submitForm() {
//       this.formIsValid = true;
//       if (
//         this.email === "" ||
//         !this.email.includes("@") ||
//         this.password.length < 6
//       ) {
//         this.formIsValid = false;
//       } else {
//         alert("success");
//       }
//     },
//     switchMode() {
//       if (this.mode === "login") {
//         this.mode = "signup";
//       } else {
//         this.mode = "login";
//       }
//     },
//   },
// };
//
</script>

// <style scoped lang="scss">
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
// form {
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   padding: 1rem;
// }
// .login-image {
//   /* width: 100%; */
//   max-width: 400px;
//   height: 480px;
//   border-radius: 10px;
// }
// .login-left {
//   h1 {
//     margin-bottom: -16px;
//     margin-top: 50px;
//     font-size: 2rem;
//     color: rgb(160, 137, 7);
//   }
// }

// .login-right {
//   margin-left: 45px;
//   margin-top: 100px;
//   h3 {
//     margin-bottom: 20px;
//   }
//   .login-sign-up-form-control {
//     margin-bottom: 20px;
//     #email-input {
//       margin-left: 68px;
//     }
//     #password-input {
//       margin-left: 40px;
//     }
//   }
//   .login-btn {
//     margin-left: 40%;
//     background: none;
//     color: white;
//     border: 2px solid rgb(211, 13, 13);
//     padding: 1.5px 10px;
//     border-radius: 10px;
//     margin-bottom: 20px;
//   }
//   .login-btn:hover {
//     background-color: rgb(211, 13, 13);
//     cursor: pointer;
//     border: none;
//   }
//   p {
//     font-size: 10px;
//   }
//   .login-signup-btn {
//     background: none;
//     color: white;
//     outline: none;
//     border: none;
//     // border: 2px solid rgb(211, 13, 13);
//     padding: 1.5px 4px;
//     border-radius: 10px;
//     font-size: 12px;
//   }
//   .login-signup-btn:hover {
//     color: rgb(211, 13, 13);
//     cursor: pointer;
//   }
// }
//
</style>