<template lang="">
  <section class="flex justify-center items-center h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white rounded p-6 space-y-4">
      <div class="mb-4">
        <p class="text-gray-600">Sign In</p>
        <h2 class="text-xl font-bold">Join our community</h2>
      </div>
      <form @submit.prevent="checkLogin()">
        <div>
          <input
            class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="text"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div>
          <input
            class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-5 mb-5"
          role="alert"
          v-if="errorMessage"
        >
          <strong class="font-bold">Attention ! </strong>
          <span class="block sm:inline">{{ errorMessage }}</span>
        </div>
        <div>
          <button
            type="submit"
            class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
          >
            Sign In
          </button>
        </div>
      </form>
      <div class="flex items-center justify-between">
        <div class="flex flex-row items-center">
          <input
            type="checkbox"
            class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label for="comments" class="ml-2 text-sm font-normal text-gray-600"
            >Remember me</label
          >
        </div>
        <div>
          <a class="text-sm text-blue-600 hover:underline" href="#"
            >Forgot password?</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      token: "",
      errorMessage: "",
    };
  },
  methods: {
    async checkLogin() {
      const isLogged = await axios
        .post("http://localhost:3000/login", {
          email: this.email,
          password: this.password,
        })
        .then((result) => {
          return result.data;
        })
        .catch((error) => {
          return error.response.data;
        });
      console.log(JSON.stringify(isLogged.message));
      this.errorMessage = JSON.stringify(isLogged.message);
    },
  },
};
</script>
<style lang=""></style>
