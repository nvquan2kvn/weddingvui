<template>
    <div class="w-full relative">
        <a-carousel autoplay>
            <div>
                <div class="flex justify-center">
                    <img src="~/assets/images/final/4.jpg" alt="Banner Image" class="hidden md:block md:h-[90vh] w-full">
                    <img src="~/assets/images/final/1.jpg" alt="Banner Image" class="block md:hidden w-full">
                </div>
            </div>
            <div>
                <div class="flex justify-center">
                    <img src="~/assets/images/final/18.jpg" alt="Banner Image" class="hidden md:block md:h-[90vh] w-full">
                    <img src="~/assets/images/final/5.jpg" alt="Banner Image" class="block md:hidden w-full">
                </div>
            </div>
            <div>
                <div class="flex justify-center">
                    <img src="~/assets/images/final/4.jpg" alt="Banner Image" class="hidden md:block md:h-[90vh] w-full">
                    <img src="~/assets/images/final/12.jpg" alt="Banner Image" class="block md:hidden w-full">
                </div>
            </div>
            <div>
                <div class="flex justify-center">
                    <img src="~/assets/images/final/18.jpg" alt="Banner Image" class="hidden md:block md:h-[90vh] w-full">
                    <img src="~/assets/images/final/20.jpg" alt="Banner Image" class="block md:hidden w-full">
                </div>
            </div>
        </a-carousel>
        <div
            class="absolute inset-0 flex flex-col text-center items-center justify-center text-white bg-black bg-opacity-20">
            <h1 class="md:text-8xl text-6xl font-bold text-[yellow] transition-transform duration-300 hover:scale-110 font-dancing">
                Happy Wedding
            </h1>
            <h3 class="md:text-6xl text-4xl mt-2 transition-transform duration-300 hover:scale-110 font-dancing">
                Nguyễn Trường & Nguyễn Vui
            </h3>
            <p class="md:text-lg text-[14px] mt-10 font-mulish md:font-bold">08/02/2025 Nhà Gái - 09/02/2025 Nhà Trai</p>
            <div class="md:text-5xl text-3xl mt-5 flex justify-center space-x-12">
                <!-- <p class="text-2xl font-bold">Thời gian còn lại:</p> -->
                <p class=""> {{ countdown.days }} <br> <span class="font-sriracha md:text-xl text-[16px]">Ngày</span> </p>
                <p class=""> {{ countdown.hours }} <br> <span class="font-sriracha md:text-xl text-[16px]">Giờ</span> </p>
                <p class=""> {{ countdown.minutes }}<br> <span class="font-sriracha md:text-xl text-[16px]">Phút</span> </p>
                <p class=""> {{ countdown.seconds }}<br> <span class="font-sriracha md:text-xl text-[16px]">Giây</span> </p>
            </div>
            <div class="mt-10 md:space-x-4 space-x-2 absolute bottom-10 md:text-[16px] text-[12px]">
                <button @click="scrollToGuestbook" class="bg-white text-black md:px-4 px-2 py-1 md:py-2 rounded transition-transform hover:scale-110 duration-300">
                    Gửi lời chúc
                </button>
                <button @click="scrollToConfirm" class="bg-white text-black md:px-4 px-2 py-1 md:py-2 rounded transition-transform hover:scale-110 duration-300">
                    Xác nhận tham dự
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
const countdown = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});
const targetDate = new Date('2025-02-09T10:00:00').getTime();

// Scroll to Guestbook section
const guestbookSection = ref<HTMLElement | null>(null);
const confirmSection = ref<HTMLElement | null>(null);
const QrSection = ref<HTMLElement | null>(null);

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    countdown.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdown.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    countdown.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    countdown.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);
};

let countdownInterval: ReturnType<typeof setInterval>;

onMounted(() => {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);

    guestbookSection.value = document.querySelector('.guestbook-section');
    confirmSection.value = document.querySelector('.confirm-section');
    QrSection.value = document.querySelector('.qr-section');
});

onUnmounted(() => {
    clearInterval(countdownInterval);
});

const scrollToGuestbook = () => {
    if (guestbookSection.value) {
        guestbookSection.value.scrollIntoView({ behavior: 'smooth' });
    }
};

const scrollToConfirm = () => {
    if (confirmSection.value) {
        confirmSection.value.scrollIntoView({ behavior: 'smooth' });
    }
};

const scrollToQr = () => {
    if (QrSection.value) {
        QrSection.value.scrollIntoView({ behavior: 'smooth' });
    }
};

</script>

<style scoped></style>