<template>
    <div ref="guestbookSection" class="p-5 bg-custom guestbook-section">
        <div class="flex justify-center">
            <svg class="md:w-20 w-16 animate-custom" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 392.533 392.533" xml:space="preserve"
                fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <g>
                        <path style="fill:#FFFFFF;"
                            d="M205.382,147.911c-6.077,6.594-12.154,6.594-18.23,0c-6.659-10.15-17.842-16.226-29.931-16.226 c-19.717,0-35.75,16.097-35.75,35.749c0,24.436,43.248,70.465,74.731,97.875c31.547-27.798,74.861-74.214,74.861-97.875 c0-19.717-16.097-35.749-35.749-35.749C223.224,131.685,212.04,137.697,205.382,147.911z">
                        </path>
                        <path style="fill:#FFFFFF;"
                            d="M284.897,138.408l68.719-60.638H38.853l68.784,60.638c10.02-17.002,28.509-28.509,49.584-28.509 c14.675,0,28.509,5.56,39.046,15.321c10.537-9.762,24.372-15.321,39.046-15.321C256.453,109.899,274.941,121.341,284.897,138.408z">
                        </path>
                        <path style="fill:#FFFFFF;"
                            d="M21.786,303.903c0,6.012,4.848,10.925,10.925,10.925h327.111c6.012,0,10.925-4.848,10.925-10.925 V91.733l-78.352,69.042c0.259,2.133,0.388,4.396,0.388,6.659c0,43.96-80.42,112.873-89.665,120.63 c-4.655,3.426-9.374,3.426-13.964,0.065c-9.18-7.564-89.665-75.572-89.665-120.695c0-2.263,0.129-4.461,0.388-6.659L21.786,91.798 V303.903z">
                        </path>
                    </g>
                    <path style="fill:#FFC10D;"
                        d="M43.572,99.491v113.131h42.99c6.012,0,10.925,4.848,10.925,10.925 c0,6.012-4.848,10.925-10.925,10.925h-42.99v21.786h21.204c6.012,0,10.925,4.848,10.925,10.925c0,6.077-4.848,10.925-10.925,10.925 H43.572v14.933h305.325V99.491H43.572z">
                    </path>
                    <path style="fill:#e15b5b;"
                        d="M196.202,265.374c31.547-27.798,74.861-74.214,74.861-97.875c0-19.717-16.097-35.749-35.749-35.749 c-12.024,0-23.273,6.012-29.931,16.226c-6.077,6.594-12.154,6.594-18.23,0c-6.659-10.15-17.842-16.226-29.931-16.226 c-19.717,0-35.749,16.097-35.749,35.749C121.471,191.871,164.719,237.899,196.202,265.374z">
                    </path>
                    <path style="fill:#4787c2;"
                        d="M359.822,55.919H32.711C14.675,55.919,0,70.594,0,88.63v215.273 c0,18.036,14.675,32.711,32.711,32.711h327.111c18.036,0,32.711-14.675,32.711-32.711V88.63 C392.533,70.594,377.859,55.919,359.822,55.919z M353.681,77.705l-68.719,60.638c-10.02-17.002-28.509-28.509-49.584-28.509 c-14.675,0-28.509,5.56-39.046,15.321c-10.537-9.762-24.372-15.321-39.046-15.321c-21.204,0-39.628,11.507-49.584,28.509 L38.917,77.705H353.681z M271.063,167.434c0,23.725-43.378,70.077-74.861,97.875c-31.547-27.41-74.731-73.503-74.731-97.875 c0-19.717,16.097-35.749,35.749-35.749c12.024,0,23.273,6.012,29.931,16.226c6.077,6.594,12.154,6.594,18.23,0 c6.659-10.15,17.842-16.226,29.931-16.226C255.095,131.685,271.063,147.717,271.063,167.434z M370.747,303.903 c0,6.012-4.848,10.925-10.925,10.925H32.711c-6.012,0-10.925-4.848-10.925-10.925V91.798l78.287,68.978 c-0.259,2.133-0.388,4.396-0.388,6.659c0,45.123,80.549,113.067,89.665,120.695c4.655,3.426,9.244,3.297,13.964-0.065 c9.18-7.758,89.665-76.671,89.665-120.63c0-2.263-0.129-4.461-0.388-6.659l78.222-69.042v212.17H370.747z">
                    </path>
                </g>
            </svg>
        </div>
        <h1 class="md:text-5xl text-[40px] font-bold my-5 text-center font-dancing transition-transform duration-300 hover:scale-110">
            Sổ Lưu Bút
        </h1>
        <p class="md:text-lg text-center mb-5 max-w-lg mx-auto font-mulish">
            Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi!</p>
        <form @submit.prevent="submitForm"
            class="hover:bg-slate-100 mb-5 font-mulish max-w-lg mx-auto bg-white text-center p-6 rounded-lg shadow-lg space-y-4">
            <div class="flex space-x-4">
                <div class="flex-1">
                    <input id="nameForm1" type="text" v-model="formData.name" placeholder="Họ và Tên"
                        class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required>
                </div>
                <div class="flex-1">
                    <select id="friendOf" v-model="formData.friendOf"
                        class="w-full h-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required>
                        <option value="groom">Bạn chú rể</option>
                        <option value="bride">Bạn cô dâu</option>
                    </select>
                </div>
            </div>
            <div>
                <textarea id="messageA" v-model="formData.message"
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4" required placeholder="Nhập lời chúc của bạn"></textarea>
            </div>
            <div>
                <select id="suggestedMessage" v-model="formData.suggestedMessage"
                    class="w-full h-[42px] p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="" disabled selected>Lời chúc gợi ý sẵn</option>
                    <option value="Chúc mừng hạnh phúc! Chúc hai bạn trăm năm hạnh phúc!">Chúc mừng hạnh phúc! Chúc hai
                        bạn trăm năm hạnh phúc!</option>
                    <option value="Happy Wedding, chúc 2 vk ck trăm năm hạnh phúc, sớm sinh quý tử nhé.">Happy Wedding,
                        chúc 2 vk ck trăm năm hạnh phúc, sớm sinh quý tử nhé.</option>
                    <option value="Trăm năm hạnh phúc nhé 2 vợ chồng 😍😍">Trăm năm hạnh phúc nhé 2 vợ chồng 😍😍
                    </option>
                    <option
                        value="Gửi lời chúc mừng chân thành nhất tới bạn của tôi. Chúc hai bạn một cuộc sống thật tuyệt vời, hòa thuận, gắn bó son sắt, thủy chung, hạnh phúc lâu dài.">
                        Gửi lời chúc mừng chân thành nhất tới bạn của tôi. Chúc hai bạn một cuộc sống thật tuyệt vời,
                        hòa thuận, gắn bó son sắt, thủy chung, hạnh phúc lâu dài.</option>
                    <option value="Mong cho 2 bạn 1 đời vui vẻ hạnh phúc">Mong cho 2 bạn 1 đời vui vẻ hạnh phúc</option>
                    <option value="Mãi mãi hạnh phúc nha. Happy Wedding">Mãi mãi hạnh phúc nha. Happy Wedding</option>
                </select>
            </div>
            <button type="submit"
                class="bg-[#987289] hover:bg-red-500 mt-5 text-white px-10 py-2 font-bold rounded-2xl font-mulish transition-transform duration-300 hover:scale-105">
                Gửi lời chúc cho Dâu Rể
            </button>
        </form>
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
const formData = ref({
    name: '',
    friendOf: 'groom',
    message: null,
    suggestedMessage: ''
});

