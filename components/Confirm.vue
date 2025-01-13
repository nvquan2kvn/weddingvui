<template>
    <div ref="confirmSection" class="bg-custom px-4 confirm-section">
        <div class="md:p-6 p-2 m-4 bg-white max-w-3xl mx-auto">
            <form @submit.prevent="submitForm" class="bg-[#f8ebee] font-mulish md:p-10 px-4 py-5 rounded-lg shadow-lg space-y-4">
                <div class="flex justify-center mb-5">
                    <img class="md:w-1/3 w-2/3 rounded-full abc" src="~/assets/images/avt.jpg" alt="">
                </div>
                <h1
                    class="md:text-5xl text-4xl font-bold mb-4 text-center font-dancing text-[#656363] transition-transform duration-300 hover:scale-110">
                    Xác nhận tham dự
                </h1>
                <p class="md:text-lg text-center mb-4">
                    Xác nhận tham dự đám cưới của Quân & Ngọc. Điều này giúp chúng tôi đón tiếp các bạn chu đáo và đầy
                    đủ hơn. Xin cảm ơn !!!
                </p>
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <input id="nameForm2" type="text" v-model="formData.name" placeholder="Họ và Tên"
                            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required>
                    </div>
                    <div class="flex-1">
                        <input type="tel" v-model="formData.phone" placeholder="Số điện thoại"
                            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required>
                    </div>
                </div>
                <div>
                    <select id="eventChosen" v-model="formData.event"
                        class="w-full h-[42px] p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required>
                        <option value="groom">Tiệc nhà trai</option>
                        <option value="bride">Tiệc nhà gái</option>
                    </select>
                </div>
                <div>
                    <input type="radio" id="attendingYes" value="yes" v-model="formData.attending" class="mr-2">
                    <label for="attendingYes">Có, tôi sẽ đến!</label>
                    <input type="radio" id="attendingNo" value="no" v-model="formData.attending" class="mr-2 ml-7">
                    <label for="attendingNo">Xin lỗi, tôi bận mất rồi!</label>
                </div>
                <div v-if="formData.attending === 'yes'">
                    <label for="guests" class="block text-lg font-medium mb-2">Số người tham dự</label>
                    <select id="guests" v-model="formData.guests"
                        class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required>
                        <option value="" disabled selected>Chọn</option>
                        <option value="1">1 người</option>
                        <option value="2">2 người</option>
                        <option value="3">3 người</option>
                        <option value="4">4 người</option>
                        <option value="5">5 người</option>
                    </select>
                </div>
                <div>
                    <textarea id="messageB" v-model="formData.message" placeholder="Gửi lời nhắn tới cô dâu chú rể"
                        class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"></textarea>
                </div>
                <button type="submit"
                    class="bg-[#987289] mt-5 text-white w-full py-2 font-bold rounded-2xl font-mulish transition-transform duration-300 hover:bg-red-500 hover:scale-105">
                    Xác Nhận
                </button>

            </form>
        </div>
      <div v-if="showAlert" class="p-4 mb-4 top-5 fixed text-sm text-emerald-500 rounded-xl bg-emerald-50 font-normal z-50" role="alert">
        <span class="font-semibold mr-2">Cảm ơn bạn!!!</span>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { db } from '../firebase';
import {collection, addDoc} from 'firebase/firestore'
const showAlert = ref(false);
const formData = ref<any>({
    name: '',
    phone: '',
    event: 'groom',
    attending: false,
    guests: '',
    message: ''
});

const submitForm = () => {
    addDoc(collection(db, 'confirm'), formData.value);
  formData.value = {
    name: '',
    phone: '',
    event: 'groom',
    attending: false,
    guests: '',
    message: ''
  };
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
};
</script>

<style scoped>
.bg-custom {
    background-image: url('~/assets/images/bg-custom-1.jpg');
    background-size: cover;
    background-origin: content-box;
    background-position: 50% 0%;
    background-repeat: repeat;
    background-attachment: scroll;
}

@keyframes tada {
    0% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }

    10%,
    20% {
        -webkit-transform: scale(0.9) rotate(-3deg);
        -ms-transform: scale(0.9) rotate(-3deg);
        transform: scale(0.9) rotate(-3deg);
    }

    30%,
    50%,
    70%,
    90% {
        -webkit-transform: scale(1.1) rotate(3deg);
        -ms-transform: scale(1.1) rotate(3deg);
        transform: scale(1.1) rotate(3deg);
    }

    40%,
    60%,
    80% {
        -webkit-transform: scale(1.1) rotate(-3deg);
        -ms-transform: scale(1.1) rotate(-3deg);
        transform: scale(1.1) rotate(-3deg);
    }

    100% {
        -webkit-transform: scale(1) rotate(0);
        -ms-transform: scale(1) rotate(0);
        transform: scale(1) rotate(0);
    }
}

.abc {
    animation-name: tada;
    animation-delay: 1s;
    animation-duration: 2s;
    animation-iteration-count: infinite;

}
</style>