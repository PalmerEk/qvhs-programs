import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  extend: {
    backgroundImage: {
      'volleyball': "url('/public/QVLogo.png')",
    },
  }
}
