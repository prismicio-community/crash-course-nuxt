<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const route = useRoute()
const { data: page, error } = useAsyncData('[uid]', () =>
  prismic.client.getByUID('page', route.params.uid as string || 'home')
)

// Handle the error
if (error.value) {
  throw createError({ statusCode: 404, message: 'Page not found' });
}

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
