<template>
  <div class="flex flex-col justify-center">
    <div class="relative max-w-7xl">
      <h3 class="absolute font-['Architects_Daughter'] lowercase text-xl top-3 left-3 text-white">Panel #4</h3>

      <img alt="Aerial view of an abandoned medieval square and the boy standing by the well."
           src="https://ucarecdn.com/b4476975-371c-4c78-8852-7d1f4f0d4615/-/preview/-/quality/smart/-/format/auto/">
    </div>

    <div class="font-['Inter'] flex items-center justify-center relative">
      <div class="flex items-center">
        <div class="bg-white max-w-prose prose p-6 shadow-lg text-slate-600 -rotate-3">
          <h4 class="font-['Architects_Daughter'] font-bold lowercase mb-4 text-xl">panel #4 script</h4>
          <p class="mb-4 text-xl">
            Aerial view of the medieval village square, some distance in from the gate
            &mdash; a block, maybe &mdash; <span class="font-bold">PLAGUE RAT</span> at its
            center near an old well. The place is abandoned, a little trashy. In the foreground,
            maybe from the perspective of a high building roof, a perched crow looks down at the square.
          </p>

          <ul class="px-6 text-xl">
            <li><span class="font-bold">BUBBLE (PLAGUE RAT):</span> Hello?!</li>
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
  title: 'Panel Four :: The well - Swán Comic',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {
      property: 'og:title',
      content: 'Panel Four :: The Well - Swán Comic'
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://swancomic.com/004-the-well',
    },
    {
      property: 'og:image',
      content: 'https://ucarecdn.com/b4476975-371c-4c78-8852-7d1f4f0d4615/-/preview/-/quality/smart/-/format/auto/i.jpg',
    },
  ],
});
</script>