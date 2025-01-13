// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Trường 💘 Vui', // Change the title here
      link: [{ rel: 'icon', type: 'image/png', href: '/images/2550361.png' }],
      script: [
        { src: '/js/index.js', type: 'text/javascript' },
      ],
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'Nguyễn Trường 💘 Nguyễn Vui' },
        { hid: 'og:description', property: 'og:description', content: 'Trường và Vui hân hạnh mời bạn tham dự ngày cưới.' },
        { hid: 'og:image', property: 'og:image', content: '/images/tv.jpg' },
        { hid: 'og:url', property: 'og:url', content: 'https://truong-vui-wedding.vercel.app/' },
        { hid: 'og:type', property: 'og:type', content: 'website' }
      ]
    },
  },
  modules: ['@ant-design-vue/nuxt'],
  antd:{
    // Options
  }
})