// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({  
  modules: ['nuxt-icon', '@nuxtjs/tailwindcss'],
  ssr: false,
  devtools: { enabled: false },
  runtimeConfig: {
		public: {
		},
	},
})
