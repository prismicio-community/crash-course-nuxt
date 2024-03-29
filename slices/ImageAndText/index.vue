<script setup lang="ts">
import { type Content, type HTMLRichTextMapSerializer } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.ImageAndTextSlice>(
  ['slice', 'index', 'slices', 'context']
));
const prismic = usePrismic()

const serializer: HTMLRichTextMapSerializer = {
  ...prismic.options.richTextSerializer,
  heading1: ({ children }) =>
    /* html */ `<h2 class="text-4xl font-semibold text-slate-800">${children}</h2>`,
}
</script>

<template>
  <Bounded
    as="section"
    class="bg-white text-slate-500"
  >
    <div class="grid grid-flow-col-dense items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-20">
      <div :class="{ 'col-start-2': slice.primary.imageSide === 'Right' }">
        <PrismicImage
          :field="slice.primary.image"
          class="bg-gray-100"
        />
      </div>
      <div class="grid gap-6">
        <PrismicText
          v-if="$prismic.asText(slice.primary.tagline)"
          class="max-w-xs text-sm font-semibold uppercase tracking-widest text-slate-300"
          wrapper="p"
          :field="slice.primary.tagline"
        />
        <PrismicRichText
          v-if="$prismic.asText(slice.primary.text)"
          class="grid max-w-prose gap-6"
          wrapper="div"
          :field="slice.primary.text"
          :html-serializer="serializer"
        />
        <div v-if="slice.primary.buttonLink.link_type !== 'Any'">
          <ButtonLink :field="slice.primary.buttonLink">
            {{ slice.primary.buttonText }}
          </ButtonLink>
        </div>
      </div>
    </div>
  </Bounded>
</template>
