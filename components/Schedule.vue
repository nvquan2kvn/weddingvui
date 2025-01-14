<template>
    <div class="flex justify-center mt-10 px-4">
        <div class="md:text-[18px] text-sm px-2 text-neutral-700 w-full max-w-4xl md:py-10 py-5 rounded-lg box-shadow flex flex-col md:flex-row items-center justify-center img_bg">
            <button @click="{ showScheduleGroom = true; showScheduleBride = false }"
                :class="{ 'bg-[#efcb84]': showScheduleGroom, 'bg-[#fff6e3]': !showScheduleGroom }"
                class="px-4 py-2 md:mr-10 rounded  opacity-70 uppercase transition-transform duration-300 hover:scale-110">
                Lịch cưới nhà chú rể
            </button>
            <button @click="{ showScheduleBride = true; showScheduleGroom = false }"
                :class="{ 'bg-[#efcb84]': showScheduleBride, 'bg-[#fff6e3]': !showScheduleBride }"
                class="px-4 py-2 md:ml-10 mt-5 md:mt-0 rounded opacity-70 uppercase transition-transform duration-300 hover:scale-110">
                Lịch cưới nhà cô dâu
            </button>
        </div>
    </div>

    <div class="flex justify-center mt-5 px-4">
        <div class="relative w-full max-w-4xl">
            <img class="w-full" src="~/assets/images/wedding.png" alt="">
            <div class="absolute bottom-[57%] right-[5%]">
                <svg class="animate-abc w-5 md:w-10" fill="#ff0000" version="1.1" id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
                    xml:space="preserve" stroke="#ff0000" transform="rotate(-45)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <g>
                                    <path
                                        d="M176.172,189.568c-69.82,0-126.624,56.803-126.624,126.624s56.803,126.624,126.624,126.624 s126.624-56.803,126.624-126.624S245.992,189.568,176.172,189.568z M176.172,420.794c-57.678,0-104.602-46.924-104.602-104.602 c0-55.447,43.367-100.948,97.962-104.385c-6.387,18.212-9.875,37.775-9.875,58.14c0,55.832,26.123,105.66,66.77,137.959 C211.503,416.115,194.374,420.794,176.172,420.794z M245.306,394.618c-38.527-28.05-63.629-73.476-63.629-124.671 c0-20.149,3.902-39.399,10.966-57.057c9.291,1.475,18.179,4.174,26.491,7.933c-6.388,15.112-9.93,31.711-9.93,49.122 c0,42.927,21.48,80.919,54.247,103.829C258.338,381.499,252.229,388.508,245.306,394.618z M231.226,269.946 c0-13.34,2.521-26.098,7.095-37.838c25.736,19.074,42.453,49.662,42.453,84.084c0,13.335-2.513,26.092-7.082,37.831 C247.951,334.949,231.226,304.37,231.226,269.946z">
                                    </path>
                                    <path
                                        d="M374.633,98.09l14.704-24.751c2.059-3.466,2.059-7.78,0-11.247l-22.021-37.069c-1.985-3.34-5.581-5.388-9.467-5.388 h-44.043c-3.885,0-7.482,2.047-9.467,5.388l-22.021,37.069c-2.059,3.466-2.059,7.78,0,11.247l14.704,24.751 c-32.271,7.286-61.211,23.456-84.112,45.794c-11.854-2.525-24.141-3.864-36.736-3.864C79.031,140.02,0,219.05,0,316.193 s79.031,176.172,176.172,176.172c47.778,0,91.166-19.127,122.934-50.114c11.849,2.526,24.13,3.869,36.722,3.869 C432.97,446.119,512,367.09,512,269.947C512,186.135,453.167,115.813,374.633,98.09z M320.072,41.657h31.512l15.48,26.058 l-15.48,26.059h-31.512l-15.48-26.059L320.072,41.657z M176.172,470.342c-84.999,0-154.151-69.152-154.151-154.151 s69.152-154.151,154.151-154.151s154.15,69.152,154.15,154.151S261.171,470.342,176.172,470.342z M285.592,178.222 c14.918-8.205,32.041-12.878,50.237-12.878c57.678,0,104.601,46.925,104.601,104.602c0,55.445-43.364,100.945-97.956,104.385 c6.385-18.212,9.87-37.775,9.87-58.14C352.344,260.363,326.234,210.523,285.592,178.222z M335.828,424.097 c-6.62,0-13.14-0.428-19.542-1.244c6.287-8.239,11.873-17.041,16.651-26.326c0.962,0.022,1.926,0.044,2.893,0.044 c69.82,0,126.623-56.803,126.623-126.624s-56.802-126.624-126.623-126.624c-25.898,0-49.989,7.837-70.069,21.234 c-8.868-5.26-18.233-9.765-28.009-13.424c26.669-22.056,60.846-35.338,98.077-35.338c84.999,0,154.151,69.152,154.151,154.151 S420.827,424.097,335.828,424.097z">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>
    <div class="text-center mt-5">
        <p class="font-mulish md:text-lg text-[14px]">11:00 Chủ Nhật, Ngày 09/02/2025 <br>(Tức ngày 12/01 Ất Tỵ)</p>

        <div class="md:text-5xl text-3xl mt-5 flex justify-center space-x-12">
            <!-- <p class="text-2xl font-bold">Thời gian còn lại:</p> -->
            <p class=""> {{ countdown.days }} <br> <span class="font-sriracha md:text-xl text-[16px]">Ngày</span> </p>
            <p class=""> {{ countdown.hours }} <br> <span class="font-sriracha md:text-xl text-[16px]">Giờ</span> </p>
            <p class=""> {{ countdown.minutes }}<br> <span class="font-sriracha md:text-xl text-[16px]">Phút</span> </p>
            <p class=""> {{ countdown.seconds }}<br> <span class="font-sriracha md:text-xl text-[16px]">Giây</span> </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const showScheduleGroom = ref(true);
const showScheduleBride = ref(false);

const countdown = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});
const targetDate = new Date('2025-02-09T11:00:00').getTime();

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
});

onUnmounted(() => {
    clearInterval(countdownInterval);
});
</script>

<style scoped>
.img_bg {
    background: url('~/assets/images/final/4.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

@keyframes animate-abc {
    0% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }

    50% {
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
    }

    100% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);

    }
}

.animate-abc {
    animation-name: animate-abc;
    animation-delay: 1s;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}
</style>