<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <div v-if="product.id">
    <div class="container">
      <!-- Single Product image -->
      <section
        class="w-[300px] h-[440px] m-[10px] flex flex-wrap text-center rounded-[5px] border-[1px] [transition:0.3s_ease-in-out] overflow-hidden bg-[#f6f4f4] border-zinc-300 hover:cursor-pointer hover:scale-[1.02] hover:[transition:0.3s_ease-in-out]"
      >
        <img
          :src="product.images[0]"
          :alt="product.title"
          class="h-[375px] w-[282px] m-[10px] flex"
        />
        <div class="h-18 w-[100%]">
          <h1 class="text-lg text-[#e84409] font-medium">
            {{ product.title }}
          </h1>
        </div>
      </section>

      <!-- Short Product images or releated images -->
      <section
        class="w-[180px] h-[440px] m-[10px] flex flex-wrap text-center rounded-[5px] border-[1px] overflow-hidden bg-[#f2f0f0] border-zinc-300 ]"
      >
        <img
          :src="product.images[1]"
          :alt="product.title"
          class="h-[108px] w-[197px] p-1 flex [transition:0.3s_ease-in-out] hover:cursor-pointer hover:scale-[1.09] hover:[transition:0.3s_ease-in-out]"
        />
        <img
          :src="product.images[2]"
          :alt="product.title"
          class="h-[108px] w-[197px] p-1 flex [transition:0.3s_ease-in-out] hover:cursor-pointer hover:scale-[1.09] hover:[transition:0.3s_ease-in-out]"
        />
        <img
          :src="product.images[3]"
          :alt="product.title"
          class="h-[108px] w-[197px] p-1 flex [transition:0.3s_ease-in-out] hover:cursor-pointer hover:scale-[1.09] hover:[transition:0.3s_ease-in-out]"
        />
        <img
          :src="product.images[4]"
          :alt="product.title"
          class="h-[108px] w-[197px] p-1 flex [transition:0.3s_ease-in-out] hover:cursor-pointer hover:scale-[1.09] hover:[transition:0.3s_ease-in-out]"
        />
      </section>
      <!-- Product Discription or product detail -->
      <section
        class="w-[400px] h-full m-[10px] flex flex-wrap text-center rounded-[5px] overflow-hidden bg-[#f6f4f4]"
      >
        <h1
          class="text-lg text-[#b15331] font-medium h-[35px] w-full p-1 flex bg-[white]"
        >
          {{ product.brand }} Brand
        </h1>
        <div class="h-[35px] w-full p-1 flex bg-[white]">
          <p class="text-[#2b1710] w-[140px]">
            Discount: {{ product.discountPercentage }}%
          </p>
          <h1 class="text-[#3b2d8d] w-[90px] text-lg font-medium">
            RS: ${{ product.price }}
          </h1>
        </div>

        <div class="h-[45px] w-full p-1 flex bg-[white]">
          <button
            @click="addToCart"
            type="button"
            class="text-white bg-[#12123b] hover:bg-[#26266b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
          >
            <svg
              class="w-3.5 h-3.5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path
                d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
              />
            </svg>
            Add to Cart
          </button>
        </div>
        <div class="h-[35px] w-full p-1 flex bg-[white]">
          <p class="text-lg underline text-[#686565]">
            Product Available: {{ product.stock }}
          </p>
        </div>
        <div class="h-[35px] w-full p-1 flex bg-[white]">
          <p class="text-[#97722e] w-[50px] text-2xl font-medium">
            {{ product.rating }}
          </p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>

        <div class="w-full p-1 flex bg-[white]">
          <p class="text-left">{{ product.description }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { UseCartStore } from "../Store";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const cartStore = UseCartStore();
const { AddtoCart } = storeToRefs(cartStore);
const product = ref("");
const route = useRoute();

const addToCart = () => {
  cartStore.AddtoCart({
    ...product.value,
    qty: 1,
    totalPrice: 1 * parseFloat(product.value.price),
  });
};

onMounted(() => {
  const productId = route.params.id;

  if (productId) {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        if (response.data) {
          product.value = response.data;
        } else {
          console.error("Error fetching product details:", response.data);
        }
      });
  }
});
</script>

<style scoped>
.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.checked {
  color: orange;
}

span {
  display: flex;
  align-items: center;
  padding: 1px;
}
</style>
