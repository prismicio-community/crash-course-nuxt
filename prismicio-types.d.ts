// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the page
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | FeaturesSlice
  | HeroSlice
  | ImageAndTextSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = PageDocument;
/**
 * Primary content in Features → Primary
 *
 */
interface FeaturesSliceDefaultPrimary {
  /**
   * Tagline field in *Features → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Text above the main text
   * - **API ID Path**: features.primary.tagline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  tagline: prismic.RichTextField;
  /**
   * Text field in *Features → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Main text to display
   * - **API ID Path**: features.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Alignment field in *Features → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Determines how to display features
   * - **Default Value**: Left
   * - **API ID Path**: features.primary.alignment
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  alignment: prismic.SelectField<"Left" | "Center", "filled">;
}
/**
 * Item in Features → Items
 *
 */
export interface FeaturesSliceDefaultItem {
  /**
   * Image field in *Features → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Description field in *Features → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text describing the feature
   * - **API ID Path**: features.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Button Link field in *Features → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Optional - Link for the button
   * - **API ID Path**: features.items[].buttonLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  buttonLink: prismic.LinkField;
  /**
   * Button Text field in *Features → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Optional - Text for the button
   * - **API ID Path**: features.items[].buttonText
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  buttonText: prismic.KeyTextField;
}
/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Features`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FeaturesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturesSliceDefaultPrimary>,
  Simplify<FeaturesSliceDefaultItem>
>;
/**
 * Slice variation for *Features*
 *
 */
type FeaturesSliceVariation = FeaturesSliceDefault;
/**
 * Features Shared Slice
 *
 * - **API ID**: `features`
 * - **Description**: `Features`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FeaturesSlice = prismic.SharedSlice<
  "features",
  FeaturesSliceVariation
>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * Tagline field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Text above the title
   * - **API ID Path**: hero.primary.tagline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  tagline: prismic.RichTextField;
  /**
   * Title field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Large, bold title
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Main text to display
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Background Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.backgroundImage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  backgroundImage: prismic.ImageField<never>;
}
/**
 * Item in Hero → Items
 *
 */
export interface HeroSliceDefaultItem {
  /**
   * Button Link field in *Hero → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for the button
   * - **API ID Path**: hero.items[].buttonLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  buttonLink: prismic.LinkField;
  /**
   * Button Text field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Optional - Text for the button
   * - **API ID Path**: hero.items[].buttonText
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  buttonText: prismic.KeyTextField;
  /**
   * Button Style field in *Hero → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Determines the button's appearance
   * - **Default Value**: Filled
   * - **API ID Path**: hero.items[].buttonStyle
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  buttonStyle: prismic.SelectField<"Filled" | "Outlined", "filled">;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in ImageAndText → Primary
 *
 */
interface ImageAndTextSliceDefaultPrimary {
  /**
   * Image Side field in *ImageAndText → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Left
   * - **API ID Path**: image_and_text.primary.imageSide
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  imageSide: prismic.SelectField<"Left" | "Right", "filled">;
  /**
   * Image field in *ImageAndText → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_and_text.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Tagline field in *ImageAndText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Text above the main text
   * - **API ID Path**: image_and_text.primary.tagline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  tagline: prismic.RichTextField;
  /**
   * Text field in *ImageAndText → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Main text to display
   * - **API ID Path**: image_and_text.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Button Link field in *ImageAndText → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Optional - Link for the button
   * - **API ID Path**: image_and_text.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  buttonLink: prismic.LinkField;
  /**
   * Button Text field in *ImageAndText → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Optional - Text for the button
   * - **API ID Path**: image_and_text.primary.buttonText
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  buttonText: prismic.KeyTextField;
}
/**
 * Default variation for ImageAndText Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageAndText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageAndTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageAndTextSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *ImageAndText*
 *
 */
type ImageAndTextSliceVariation = ImageAndTextSliceDefault;
/**
 * ImageAndText Shared Slice
 *
 * - **API ID**: `image_and_text`
 * - **Description**: `ImageAndText`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageAndTextSlice = prismic.SharedSlice<
  "image_and_text",
  ImageAndTextSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      AllDocumentTypes,
      FeaturesSliceDefaultPrimary,
      FeaturesSliceDefaultItem,
      FeaturesSliceDefault,
      FeaturesSliceVariation,
      FeaturesSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      ImageAndTextSliceDefaultPrimary,
      ImageAndTextSliceDefault,
      ImageAndTextSliceVariation,
      ImageAndTextSlice,
    };
  }
}
