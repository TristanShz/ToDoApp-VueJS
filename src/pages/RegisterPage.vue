<template lang="">
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div
      class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
        <form v-on:submit.prevent="recaptcha()">
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            v-model="fullName"
          />

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            autocomplete
            placeholder="Email"
            v-model="email"
          />

          <input
            type="password"
            autocomplete
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            v-model="password"
          />
          <!-- <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          /> -->
          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-800 focus:outline-none my-1"
          >
            Create Account
          </button>
        </form>

        <div class="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the
          <a
            class="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Terms of Service
          </a>
          and
          <a
            class="no-underline border-b border-grey-dark text-grey-dark"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <div class="text-grey-dark mt-6">
        Already have an account?
        <router-link to="/login">
          <a
            class="no-underline border-b border-blue text-blue"
            href="../login/"
          >
            Log in </a
          >.
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
import axios from "axios";

Vue.use(VueReCaptcha, {
  siteKey: "6Le7ilgfAAAAAORdWfoxeqRkH1emeH8LEqvGg9RF",
  loaderOptions: {
    useRecaptchaNet: true,
  },
});
export default {
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async recaptcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded();

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha("login");

      axios
        .post("http://localhost:3000/register", {
          fullName: this.fullName,
          email: this.email,
          password: this.password,
          token,
        })
        .then((result) => console.log(result));
    },
  },
};
</script>
<style lang=""></style>
