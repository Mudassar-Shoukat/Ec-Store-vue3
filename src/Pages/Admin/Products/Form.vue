<template>
  <div
    class=" mx-auto w-[410px] bg-[#b3b8bf10] px-6 pt-10 pb-8 border-[1px] border-[#e4e2e2] rounded-md "
  >
    <div class="w-full">
      <div class="text-center">
        <h1 class="text-2xl font-semibold text-[#51641c] underline">
          Product Detail
        </h1>
      </div>
      <div class="mt-5">
        <form>
          <!-- Product Title -->

          <div class=" mt-2">
            <label
              for="title"
              class=" label"
              >Title:</label
            >
            <input
              type="title"
              name="title"
              id="title"
              placeholder="title"
              v-model="Product_Value.title"
              class=" w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]"
            />
           
          </div>
          <!-- Product price -->

          <div class=" mt-2">
              <label
              for="price"
              class=" label"
              >price:</label
            >
            <input
              type="price"
              name="price"
              id="price"
              placeholder="price"
              v-model="Product_Value.price"
              class="w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]"
            />
          
          </div>

          <!-- Product stock-->

          <div class=" mt-2">
            <label
              for="stock"
              class=" label"
              >stock:</label
            > 
            <input
              type="stock"
              name="stock"
              id="stock"
              placeholder="stock"
              v-model="Product_Value.stock"
              class=" w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]"
            />
           
          </div>
          <!-- Product brand-->

          <div class=" mt-2">
              <label
              for="brand"
              class=" label"
              >brand:</label
            >
            <input
              type="brand"
              name="brand"
              id="brand"
              placeholder="brand"
              v-model="Product_Value.brand"
              class=" w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]"
            />
          
          </div>
          <!-- Product rating-->

          <div class=" mt-2">
             <label
              for="rating"
              class=" label"
              >rating:</label
            >
            <input
              type="rating"
              name="rating"
              id="rating"
              placeholder="rating"
              v-model="Product_Value.rating"
              class=" w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]"
            />
           
          </div>
          <!-- Product category-->

          <div class=" mt-2">
              <label
              for="category"
              class=" label"
              >category:</label
            >
            <input
              type="category"
              name="category"
              id="category"
              placeholder="category"
              v-model="Product_Value.category"
              class="w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]"
            />
          
          </div>
          <!-- Product discountPercentage-->

          <div class=" mt-2">
              <label
              for="discountPercentage"
              class=" label"
              >discountPercentage:</label
            >
            <input
              type="discountPercentage"
              name="discountPercentage"
              id="discountPercentage"
              placeholder="discountPercentage"
              v-model="Product_Value.discountPercentage"
              class=" w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]"
            />
          
          </div>
          <!-- Product description-->

          <div class=" mt-6">
              <label
              for="description"
              class=" label"
              >description:</label
            >
            <textarea
              type="description"
              name="description"
              id="description"
              placeholder="description"
              v-model="Product_Value.description"
              class=" w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]"
            ></textarea>

          
          </div>
          <div class="m-6">
            <button
              type="submit"
              class="w-full rounded-md bg-[#f6f3f3] py-2 text-black hover:bg-[#e8e6e6] hover:underline"
            >
              Submit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const Product_Value = {
  title: "",
  price: "",
  stock: "",
  brand: "",
  rating: "",
  category: "",
  discountPercentage: "",
  description: "",
};
</script>

<style scoped>

.label{
  top: 0; 
left: 0; 
transform-origin: left; 
color: #7f8078;
font-weight: 500;

}




</style>
