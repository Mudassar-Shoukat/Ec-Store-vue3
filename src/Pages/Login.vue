<template>
  <div
    class="mx-auto w-[390px] bg-[#f5f5f5b7] px-6 pt-10 pb-8 border-[1px] border-[#e4e2e2] rounded-md"
  >
    <div class="w-full">
      <div class="text-center">
        <h1 class="text-3xl font-semibold text-gray-900">Sign in</h1>
        <p class="mt-2 text-gray-500">Sign in below to access your account</p>
      </div>
      <div class="mt-5">
        <form @submit.prevent="login">
          <div class="mt-6">
            <label
              for="username"
              class="top-0 left-0 origin-left -translate-y-1/2 text-[#595a54]"
              >Username</label
            >
            <input
              type="name"
              name="username"
              id="username"
              placeholder="Username"
              v-model="FormValue.username"
              class="mt-1 w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#f5f5f5b7]"
            />
          </div>

          <div class="mt-6">
            <label
              for="password"
              class="top-0 left-0 origin-left -translate-y-1/2 text-[#595a54]"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              v-model="FormValue.password"
              class="mt-1 w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#f5f5f5b7]"
            />
          </div>

          <div class="my-6">
            <button
              type="submit"
              class="w-full rounded-md bg-[#19134b] py-2 text-white hover:bg-slate-800 hover:underline"
            >
              Sign In
            </button>
          </div>
          <p class="text-center text-sm text-gray-500">
            Don't have an account yet?
            <a href="#!" class="font-semibold text-gray-600 hover:underline"
              >Sign up </a
            >.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { UseAuthStore } from "../Store";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const FormValue = {
  username: "kminchelle",
  password: "0lelplR",
};

const authStore = UseAuthStore();
const { userToken, user } = storeToRefs(authStore);
const router = useRouter();
const login = async () => {
  const loginResponse = await axios.post(
    "https://dummyjson.com/auth/login",
    FormValue
  );

  if (loginResponse.data.token) {
    authStore.setAuthUser(loginResponse.data);
    router.push({ path: "/" });
  } else {
    console.log("error");
  }
};
</script>
