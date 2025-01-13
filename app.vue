<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const isAudioPlaying = ref(false);
const isCloseModal = ref(false);

const toggleAudio = () => {
  const audio = document.getElementById('background-audio') as HTMLAudioElement;
  if (audio) {
    if (isAudioPlaying.value) {
      audio.pause();
    } else {
      audio.play();
    }
    isAudioPlaying.value = !isAudioPlaying.value;
  }
};

const toggleModal = () => {
  isCloseModal.value = !isCloseModal.value;
  scrollToTop();
  toggleAudio();
}

function createHeart1() {
  const heart = document.createElement('div');
  heart.classList.add('heart1');

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 7 + "s";

  heart.innerText = '💞';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}

onMounted(() => {
  const intervalId1 = setInterval(createHeart1, 700);
  const intervalId2 = setInterval(createHeart2, 700);

  onUnmounted(() => {
    clearInterval(intervalId1);
    clearInterval(intervalId2);
  });
});

function createHeart2() {
  const heart = document.createElement('div');
  heart.classList.add('heart2');

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 7 + "s";

  heart.innerText = '💘';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div v-if="!isCloseModal" class="coverImg welcomeModal">
    <div id="wrapper">
      <div id="pulsingheart"></div>
    </div>
  </div>
  <div v-if="!isCloseModal" class="box-welcomeModal">
    <div class="deskripsi-welcomeModal">
      <div class="subtitle">Nguyễn Trường 💘 Nguyễn Vui</div>
      <div class="title">Trân trọng kính mời
      </div>
      <div class="subtitle-tgl">Ngày 09 tháng 02 năm 2025</div>
      <div class="text">
      </div>
      <div class="button-welcomeModal flex items-center justify-center" @click="toggleModal">
        <div class="abc flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          &nbsp;Mở
        </div>
      </div>
    </div>
  </div>
  <audio id="background-audio" class="hidden" autoplay loop allow="autoplay">
    <source src="/wedding.mp3" type="audio/mp3">
  </audio>
  <AppBanner />
  <OpenLetter />
  <Event />
  <Guestbook />
  <Confirm />
  <PhotoCollection />
  <Schedule />
  <Info />
  <Thanks />

  <!-- Nút bật/tắt nhạc -->
  <div class=" fixed bottom-2 left-2">
    <button @click="toggleAudio" class="text-white relative p-2 rounded-full bg-[#797171]">
<!--      <p class="text-lg  absolute top-3 px-2 -right-20 bg-[#797171]">{{ isAudioPlaying ? 'Tắt nhạc' : 'Bật nhạc'-->
<!--        }}</p>-->
      <svg v-if="!isAudioPlaying" class="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
           stroke="#000000">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
              d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
              stroke="#ffffff" stroke-width="2" stroke-linejoin="round"></path>
        </g>
      </svg>
      <svg v-if="isAudioPlaying" class="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <rect x="6" y="5" width="4" height="14" rx="1" fill="#ffffff"></rect>
          <rect x="14" y="5" width="4" height="14" rx="1" fill="#ffffff"></rect>
        </g>
      </svg>
    </button>
  </div>


  <!-- Icon mũi tên -->
  <div class="scroll-top bg-[#797171]" @click="scrollToTop">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
         class="md:w-6 md:h-6 w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
  </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Prata&family=Quicksand:wght@300..700&family=Sriracha&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.font-pacifico {
  font-family: 'Pacifico', cursive;
}

.font-exo {
  font-family: 'Exo', sans-serif;
}

.font-mulish {
  font-family: 'Mulish', sans-serif;
}

.font-quicksand {
  font-family: 'Quicksand', sans-serif;
}

.font-dancing {
  font-family: 'Dancing Script', cursive;
}

.font-prata {
  font-family: 'Prata', serif;
}

.font-sriracha {
  font-family: 'Sriracha', cursive;
}

body {
  background-color: #f8f6f6;
  font-family: 'Prata', serif;
}


.heart1 {
  position: fixed;
  font-size: 1.5rem;
  top: -1vh;
  transform: translateY(0);
  animation: fall1 30s linear forwards;
}

.heart2 {
  position: fixed;
  font-size: 1.5rem;
  top: -1vh;
  transform: translateY(0);
  animation: fall2 30s linear forwards;
}

@keyframes fall1 {
  from {
    transform: translateY(0vh) translateX(-10vw);
  }

  to {
    transform: translateY(105vh) translateX(10vw);
  }
}

@keyframes fall2 {
  from {
    transform: translateY(0vh) translateX(10vw);
  }

  to {
    transform: translateY(105vh) translateX(10vw);
  }
}


.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s;

  animation-name: bounce;
  animation-delay: 1s;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.scroll-top svg {
  width: 24px;
  height: 24px;
}

@keyframes bounce {

  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

.subtitle {
  font-family: "Sacramento", cursive;
  font-weight: 200;
  font-style: normal;
  font-size: xx-large;
}

.coverImg {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  position: fixed;
  background-position: center;
  background-image: -webkit-image-set('~/assets/images/final/4.jpg');
  background-color: rgb(241 128 128 / 80%);
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(3px);
}

@media (max-width: 768px) {
  .coverImg {
    background-image: -webkit-image-set('~/assets/images/final/12.jpg');
  }
}

.welcomeModal {
  display: block;
  text-align: center;
  align-content: center;
  z-index: 999;
}

.text {
  margin-top: 0.75rem;
}

.box-welcomeModal p {
  margin-bottom: 0.75rem;
}

.box-welcomeModal {
  z-index: 1000;
  position: absolute;
}

.deskripsi-welcomeModal {
  position: fixed;
  width: max-content;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  text-align: center;
  margin-bottom: 20px;
  background-color: #35374B;
  color: #F3F8FF;
  border-radius: 25px 0 25px 0;
  box-shadow: 10px 6px 15px #35374B30;
  padding: 10px 20px 10px 20px;
  backdrop-filter: blur(10px);
}

.button-welcomeModal {
  background-color: lightpink;
  border-radius: 100px;
  cursor: pointer;
  height: 2.5rem;
  align-content: center;
  border: 2px solid gray;
}

.button-welcomeModal:hover {
  border: 2px solid #030712;
  background-color: #be185d;
}

a {
  text-decoration: none;
  color: #030712;
  background-color: transparent;
}

a:hover {
  color: white;
}

svg.svg-inline--fa.fa-folder-open {
  padding-right: 0.5rem;
}

svg.svg-inline--fa.fa-heart {
  color: #be185d;
}

#wrapper {
  position: absolute;
  margin-left: 50px;
  margin-top: 50px;
  animation:pulse 1s infinite;
}


#pulsingheart {
  position: relative;
  width: 100px;
  height: 90px;
}

#pulsingheart:before, #pulsingheart:after {
  position: absolute;
  content: "";
  left: 50px;
  top: 0;
  width: 50px;
  height: 80px;
  background: #aa0000;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
  animation:pulsecolor 1s infinite;
}

#pulsingheart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin :100% 100%;
  animation:pulsecolor 1s infinite;
}

@keyframes pulse {
  10% {transform: scale(1.1)}
}

@keyframes pulsecolor {
  10% {background: #dd0000}
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
