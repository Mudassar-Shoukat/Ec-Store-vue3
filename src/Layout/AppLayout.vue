<template>
  <div>
    <header
      class="bg-[white] fixed top-0 w-full  [box-shadow:0_3px_3px_rgb(237,_240,_239)] "
    >
      <slot name="header">
        <div class="border px-7">
          <nav class="flex justify-between">
            <div class="flex items-center space-x-3 lg:pr-16 pr-6">
              <h2 class="text-2xl text-[#0e2829]">shopping store</h2>
            </div>

            <!-- medium -->
            <ul class="flex items-center m-auto flex-auto space-x-2">
              <!-- Home Button -->
              <button
                type="button"
                class="w-[100px] h-[35px] mt-2 mb-2 text-sm font-medium bg-[#e8e5e524] rounded-[5px] border border-[#e6e5e5] hover:bg-gray-100 hover:text-black hover:[transition:0.3s_ease-in-out] "
                @click="$router.push('/')"
              >
                Home
              </button>

              <!-- Admin button -->
              <button
                type="button"
                class="w-[100px] h-[35px] mt-2 mb-2 text-sm font-medium bg-[#e8e5e524] rounded-[5px] border border-[#e6e5e5] hover:bg-gray-100 hover:text-black hover:[transition:0.3s_ease-in-out]"
              >
                <router-link :to="{ path: '/admin/products' }"
                  >Admin
                </router-link>
              </button>
            </ul>
            <!-- right side icons and other  -->

            <div class="flex space-x-2 justify-center items-center pl-2">
              <!-- Login icon -->
              <button
                v-if="!userToken"
                type="button"
                class="hover:underline hover:text-[#3941a9]"
              >
                <router-link :to="{ path: '/Login' }"> Login </router-link>
              </button>

              <div
                v-if="userToken"
                class="flex space-x-2 justify-center items-center pr-2"
              >
                <button
                  @click="logout"
                  class="hover:underline hover:text-[#3941a9]"
                >
                  Logout
                </button>

                <img
                  class="h-6 w-6 rounded-full mr-2 border"
                  :src="user.image"
                />
              </div>
              <!-- right side popup open icon -->
              <div>
                <div style="text-align: right">
                  <button
                    @click="drawerVisible = true"
                    class="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out "
                    aria-label="Cart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <span class="absolute inset-0 object-right-top -mr-6">
                      <div
                        class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-blue-900 text-white"
                      >
                        {{ cart.length }}
                      </div>
                    </span>
                  </button>
                </div>
                <!-- {{ cart.length }} -->

                <div
                  class="right-drawer"
                  :style="{
                    width: drawerVisible ? '36vw' : '0',

                    paddingLeft: drawerVisible ? '10px' : '0',
                  }"
                >
                  <div style="text-align: right; margin: 15px">
                    <button class="close" @click="drawerVisible = false">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <!-- click add to cart component  -->
                  <div v-for="item in cart" :key="item.id">
                    <CartItemVue :item="item" />
                  </div>
                  <!-- Sub total -->
                  <div 
                    class="m-[5px] rounded-lg border bg-[white] p-5 shadow w-[97%] "
                  >
                    <hr class="my-4" />

                    <div class="flex justify-between">
                      <p class="text-lg font-bold">Total Product Price</p>
                      <div>
                        <p class="mb-1 text-lg font-bold">${{ TotalPrice }}</p>
                      </div>
                    </div>

                    <button
                      class="mt-6 w-full border rounded-md bg-[#f7f5f5] py-1.5 font-medium hover:bg-[#ebeaea]"
                    >
                      Check out
                    </button>
                  </div>
                </div>

                <div
                  class="drawer-mask"
                  :style="{
                    width: drawerVisible ? '100vw' : '0',
                    opacity: drawerVisible ? '0.6' : '0',
                  }"
                  @click="drawerVisible = false"
                ></div>
              </div>
            </div>
          </nav>
        </div>
      </slot>
    </header>

    <main class="px-[6px] py-[16px] mt-[80px] bg-[white]">
      <slot> </slot>
    </main>
    <footer class="bg-[#e9e5e5] px-[6px] py-[10px] ">
      <slot name="footer">Footer </slot>
    </footer>
  </div>
</template>

<script setup>
import { mapState, mapActions, storeToRefs } from "pinia";
import { UseCartStore, UseAuthStore } from "../Store";
import CartItemVue from "../Components/CartItem.vue";
import { ref, onMounted, computed } from "vue";

const drawerVisible = ref(false);
const quantity = ref(1);
const cartStore = UseCartStore();
const { cart } = storeToRefs(cartStore);
const authStore = UseAuthStore();

const { user, userToken } = storeToRefs(authStore);
// const logOut = storeToRefs(authStore);

onMounted(() => {
  let token = localStorage.getItem("userToken");
  let user = localStorage.getItem("user");
// console.log("user",user);
  if (token && user) {
    let parsedUser = JSON.parse(user);
    authStore.setAuthUser(parsedUser);
  }
});

const TotalPrice = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.price * item.qty, 0);
});

const logout = () => {
console.log("click logout ");

authStore.logout()


};
</script>
<style scoped>
.right-drawer {
  position: absolute;
  top: 0;
  right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  padding-left: 0;
  border-left: 1px solid rgb(237, 231, 231);
  background: white;
  z-index: 200;
  transition: all 0.2s;
}

.drawer-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100vh;
  background: #000;
  opacity: 0.3;
  z-index: 199;
  transition: opacity 0.2s;
}
.close:hover{
  background: rgb(240, 238, 238);
}
</style>
