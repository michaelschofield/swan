<template>
  <div class="lg:flex lg:justify-center">
    <div class="relative order-last max-w-md">
      <h3 class="absolute font-['Architects_Daughter'] lowercase text-xl top-3 left-3">Panel #6</h3>

      <img alt="The dessicated face of a plague victim. A rat sitting on their chest."
           src="https://ucarecdn.com/f7954c65-3489-47f4-9f8a-01acf21bdf4f/-/preview/-/quality/smart/-/format/auto/">
    </div>

    <div class="font-['Inter'] flex flex-col items-center mr-6 relative">
      <div class="flex items-center">
        <div class="bg-white max-w-prose prose p-6 shadow-lg text-slate-600">
          <h4 class="font-['Architects_Daughter'] font-bold lowercase mb-4 text-xl">panel #6 script</h4>
          <p class="mb-2 text-xl">
            Low angle view of a body in the foreground in a white shroud
            that has come undone. Its face is turned away, but it is clearly decayed.
            There is a rat sitting on it. Eating. In the background is
            <span class="font-bold">PLAGUE RAT</span>, having come down the alley to explore
            the noise. Eyes wide. Disgusted. Horrified.
          </p>
        </div>
      </div>

      <div class="mt-4 text-right w-full">
        <span class="font-['Architects_Daughter'] text-2xl text-white">
          To be continued ....
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead, useState } from '#app';
const isScriptOpen = useState('isScriptOpen', () => true);

useHead({
  title: 'Panel Six :: Plague was here - Swán Comic',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {
      property: 'og:title',
      content: 'Panel Six :: Plague was here - Swán Comic'
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://swancomic.com/006-plague-was-here',
    },
    {
      property: 'og-image',
      content: 'https://ucarecdn.com/f7954c65-3489-47f4-9f8a-01acf21bdf4f/-/preview/-/quality/smart/-/format/auto/i.jpg',
    },
  ],
});
</script>