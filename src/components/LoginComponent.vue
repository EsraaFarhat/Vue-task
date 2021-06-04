<template>
  <div class="mainWrapper">
    <div class="slider">
      <figure>
        <div>
          <img src="../assets/img/1.svg" alt="First Image" />
          <h2>Accelerate Your Entire Mobile Team Workflow</h2>
        </div>
        <div>
          <img src="../assets/img/2.svg" alt="Second Image" />
          <h2>The Most Comprehensive Bug Reporting Tool For Mobile App</h2>
        </div>
        <div>
          <img src="../assets/img/3.svg" alt="Third Image" />
          <h2>Secure Crach Reporting With Real-Time Alerts</h2>
        </div>
      </figure>
    </div>
    <div class="login-form">
      <div class="form-header">
        <img src="../assets/logo.png" alt="" width="60" height="60" />
        <h3>Log in to Instabug</h3>
      </div>
      <div class="social-media">
        <button type="submit" id="google">
          <img src="../assets/img/google.jpg" alt="" width="50" height="30" />
          <span>Google</span>
        </button>
        <button type="submit" id="github">
          <img src="../assets/img/github.png" alt="" width="50" height="30" />
          Github
        </button>
        <button type="submit" id="microsoft">
          <img
            src="../assets/img/microsoft.png"
            alt=""
            width="50"
            height="30"
          />
          Microsoft
        </button>
      </div>

      <hr style="width:47%; text-align:left;margin-left:0;float:left" />
      <span style="float:left;padding-left:3px;">OR</span>
      <hr style="width:47%; text-align:right;margin-right:0 float:right" />

      <form method="get" @submit.prevent="submit" novalidate="true">
        <div
          style="background-color:pink;padding:5px;text-align: center"
          v-if="errors.notValid"
        >
          <span>{{ errors.notValid }}</span>
        </div>
        <div class="email-div">
          <label for="email">Work Email</label>
          <input
            type="email"
            name="email"
            v-model="user.email"
            @input="checkValidation"
            id="email"
            placeholder="you@company.com"
          />
          <span v-if="errors.email" style="color:red"> {{ errors.email }}</span>
        </div>
        <div class="password-div">
          <label style="float:left;width:50%" for="password">Password</label>
          <span style="float:right;color:gray">Forget password?</span>
          <input
            type="password"
            name="password"
            v-model="user.password"
            @input="checkValidation"
            id="password"
            placeholder="8+ Characters"
          />
          <span v-if="errors.password" style="color:red;float:left">
            {{ errors.password }}</span
          >
        </div>
        <button
          type="submit"
          :class="disabled ? 'disabled' : 'submit'"
          :disabled="disabled"
          id="login"
        >
          Log in
        </button>
        <div style="padding-top:4px">
          <span
            >Dont't have an account?
            <a href="#" style="text-decoration:none; color:#0e99ff">register</a>
          </span>
          <a href="#" style="text-decoration:none; color:#0e99ff;float:right"
            >Login via SSO</a
          >
        </div>
        <div style="text-align: center;color:gray; padding-top:15px">
          <span>Trusted by the top companies.</span>
        </div>
        <div class="companies">
          <img
            src="../assets/img/c1.png"
            alt="LUA"
          />
          <img
            src="../assets/img/c2.png"
            alt="BuzzFeeD"
          />
          <img
            src="../assets/img/c3.png"
            alt="asana"
          />
          <img
            src="../assets/img/c4.png"
            alt="ONEPLUS"
          />
          <img
            src="../assets/img/c5.png"
            alt="Houseparty"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { users } from "../users";

export default {
  data: () => ({
    users: users,
    user: {
      email: "",
      password: "",
    },
    errors: {},
    disabled: true,
    flag: false,
  }),
  methods: {
    submit: function(e) {
      this.errors = {};
      if (!this.emailValidation(this.user.email)) {
        this.errors.email = "Enter a valid email address.";
      }
      if (!this.passwordValidation(this.user.password)) {
        this.errors.password = "Password must be 6 characters or more.";
      }

      if (
        this.errors &&
        Object.keys(this.errors).length === 0 &&
        this.errors.constructor === Object
      ) {
        for (let i = 0; i < users.length; i++) {
          if (
            users[i].email === this.user.email &&
            users[i].password === this.user.password
          ) {
            localStorage.setItem("logged_in_email", this.user.email);
            this.flag = true;
            this.$router.push("/welcome");
            break;
          }
        }
        if (this.flag == false) {
          this.errors.notValid =
            "Your email and/or your password are incorrect.";
        }
      }

      e.preventDefault();
    },
    emailValidation: function(email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    passwordValidation: function(password) {
      let email_address_name = this.user.email.split("@")[0];
      let re = /^(?=.{8,}$)(?=.*?[A-Z]).*$/;
      return re.test(password) && !password.includes(email_address_name);
    },
    checkValidation() {
      this.errors.email = "";
      this.errors.password = "";
      this.disabled = true;
      if (!this.emailValidation(this.user.email)) {
        this.errors.email = "Enter a valid email address.";
      }
      if (!this.passwordValidation(this.user.password)) {
        this.errors.password = "Password must be 6 characters or more.";
      }
      if (this.errors.email == "" && this.errors.password == "") {
        this.disabled = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$fullWidth: 100%;
$ImagesNumber: 3;

.slider {
  float: left;
  width: 45%;
  height: 490px;
  margin-right: 5%;
  background-color: #002276;
  overflow: hidden;
  padding: 5% 0;

  figure {
    position: relative;
    width: 300%;
    margin: 0;
    left: 0;
    animation: 15s slider infinite;

    div {
      float: left;
      width: $fullWidth / $ImagesNumber;
      text-align: center;

      h2 {
        color: white;
      }
    }
  }
}

@keyframes slider {
  0% {
    left: 0;
  }
  33% {
    left: 0;
  }
  35% {
    left: -$fullWidth;
  }
  66% {
    left: -$fullWidth;
  }
  70% {
    left: -200%;
  }
  100% {
    left: -200%;
  }
}
.login-form {
  float: left;
  width: 40%;
  margin-left: 5%;
}

.form-header {
  text-align: center;
}
.social-media {
  padding-bottom: 2%;

  button {
    width: $fullWidth;
    margin: 1%;
    height: 40px;
    border: none;
    border-radius: 2%;
    color: white;
    display: block;
    line-height: 30px;

    img {
      float: left;
      width: 8%;
    }
  }
  #google {
    background-color: #2d84fc;
  }
  #github {
    background-color: #333333;
  }
  #microsoft {
    color: black;
    border: 1px solid gray;
  }
}

.email-div {
  padding-top: 2%;
}
.email-div label,
input,
label {
  float: left;
  width: $fullWidth;
  margin-bottom: 1%;
}
.email-div #email,
#password {
  height: 30px;
  margin-bottom: 2%;
  border: 1px solid lightgray;
  padding-left: 5px;

  &:focus {
    border-color: #46a1ec;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
}

.submit {
  width: $fullWidth;
  height: 40px;
  border: none;
  border-radius: 2%;
  background-color: #0e99ff;
  color: white;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
.disabled {
  width: $fullWidth;
  height: 40px;
  border: none;
  border-radius: 2%;
  background-color: lightgray;
  color: white;
}
.companies {
  margin-left: 2%;
  margin-top:20px;
  img{
    width:18%;
    height:40px;
    margin-left:10px;
  }
}
</style>
