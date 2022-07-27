<template>
  <Bounded as="section" class="relative bg-gray-800 text-slate-300">
    <PrismicImage
      :field="slice.primary.backgroundImage"
      class="pointer-events-none select-none object-cover"
    />
    <div class="relative grid justify-items-center gap-6 text-center">
      <PrismicText
        v-if="$prismic.asText(slice.primary.tagline)"
        class="max-w-lg text-sm font-semibold uppercase tracking-widest text-slate-500"
        wrapper="p"
        :field="slice.primary.tagline"
      />
      <PrismicText
        v-if="$prismic.asText(slice.primary.title)"
        class="max-w-3xl text-6xl font-semibold text-white"
        wrapper="h1"
        :field="slice.primary.title"
      />
      <PrismicRichText
        class="grid max-w-prose justify-center gap-6"
        wrapper="div"
        :field="slice.primary.text"
      />
      <ul v-if="slice.items.length" class="flex flex-wrap gap-4">
        <li v-for="item in slice.items" :key="item.buttonText">
          <ButtonLink
            :field="item.buttonLink"
            :type="item.buttonStyle === 'Filled' ? 'filled' : 'outlined'"
          >
            {{ item.buttonText }}
          </ButtonLink>
        </li>
      </ul>
    </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(["slice", "index", "slices", "context"])
}
</script>