const submitForm = () => {
    // Xử lý logic gửi form ở đây
    addDoc(collection(db, 'Guestbook'), formData.value);
  formData.value = {
    name: '',
    friendOf: 'groom',
    message: null,
    suggestedMessage: ''
  }
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
};
</script>

<style scoped>
@keyframes swing {
    20% {
        -webkit-transform: rotate(15deg);
        -ms-transform: rotate(15deg);
        transform: rotate(15deg);
    }

    40% {
        -webkit-transform: rotate(-10deg);
        -ms-transform: rotate(-10deg);
        transform: rotate(-10deg);
    }

    60% {
        -webkit-transform: rotate(5deg);
        -ms-transform: rotate(5deg);
        transform: rotate(5deg);
    }

    80% {
        -webkit-transform: rotate(-5deg);
        -ms-transform: rotate(-5deg);
        transform: rotate(-5deg);
    }

    100% {
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        transform: rotate(0);
    }
}

.bg-custom {
    background-image: linear-gradient(rgb(255, 242, 250), rgb(236, 201, 223));
    background-color: initial;
    background-size: initial;
    background-origin: initial;
    background-position: initial;
    background-repeat: initial;
    background-attachment: initial;
}

.animate-custom {
    animation-name: swing;
    animation-delay: 1s;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}
</style>