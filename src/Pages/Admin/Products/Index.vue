<template>
  <div class="flex justify-center">
    <button type="button"
      class="w-[100px] h-[35px] mt-2 mb-2 text-sm font-medium bg-[#e8e5e5a8] rounded-[5px] border border-[#e6e5e5] hover:bg-gray-100 hover:text-black hover:[transition:0.3s_ease-in-out]">
      <router-link :to="{ path: '/admin/products/create' }">Create
      </router-link>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
