<script setup lang="ts">
import { type LinkField } from '@prismicio/client';

defineProps({
    field: {
      type: Object as PropType<LinkField>,
      required: true
    },
    type: {
      type: String,
      default: 'filled'
    }
})
</script>

<template>
  <PrismicLink
    :field="field"
    class="inline-block rounded border-2 border-prismic-purple px-5 py-3 font-semibold text-white"
    :class="type === 'filled' ? 'bg-prismic-purple text-white' : 'text-prismic-purple'"
  >
    <slot />
  </PrismicLink>
</template>

