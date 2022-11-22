import solid from 'solid-start/vite'
import { defineConfig } from 'vite'
import windicss from 'vite-plugin-windicss'
import vercel from 'solid-start-vercel'

export default defineConfig({
  plugins: [
    windicss(),
    solid({
      adapter: vercel({
        edge: true,
      }),
    }),
  ],
})
