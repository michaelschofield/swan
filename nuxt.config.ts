// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap',
                    rel: 'stylesheet',
                },
                {
                    href: 'https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap',
                    rel: 'stylesheet',
                },
            ],
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-lodash'
    ],
    tailwindcss: {
        configPath: '~tailwind.config.js',
        viewer: false,
    },
})
