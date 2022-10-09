<template>
  <div class="min-h-full">
    <main>
      <div class="mx-auto w-full">
        <h1 class="sr-only">Swán</h1>
        <!-- Main 3 column grid -->
        <div class="flex items-start w-full">
            <section aria-labelledby="section-1-title" class="w-full">
              <h2 class="sr-only" id="section-1-title">Read the comic</h2>
              <div class="overflow-hidden bg-slate-900">
                <div class="font-['Architects_Daughter'] py-6 text-3xl text-center text-white">swán</div>
                <panel-menu :tabs="tabs" />

                <div class="flex justify-center items-start min-h-screen relative p-6">
                  <NuxtPage />
                </div>
              </div>
          </section>
        </div>
      </div>
    </main>
    <footer class="bg-slate-900 border-t border-gray-200">
      <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div class="flex justify-center space-x-6 md:order-2">
          <nuxt-link v-for="item in navigation" :key="item.name" :to="item.href" class="text-white hover:text-gray-500">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </nuxt-link>
        </div>
        <div class="mt-8 md:order-1 md:mt-0">
          <p class="text-center text-base text-white">&copy; 2022 Michael Schofield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import { useHead } from '#app';

const navigation = [
  /** {
    name: 'Facebook',
    href: '#',
    icon: defineComponent({
      render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
    }),
  },*/
  /** {
    name: 'Instagram',
    href: '#',
    icon: defineComponent({
      render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
    }),
  },*/
  {
    name: 'Twitter',
    href: 'https://twitter.com/schoeyfield',
    icon: defineComponent({
      render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
            }),
          ]),
    }),
  },
];

useHead({
  title: 'Swán :: Web Comic of a Kid Alone with the Plague',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {
      name: 'og:title',
      content: 'Swán :: Web Comic of a Kid Alone with the Plague'
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:url',
      content: 'https://swancomic.com',
    },
    {
      name: 'og-image',
      content: 'https://ucarecdn.com/804a5d7e-1bf5-4ad8-a038-3c88b14f5479/-/preview/-/quality/smart/-/format/auto/i.jpg',
    },
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
});
</script>

<script>
export default {
  computed: {
    panelCurrent() {
      return this.$route.name.replace('index-', '');
    },
    panelCurrentIndex() {
      return this.panels.indexOf(this.panelCurrent);
    },
    panelBackIndex() {
      return this.panelCurrentIndex <= 0 ? 0 : this.panelCurrentIndex - 1;
    },
    panelBack() {
      return this.panels.at(this.panelBackIndex);
    },
    panelFirst() {
      return useFirst(this.panels);
    },
    panelLast() {
      return useLast(this.panels);
    },
    panelLastIndex() {
      return this.panels.indexOf(this.panelLast);
    },
    panelNextIndex() {
      return this.panelCurrentIndex >= this.panelLastIndex ? this.panelLastIndex : this.panelCurrentIndex + 1;
    },
    panelNext() {
      return this.panels.at(this.panelNextIndex);
    },
    tabs() {
      return [
        { name: 'First', to: this.panelFirst, current: this.panelCurrentIndex === 0 },
        { name: 'Back', to: this.panelBack, current: false },
        { name: 'Next', to: this.panelNext, current: false },
        { name: 'Latest', to: this.panelLast, current: this.panelCurrentIndex === this.panelLastIndex },
      ];
    },
  },
  data() {
    return {
      panels: [
        '001-approaching-caledoran',
        '002-meet-the-hero',
        '003-the-gates',
        '004-the-well',
        '005-what-was-that',
        '006-plague-was-here',
      ],
    };
  },
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>