<template>
  <div class="md:flex md:flex-col md:justify-center">
    <div class="relative max-w-7xl">
      <h3 class="absolute font-['Architects_Daughter'] lowercase text-xl top-3 right-3 text-white">Panel #3</h3>

      <img alt="A boy entering an abandoned village"
           src="https://ucarecdn.com/584a2672-70b1-4fd0-9387-4fb8f7275ffe/-/preview/-/quality/smart/-/format/auto/">
    </div>

    <div class="font-['Inter'] flex items-center xl:-ml-12 relative">
      <div class="flex items-center">
        <div class="bg-white max-w-prose prose p-6 relative shadow-lg text-slate-600 lg:-top-24">
          <h4 class="font-['Architects_Daughter'] font-bold lowercase mb-4 text-xl">panel #3 script</h4>
          <p class="mb-4 text-xl">
            Approaching the open, askew &mdash; maybe hanging off a hinge &mdash;
            gates of the village. Walls are unmanned. Overgrown or dilapidated stalls, vendorwares,
            maybe a stray cat or dog.
          </p>

          <ul class="px-6 text-xl">
            <li><span class="font-bold">CAPTION - LOCATION:</span> Caledoran.</li>
            <li><span class="font-bold">CAPTION - INTERNAL MONOLOGUE:</span> She's here, I think.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead, useState } from '#app';
const isScriptOpen = useState('isScriptOpen', () => true);

useHead({
  title: 'Panel Three :: The Gates - Swán Comic',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {
      property: 'og:title',
      content: 'Panel Three :: The Gates - Swán Comic'
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://swancomic.com/003-the-gates',
    },
    {
      property: 'og:image',
      content: 'https://ucarecdn.com/584a2672-70b1-4fd0-9387-4fb8f7275ffe/-/preview/-/quality/smart/-/format/auto/i.jpg',
    },
  ],
});
</script>