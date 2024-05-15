<template>
  <!-- search bar  -->
  <div class="w-[500px] mx-auto mb-3 flex">
    <input
      id="input"

      class="w-full py-2 px-6 border rounded-l-[20px] outline-[#eeecec]"
      type="text"
      v-model="searchTerm"
      @keyup="searchProduct"
      placeholder="Search... "
    />

    <button
      id="button"
      v-if="searchTerm"
      class="w-10 inset-y-0 p-2 flex items-center text-gray-700 border-y-[1px]"
      @click="clear"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 hover:bg-[#dcd8d8] rounded-full"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>

    <button
      class="inset-y-0 right-0 flex items-center px-5 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-[20px] hover:bg-gray-200 outline-[#f0eaea]"
      @click="searchProduct"
    >
      <svg
        class="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
        />
      </svg>
    </button>
  </div>

  <!-- product list  -->
  <div class="flex flex-wrap justify-center items-center w-full">
    <div
      v-for="product in productList"
      :key="product.id"
      class="  w-[300px] h-[450px] m-[10px] flex flex-wrap text-center rounded-[5px] border-[1px] [transition:0.3s_ease-in-out] overflow-hidden bg-[#f6f4f4] border-zinc-300 hover:cursor-pointer hover:border-[#808383] "
    >
      <router-link
        :to="{
          path: '/product/' + product.id,
          query: { product_id: product.id },
        }"
      >
        <img
          :src="product.images[0]"
          :alt="product.title"
          class="h-[345px] w-[282px] m-[10px] flex"
        />
        <div class="h-28 w-[100%]">
          <h1 class="text-lg text-[#e84409] font-medium">
            {{ product.title }}
          </h1>
          <h2>RS. ${{ product.price }}</h2>
          <p class="underline text-[#757070]">
            Discount: {{ product.discountPercentage }}%
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
const products = ref([]);

const searchTerm = ref("");
const timer = ref(0);

const productList = computed(() => {
  return products.value.products;
});

const fetchProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

onMounted(fetchProducts);

function searchProduct() {
  if (timer.value) {
    clearTimeout(timer.value);
    // coplete
    
    timer.value = null;
  }
  timer.value = setTimeout(() => {
    products.value.products = products.value.products.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.value);
    });
  }, 800);
  // console.log("product id", products.value.product.id);
}

function clear() {
  searchTerm.value = "";
  if (searchTerm.value === "") {
    fetchProducts()
    console.log("search term is clear");
  }
}
</script>

<style scoped>
#input {
  @apply outline-none border-r-0 focus:outline-none focus:border-r-0;
}

#button {
  @apply outline-none border-l-0 focus:outline-none focus:border-l-0;
}






</style>
