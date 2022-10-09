<template>
  <div class="md:flex md:flex-col md:justify-center">
    <div>
      <div class="max-w-7xl relative">
        <h3 class="absolute font-['Architects_Daughter'] lowercase text-xl top-3 left-3">Panel #1</h3>

        <img alt="A boy in rags approaches a distant city. Caption reads: Yours is your father's honor, I hear, back home."
             src="https://ucarecdn.com/804a5d7e-1bf5-4ad8-a038-3c88b14f5479/-/preview/-/quality/smart/-/format/auto/">
      </div>

      <div class="font-['Inter'] mt-6 flex justify-end">
        <div class="bg-white max-w-prose prose p-6 relative md:right-12 md:-top-32 shadow-lg text-slate-600">
          <div class="flex justify-between">
            <h4 class="font-['Architects_Daughter'] font-bold lowercase mb-4 text-xl">panel #1 script</h4>
          </div>

          <div v-show="isScriptOpen">
            <p class="mb-2 text-xl">
              <span class="font-bold">PLAGUE RAT</span>, an eleven- or twelve-year-old urchin raggedly but
              practically dressed for a long and lonely journey, walks away from the camera down
              a dirt road. The field beside is overgrown.
            </p>
            <p class="mb-3 text-xl">
              There is a cart or wagon in the overgrowth, something that hints that this place is abandoned.
            </p>

            <p class="mb-4 text-xl">
              In the distance is an early medieval / anglosaxon village. This village is built along a cliff, and there is a single, modest, burh or castle that defends against the sea.
            </p>

            <ul class="px-6 text-xl">
              <li><strong>CAPTION - INTERNAL MONOLOGUE:</strong> "Yours is your father's honor," I hear, back home."</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead, useState } from '#app';
const isScriptOpen = useState('isScriptOpen', () => true);

useHead({
  title: 'Panel One :: Approaching Caledoran - Swán Comic',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {
      property: 'og:title',
      content: 'Panel One :: Panel One :: Approaching Caledoran - Swán Comic'
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://swancomic.com/001-aproaching-caledoran',
    },
    {
      property: 'og:image',
      content: 'https://ucarecdn.com/804a5d7e-1bf5-4ad8-a038-3c88b14f5479/-/preview/-/quality/smart/-/format/auto/i.jpg',
    },
  ],
});
</script>