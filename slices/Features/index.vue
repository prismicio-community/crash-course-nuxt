<script setup lang="ts">
import { type Content, type HTMLRichTextMapSerializer } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.FeaturesSlice>(
  ['slice', 'index', 'slices', 'context']
));
const prismic = usePrismic()

const serializer: HTMLRichTextMapSerializer = {
  ...prismic.options.richTextSerializer,
  heading1: ({ children }) =>
    /* html */ `<h2 class="text-center text-4xl font-semibold text-slate-800">${children}</h2>`,
}

const cardSerializer : HTMLRichTextMapSerializer = {
  ...prismic.options.richTextSerializer,
  heading3: ({ children }) =>
    /* html */ `<h3 class="text-2xl font-semibold text-slate-800">${children}</h3>`
}
</script>

<template>
  <Bounded
    as="section"
    class="bg-white text-slate-500"
  >
    <div class="grid justify-items-center gap-6">
      <PrismicText
        v-if="$prismic.asText(slice.primary.tagline)"
        class="max-w-lg text-center text-sm font-semibold uppercase tracking-widest text-slate-300"
        wrapper="p"
        :field="slice.primary.tagline"
      />
      <PrismicRichText
        class="grid max-w-prose justify-center gap-6 text-center"
        :field="slice.primary.text"
        :html-serializer="serializer"
      />
      <ul class="mt-8 grid grid-cols-1 items-start gap-12 md:grid-cols-3">
        <li
          v-for="feature in slice.primary.features"
          :key="$prismic.asText(feature.description) || ''"
          class="grid gap-6"
          :class="{
            'justify-items-center text-center': slice.primary.alignment === 'Center'
          }"
        >
          <div class="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-slate-200 text-slate-500">
            <PrismicImage
              :field="feature.image"
              class="object-cover"
            />
          </div>
          <PrismicRichText
            class="grid gap-6"
            :field="feature.description"
            :html-serializer="cardSerializer"
          />
          <div v-if="feature.buttonLink.link_type !== 'Any'">
            <PrismicLink
              :field="feature.buttonLink"
              class="group font-semibold text-slate-300 transition hover:text-slate-500"
            >
              {{ feature.buttonText || "Learn more" }}
              <span
                aira-hidden
                class="ml-2 inline-block transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </PrismicLink>
          </div>
        </li>
      </ul>
    </div>
  </Bounded>
</template>
