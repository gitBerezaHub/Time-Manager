<template>
  <div class="content">
    <p class="login-label" @click="setPolySize()">Login</p>
    <svg class="background-poly">
      <polygon points="" id="poly" fill="#fff" />
    </svg>
    <div class="container">
      <input
        class="login-input"
        :class="{ 'login-input__error': accountError || loginError }"
        placeholder="account"
        v-model="username"
      />
      <p v-if="accountError" style="color: #d90e0e">{{ accountError }}</p>
      <input
        class="login-input"
        :class="{ 'login-input__error': passwordError || loginError }"
        type="password"
        placeholder="password"
        v-model="password"
      />
      <p v-if="passwordError" style="color: #d90e0e">{{ passwordError }}</p>
      <p v-if="loginError" style="color: #d90e0e">{{ loginError }}</p>
    </div>
    <button class="login-button" id="login-button" @click="findUserId()">
      login
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      accountError: "",
      passwordError: "",
      loginError: "",
    };
  },
  methods: {
    setPolySize() {
      let points = `0, 40 0, ${window.innerHeight} ${window.innerWidth}, ${window.innerHeight} ${window.innerWidth}, 0`;
      let poly = document.getElementById("poly");
      poly.setAttribute("points", points);
    },
    async findUserId() {
      let checkedAccount = this.checkAccountField();
      let checkedPassword = this.checkPasswordField();
      if (checkedAccount || checkedPassword) {
        this.shakeButton();
        return;
      }

      let users = await axios.get(this.$store.state.API_URL + "/users");
      for (let i = 0; i < users.data.length; i++) {
        let user = users.data[i];
        if (this.username === user.username) {
          this.$store.commit("setUserID", user.id);
          this.$store.commit("formatDate");
          this.$router.push(`/${this.$store.state.date}`);
        } else {
          this.loginError = "Incorrect account or password";
          this.shakeButton();
        }
      }
    },
    checkAccountField() {
      this.accountError = "";
      this.loginError = "";

      if (this.username === "") {
        this.accountError = "Empty account field";
      }

      return this.accountError;
    },

    checkPasswordField() {
      this.passwordError = "";
      this.loginError = "";

      if (this.password === "") {
        this.passwordError = "Empty password field";
      }
      return this.passwordError;
    },

    removeShakeButton() {
      let loginButton = document.getElementById("login-button");
      if (loginButton !== null) {
        loginButton.classList.remove("shake");
      }
    },
    shakeButton() {
      let loginButton = document.getElementById("login-button");
      loginButton.classList.add("shake");
      setTimeout(this.removeShakeButton, 500);
    },
  },
  watch: {
    username() {
      this.checkAccountField();
    },
    password() {
      this.checkPasswordField();
    },
  },
  mounted() {
    this.setPolySize();
    window.addEventListener("resize", this.setPolySize);
  },
  unmounted() {
    window.removeEventListener("resize", this.setPolySize);
  },
});
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25vh;
  z-index: 1;
}

.login-label {
  font-size: 64px;
  margin-top: 9vh;
  font-weight: 300;
  color: #244782;
}

.login-input {
  all: unset;
  font-size: 32px;
  display: flex;
  width: 65%;
  border-bottom: 1px solid #244782;
  padding: 45px 10px 0;

  &::placeholder {
    color: #afb8c7;
    font-weight: 300;
    text-align: center;
  }

  &__error {
    color: #d90e0e;
    border-color: #d90e0e;

    &::placeholder {
      color: #ec9e9e;
    }
  }
}

.background-poly {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 75vh;
}

.login-button {
  font-size: 32px;
  font-weight: 300;
  z-index: 1;
  margin-top: 12vh;
  padding: 10px 0;
  width: 72%;
  background-color: #72afd2;
  color: #fff;
  border: none;
  border-radius: 50px;
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
