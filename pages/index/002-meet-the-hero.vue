<template>
  <div class="flex flex-col justify-center lg:flex-row">
    <div class="max-w-sm relative">
      <h3 class="absolute font-['Architects_Daughter'] lowercase text-xl top-3 left-3">Panel #2</h3>

      <img alt="The face of a young boy. Brown musty hair. Weary."
           src="https://ucarecdn.com/549a26e0-0156-4c0c-8707-75bf25589317/-/preview/-/quality/smart/-/format/auto/">
    </div>

    <div class="font-['Inter'] flex items-center ml-6 relative">
      <div class="flex items-center">
        <div class="bg-white max-w-prose prose p-6 shadow-lg text-slate-600">
          <h4 class="font-['Architects_Daughter'] font-bold lowercase mb-4 text-xl">panel #2 script</h4>
          <p class="mb-4 text-xl">
            We're facing <span class="font-bold">PLAGUE RAT</span>, now. He's looking beyond us, the camera, at the village. He is thin, hungry, dirty, but determined and defiant. This is the first time we see his face.
          </p>

          <ul class="px-6 text-xl">
            <li><span class="font-bold">CAPTION - INTERNAL MONOLOGUE:</span> Well, maybe for you.</li>
            <li><span class="font-bold">CAPTION - SLIGHTLY MORE INTENSE:</span> I'm my mother's son.</li>
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
  title: 'Panel Two :: Meet the hero - Swán Comic',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {
      property: 'og:title',
      content: 'Panel Two :: Meet the hero - Swán Comic'
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://swancomic.com/002-meet-the-hero',
    },
    {
      property: 'og-image',
      content: 'https://ucarecdn.com/549a26e0-0156-4c0c-8707-75bf25589317/-/preview/-/quality/smart/-/format/auto/i.jpg',
    },
  ],
});
</script>