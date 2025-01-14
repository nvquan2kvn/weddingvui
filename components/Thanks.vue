<template>
    <div class="flex flex-col items-center justify-center md:py-48 py-20 bg-thanks relative">
        <!-- <img src="~/assets/images/anh_cuoi_2.jpg" alt="Thanks Image" class="w-full h-full object-cover"> -->
        <div class="flex flex-col items-center justify-center text-white">
            <h1 class="md:text-8xl text-6xl font-pacifico mb-10">Thank you!</h1>
            <h2 class="md:text-5xl text-3xl font-dancing">-Nguyễn Trường & Nguyễn Vui-</h2>
        </div>
        <div class="md:text-lg text-sm absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-4">
            Happy Wedding - Nguyễn Trường & Nguyễn Vui
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bg-thanks {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('~/assets/images/final/4.jpg');
    background-size: cover;
    background-origin: content-box;
    background-position: 50% 44%;
    background-repeat: repeat;
    background-attachment: scroll;
}
</style>