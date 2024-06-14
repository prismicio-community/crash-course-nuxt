<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData(
  Array.isArray(route.params.uid) ? route.params.uid.join("/") : route.params.uid,
  () => prismic.client.getByUID('page', route.params.uid as string || 'home')
)

useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>


<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
