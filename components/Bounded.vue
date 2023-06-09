<script setup lang="ts">
defineProps({
    as: {
      type: [String, Object, Function],
      default: 'div'
    },
    collapsible: {
      type: Boolean,
      default: true
    }
  })
</script>

<template>
  <Component
    :is="as"
    :data-collapsible="collapsible"
    class="px-6 py-32 md:px-10 xl:py-44 2xl:py-72"
  >
    <div class="mx-auto w-full max-w-5xl">
      <slot />
    </div>
  </Component>
</template>

