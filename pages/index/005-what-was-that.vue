<template>
  <div class="lg:flex lg:justify-center">
    <div class="relative max-w-sm">
      <h3 class="absolute font-['Architects_Daughter'] lowercase text-xl top-3 left-3 text-white">Panel #5</h3>

      <img alt="The boy walking down an alley. Movement in the foreground catches his attention."
           src="https://ucarecdn.com/e085ff7c-fb75-40c3-9650-b198b017a7ea/-/preview/-/quality/smart/-/format/auto/">
    </div>

    <div class="font-['Inter'] flex items-center justify-center relative">
      <div class="flex items-center">
        <div class="bg-white max-w-prose prose p-6 shadow-lg text-slate-600 lg:ml-6">
          <h4 class="font-['Architects_Daughter'] font-bold lowercase mb-4 text-xl">panel #5 script</h4>
          <p class="mb-4 text-xl">
            Long view down a narrow, trashy alley. The village square is at the end and <span class="font-bold">PLAGUE RAT</span>
            looks down the alley toward us, startled. In the foreground there is motion - something too
            close to the camera to discern.
          </p>

          <ul class="px-6 text-xl">
            <li><span class="font-bold">FX:</span> *snap*</li>
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
  title: 'Panel Five :: What was that? - Swán Comic',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {
      property: 'og:title',
      content: 'Panel Five :: What was that? - Swán Comic'
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://swancomic.com/005-what-was-that',
    },
    {
      property: 'og-image',
      content: 'https://ucarecdn.com/e085ff7c-fb75-40c3-9650-b198b017a7ea/-/preview/-/quality/smart/-/format/auto/i.jpg',
    },
  ],
});
</script>