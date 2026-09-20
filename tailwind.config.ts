import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./app/**/*.{vue,ts}', './content/**/*.{md,yml,yaml}', './components/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        quetzal: {
          deep: '#0B3D2E',
          primary: '#087F5B',
          light: '#DFF5EA'
        },
        cloud: '#2F6FED',
        canvas: '#F7FAF9',
        ink: '#14231D',
        muted: '#52615B'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif']
      },
      borderRadius: {
        card: '18px'
      }
    }
  },
  plugins: []
}
