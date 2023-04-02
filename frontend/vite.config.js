// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(),
//   AutoImport({
//     resolvers: [ElementPlusResolver()],
//   }),
//   Components({
//     resolvers: [ElementPlusResolver()],
//   }),'import-analysis: { disabled: tr   }'],
//   build:{
//     outDir:'../backend',
//     emptyOutDir:true
//   }
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    {
      importAnalysis: { disabled: true }
    }
  ],
  build: {
<<<<<<< HEAD
    outDir: '../backend',
    emptyOutDir: true
  }
})

=======
    outDir: '../backend/public',
    emptyOutDir: true
  }
})
>>>>>>> 26e3747c40650849ea4f7f977471eb5aa370f999
