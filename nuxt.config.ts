// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({  
  modules: ['nuxt-icon', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
		public: {
			// Should be secret, but don't care right now (free account & read only)
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
		},
	},
})
