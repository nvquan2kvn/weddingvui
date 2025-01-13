<template>
    <div class="flex justify-center md:mt-20">
        <img class="w-[120px] transition-transform duration-300 hover:scale-105" src="~/assets/images/ladi-img/1.png"
            alt="">
    </div>
    <div class="text-center my-8">
        <h1
            class="text-[#787878] inline-block md:text-3xl text-xl font-prata font-bold transition-transform duration-300 hover:scale-110">
            BỘ SƯU TẬP ẢNH CƯỚI
        </h1>
    </div>
    <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto max-w-screen-lg items-center">
      <img src="~/assets/images/final/1.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/10.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/20.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/4.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/5.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/6.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/7.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/8.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/9.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/2.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/11.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/12.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/13.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/14.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/15.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/16.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/17.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/18.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/19.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
      <img src="~/assets/images/final/3.jpg" alt="" class="photo hover:scale-105 transition-transform duration-300">
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.photo {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.photo:nth-child(odd) {
    grid-row: span 2;
}


@media (max-width: 639px) {
  .photo:nth-child(odd) {
    grid-row: auto;
  }
}
</style>