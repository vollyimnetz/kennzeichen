/// <reference types="vitest" />
import { defineConfig } from 'vite'
//import { splitVendorChunkPlugin } from 'vite';//no longer used - just to know
import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'


const path = require('path');
let userSettings = null;
try {
    userSettings = require('./settings');
} catch(error) {
    if(process.env.NODE_ENV === 'production') {
        userSettings = { proxyserver:'anything' }//not used in production
    } else {
        console.error('ACHTUNG Die settings.js Datei ist nicht korrekt gesetzt. Guck dir die settings.example.js Datei an.');
        process.exit()
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls }
        }),
        vuetify({
            autoImport: true,
            /* styles: { configFile: 'src/styles/settings.scss', }, */
        }),
        ViteFonts({}),//will preload the fonts
        //splitVendorChunkPlugin(),
        VitePWA({
            //service worker settings
            //injectRegister: null,//will not register service-worker on their own
            strategies: 'injectManifest',
            filename: 'service-worker.js',//service worker file name
            //includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],//add to prefetch

            //manifest settings
            useCredentials: true,//for manifest header tag
            maximumFileSizeToCacheInBytes: 3000,
            manifest: {
                name: 'Kennzeichen',
                short_name: 'Kennzeichen',
                description: 'Kennzeichen ist eine kleine Webapp um zu deutschen Autokennzeichen den Ort zu finden.',
                orientation: "portrait",
                background_color: '#ffffff',
                theme_color: '#4DBA87',
                icons: [
                    {//android
                        src: 'staticAssets/icons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                    {//android
                        src: 'staticAssets/icons/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                    {
                        src: 'staticAssets/icons/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    },
                    {
                        src: 'staticAssets/icons/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                ],
                screenshots: [
                    {
                        src: 'staticAssets/screenshots/desktop-screenshot-01.png',
                        sizes: '2160x1200',
                        type: 'image/png',
                        form_factor: 'wide',
                    },
                    {
                        src: 'staticAssets/screenshots/desktop-screenshot-02.png',
                        sizes: '2160x1200',
                        type: 'image/png',
                    },
                    {
                        src: 'staticAssets/screenshots/desktop-screenshot-03.png',
                        sizes: '2160x1200',
                        type: 'image/png',
                    },
                ],
                lang: "de",
                start_url: ".",
            },

            injectManifest: {
                maximumFileSizeToCacheInBytes: 10000000,
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            //vue: path.resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),
        },
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    },
    define: {
        'process.env': {},
        APP_VERSION_DATE: JSON.stringify(new Date()),
        PLACEHOLDER_MATOMO_URL: JSON.stringify(userSettings.matomoserver),
    },
    build: {
        chunkSizeWarningLimit: 1900,
        manifest: true,
        outDir: './docs',
    },

    server: {
        port: 8080,
        open: true,
        proxy: {
            /*/ START for testing only
            '/api/user': {
                target: userSettings.proxyserver,
                secure: true,
                changeOrigin: true,
                ws: true,
                selfHandleResponse: true, configure: (proxy, options) => { proxy.on("proxyRes", developmentRequestMock); }
            },
            // END */
            '/api': {
                target: userSettings.proxyserver,
                secure: false,
                changeOrigin: true,
                ws: true,
            }
        }
    }
})
