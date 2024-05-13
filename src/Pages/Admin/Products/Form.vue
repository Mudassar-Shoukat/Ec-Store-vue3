<template>
  <div class="relative mx-auto w-[410px] bg-[#b3b8bf10] px-6 pt-10 pb-8 border-[1px] border-[#e4e2e2] rounded-md">
    <div class="w-full">
      <div class="text-center">
        <h1 class="text-2xl font-semibold text-[#141937] underline">
          Product Detail
        </h1> 
      </div>
      <div class="mt-5">
        <form>
          <!-- Product Title -->

          <div class="relative mt-6">
            <input type="title" name="title" id="title" placeholder="title" v-model="Product_Value.title"
              class="mt-1 w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]" />
            <label for="title" class="absolute top-0 left-0 origin-left -translate-y-1/2 text-[#595a54]">Title:</label>
          </div>
          <!-- Product price -->

          <div class="relative mt-6">
            <input type="price" name="price" id="price" placeholder="price" v-model="Product_Value.price"
              class="mt-1 w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]" />
            <label for="price" class="absolute top-0 left-0 origin-left -translate-y-1/2 text-[#595a54]">price:</label>
          </div>

          <!-- Product stock-->

          <div class="relative mt-6">
            <input type="stock" name="stock" id="stock" placeholder="stock" v-model="Product_Value.stock"
              class="mt-1 w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]" />
            <label for="stock" class="absolute top-0 left-0 origin-left -translate-y-1/2 text-[#595a54]">stock:</label>
          </div>
          <!-- Product brand-->

          <div class="relative mt-6">
            <input type="brand" name="brand" id="brand" placeholder="brand" v-model="Product_Value.brand"
              class="mt-1 w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]" />
            <label for="brand" class="absolute top-0 left-0 origin-left -translate-y-1/2 text-[#595a54]">brand:</label>
          </div>
          <!-- Product rating-->

          <div class="relative mt-6">
            <input type="rating" name="rating" id="rating" placeholder="rating" v-model="Product_Value.rating"
              class="mt-1 w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]" />
            <label for="rating"
              class="absolute top-0 left-0 origin-left -translate-y-1/2 text-[#595a54]">rating:</label>
          </div>
          <!-- Product category-->

          <div class="relative mt-6">
            <input type="category" name="category" id="category" placeholder="category" v-model="Product_Value.category"
              class="mt-1 w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]" />
            <label for="category"
              class="absolute top-0 left-0 origin-left -translate-y-1/2 text-[#595a54]">category:</label>
          </div>
          <!-- Product discountPercentage-->

          <div class="relative mt-6">
            <input type="discountPercentage" name="discountPercentage" id="discountPercentage"
              placeholder="discountPercentage" v-model="Product_Value.discountPercentage"
              class="mt-1 w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]" />
            <label for="discountPercentage"
              class="absolute top-0 left-0 origin-left -translate-y-1/2 text-[#595a54]">discountPercentage:</label>
          </div>
          <!-- Product description-->

          <div class="relative mt-6">
            <textarea type="description" name="description" id="description" placeholder="description"
              v-model="Product_Value.description"
              class="mt-1 w-full border-b-[1px] border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none bg-[#FAFBFB]"></textarea>

            <label for="description"
              class="absolute top-0 left-0 origin-left -translate-y-1/2 text-[#595a54]">description:</label>
          </div>
          <div class="m-6">
            <button type="submit"
              class="w-full rounded-md bg-[#f6f3f3] py-2 text-black hover:bg-[#e8e6e6] hover:underline">
              Submit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Product_Value: {
        title: "",
        price: "",
        stock: "",
        brand: "",
        rating: "",
        category: "",
        discountPercentage: "",
        description: "",
      },
    };
  },
};
</script>

<style scoped></style>
