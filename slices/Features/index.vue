<template>
  <Bounded as="section" class="bg-white text-slate-500">
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
        :html-serializer="htmlSerializer"
      />
      <ul class="mt-8 grid grid-cols-1 items-start gap-12 md:grid-cols-3">
        <li
          v-for="item in slice.items"
          :key="$prismic.asText(item.description)"
          class="grid gap-6"
          :class="{
            'justify-items-center text-center': alignment === 'Center'
          }"
        >
          <div class="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-slate-200 text-slate-500">
            <PrismicImage
              :field="item.image"
              class="object-cover"
            />
          </div>
          <PrismicRichText
            :field="item.description"
            :html-serializer="cardHTMLSerializer"
          />
          <div v-if="item.buttonLink.link_type !== 'Any'">
            <PrismicLink
              :field="item.buttonLink"
              class="group font-semibold text-slate-300 transition hover:text-slate-500"
            >
              {{ item.buttonText || "Learn more" }}
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

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  data() {
    return {
      htmlSerializer(type, _element, _content, children) {
        switch (type) {
          case 'heading1':
            return /* html */ `<h2 class="text-center text-4xl font-semibold text-slate-800">${children.join('')}</h2>`
          case 'hyperlink':
            return /* html */ `<a href="${element.data.url}" class="underline decoration-1 underline-offset-1">${children.join('')}</a>`
        default: 
          return null
        }
      },
      cardHTMLSerializer(type, _element, _content, children) {
        switch (type) {
          case 'heading3':
            return /* html */ `<h3 class="text-2xl font-semibold text-slate-800">${children.join('')}</h3>`
          case 'hyperlink':
            return /* html */ `<a href="${element.data.url}" class="underline decoration-1 underline-offset-1">${children.join('')}</a>`
        default: 
          return null
        }
      }
    }
  }
}
</script>