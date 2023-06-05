import { HTMLRichTextMapSerializer } from '@prismicio/client';

const serializer: HTMLRichTextMapSerializer = {
  hyperlink: ({ children, node }) =>
    /* html */ `<a href="${node.data.url}" class="underline decoration-1 underline-offset-1">${children}</a>`
}

export default serializer;