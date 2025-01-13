<template>
    <div class="flex justify-center my-10 px-4">
        <div class="md:text-[18px] text-sm px-2 text-neutral-700 w-full max-w-4xl md:py-10 py-5 rounded-lg box-shadow flex flex-col md:flex-row items-center justify-center img_bg">
            <button @click="{ showGroom = true; showBride = false }"
                class="px-4 py-2 md:mr-10 rounded  opacity-70 uppercase transition-transform duration-300 hover:scale-110"
                :class="{ 'bg-[#efcb84]': showGroom, 'bg-[#fff6e3]': !showGroom }">
                Chân dung chú rể
            </button>
            <button @click="{ showBride = true; showGroom = false }"
                class="px-4 py-2 md:ml-10 mt-5 md:mt-0 rounded opacity-70 uppercase transition-transform duration-300 hover:scale-110"
                :class="{ 'bg-[#efcb84]': showBride, 'bg-[#fff6e3]': !showBride }">
                Chân dung cô dâu
            </button>
        </div>
    </div>
    <div v-if="showGroom" class="flex justify-center md:my-8 my-4 p-4">
        <div
            class="bg-white bg-opacity-75 w-full max-w-4xl shadow-2xl rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <img src="~/assets/images/groom-1.jpg" alt="" class="md:w-1/3 rounded-lg">
            <div class="px-4 md:pe-6">
                <div class="flex justify-center ">
                    <img class="w-[80px] transition-transform duration-300 hover:scale-110"
                        src="~/assets/images/ladi-img/1.png" alt="">
                </div>
                <div class="text-[#686868] font-mulish transition-transform duration-300 hover:scale-105">
                    <h3 class="md:text-xl font-bold mb-2">Đình Hiếu</h3>
                    <p class="md:text-lg mb-2 text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officia sint voluptate labore optio
                        ut rem quaerat ab? Nam repellat corrupti magnam, suscipit iure doloremque veniam nostrum
                        delectus ea cumque.
                    </p>
                    <p class="md:text-lg mb-2 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore reprehenderit iusto
                        earum architecto corporis odit dolores. Ratione quaerat ex ut, dolores exercitationem eius!
                        Assumenda doloribus a alias corrupti. Alias, omnis. Earum nisi vitae deserunt possimus quasi
                        esse ex atque.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div v-if="showBride" class="flex justify-center md:my-8 my-4 p-4">
        <div
            class="bg-white bg-opacity-75 w-full max-w-4xl shadow-2xl rounded-lg flex flex-col items-center space-y-4 md:space-y-0 md:space-x-4 md:flex-row-reverse">
            <img src="~/assets/images/bride-1.jpg" alt="" class="md:w-1/3 rounded-lg">
            <div class="px-4 md:pe-6">
                <div class="flex justify-center ">
                    <img class="w-[80px] transition-transform duration-300 hover:scale-110"
                        src="~/assets/images/ladi-img/1.png" alt="">
                </div>
                <div class="text-[#686868] font-mulish transition-transform duration-300 hover:scale-105">
                    <h3 class="md:text-xl font-bold mb-2">Thu Hoài</h3>
                    <p class="md:text-lg mb-2 text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officia sint voluptate labore optio
                        ut rem quaerat ab? Nam repellat corrupti magnam, suscipit iure doloremque veniam nostrum
                        delectus ea cumque.
                    </p>
                    <p class="md:text-lg mb-2 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore reprehenderit iusto
                        earum architecto corporis odit dolores. Ratione quaerat ex ut, dolores exercitationem eius!
                        Assumenda doloribus a alias corrupti. Alias, omnis. Earum nisi vitae deserunt possimus quasi
                        esse ex atque.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
const showGroom = ref(false);
const showBride = ref(false);
</script>

<style scoped>
.img_bg {
    background: url('~/assets/images/5.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.box-shadow {
    box-shadow: rgb(0, 0, 0) 0px 0px 30px -10px;
}
</style>