<template>
  <div>
    <div class="border-b border-gray-200 flex justify-center">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <nuxt-link  v-for="tab in tabs"
                    :key="tab.name"
                    :to="tab.to"
                    :class="[tab.current ? 'border-white text-white' : 'border-transparent text-gray-500 hover:text-white hover:border-gray-200', 'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm']"
                    :aria-current="tab.current ? 'page' : undefined">
          {{ tab.name }}
          <span :class="[
                tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900', 'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block'
              ]" v-if="tab.count">
            {{ tab.count }}
          </span>
        </nuxt-link>
        <nuxt-link class="whitespace-nowrap flex py-4 px-1 font-medium text-sm text-orange-500" to="https://patreon.com/michaelschofield">Patreon</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { NuxtLink } from '#components';
</script>

<script>
export default {
  props: {
    tabs: {
      required: true,
      type: Array,
    },
  },
};
</script>