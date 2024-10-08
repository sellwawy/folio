// // import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

// // export const Post = defineDocumentType(() => ({
// //   name: 'Post',
// //   filePathPattern: `**/*.mdx`,
// //   contentType: 'mdx',
// //   fields: {
// //     title: { type: 'string', required: true },
// //     date: { type: 'date', required: true },
// //     summary: { type: 'string', required: true },
// //   },
// //   computedFields: {
// //     url: {
// //       type: 'string',
// //       resolve: (post) => `/posts/${post._raw.flattenedPath}`,
// //     },
// //   },
// // }));

// // export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] });
// import { makeSource, defineDocumentType } from "@contentlayer2/source-files";
import readingTime from 'reading-time'
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import rehypePrettyCode from "rehype-pretty-code";
// import rehypeSlug from "rehype-slug";
// import remarkGfm from "remark-gfm";
import GithubSlugger from 'github-slugger'

// const Post = defineDocumentType(() => ({
//   name: "Post",
//   filePathPattern: "**/**/*.mdx",
//   contentType: "mdx",
//   fields: {
//     title: {
//       type: "string",
//       required: true,
//     },
//     publishedAt: {
//       type: "date",
//       required: true,
//     },
//     updatedAt: {
//       type: "date",
//       required: true,
//     },
//     description: {
//       type: "string",
//       required: true,
//     },
//     image: { type: "image" },
//     isPublished: {
//       type: "boolean",
//       default: true,
//     },
//     // author: {
//     //   type: "string",
//     //   required: true,
//     // },
//     tags: {
//       type: "list",
//       of: { type: "string" },
//     },
//   },
//   computedFields: {
//     url: {
//       type: "string",
//       resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
//     },
//     readingTime: {
//       type: "json",
//       resolve: (doc) => readingTime(doc.body.raw)
//     },
//     toc:{
//       type: "json",
//       resolve: async (doc) => {

//         const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
//         const slugger = new GithubSlugger();
//         const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(({groups}) => {
//           const flag = groups?.flag;
//           const content = groups?.content;

//           return {
//             level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
//             text: content,
//             slug: content ? slugger.slug(content) : undefined
//           }

//         })

//         return headings;
//       }
//     }
//   },
// }));

const codeOptions = {
   theme: 'github-dark',
   grid: false,
}

// export default makeSource({
//   /* options */
//   contentDirPath: "posts",
//   documentTypes: [Post],
//   mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {behavior: "append"}], [rehypePrettyCode, codeOptions] ] }
// });

import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

const Post = defineDocumentType(() => ({
   name: 'Post',
   filePathPattern: '**/**/*.mdx',
   contentType: 'mdx',
   fields: {
      title: {
         type: 'string',
         required: true,
      },
      publishedAt: {
         type: 'date',
         required: true,
      },
      updatedAt: {
         type: 'date',
      },
      description: {
         type: 'string',
         required: true,
      },
      isPublished: {
         type: 'boolean',
         default: true,
      },
      category: {
         type: 'string',
         required: true,
      },
      tags: {
         type: 'list',
         of: { type: 'string' },
      },
      // image: { type: "image" },
      // isPublished: {
      //   type: "boolean",
      //   default: true,
      // },
      // author: {
      //   type: "string",
      //   required: true,
      // },
   },
   computedFields: {
      slug: {
         type: 'string',
         resolve: (doc) => `/${doc._raw.flattenedPath}`,
      },
      readingTime: {
         type: 'json',
         resolve: (doc) => readingTime(doc.body.raw),
      },
      toc: {
         type: 'json',
         resolve: async (doc) => {
            const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g
            const slugger = new GithubSlugger()
            const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(
               ({ groups }) => {
                  const flag = groups?.flag
                  const content = groups?.content

                  return {
                     level:
                        flag?.length == 1
                           ? 'one'
                           : flag?.length == 2
                             ? 'two'
                             : 'three',
                     text: content,
                     slug: content ? slugger.slug(content) : undefined,
                  }
               },
            )

            return headings
         },
      },
   },
   // computedFields: {
   //   url: {
   //     type: "string",
   //     resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
   //   },
   //   readingTime: {
   //     type: "json",
   //     resolve: (doc) => readingTime(doc.body.raw)
   //   },
   //   toc:{
   //     type: "json",
   //     resolve: async (doc) => {

   //       const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
   //       const slugger = new GithubSlugger();
   //       const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(({groups}) => {
   //         const flag = groups?.flag;
   //         const content = groups?.content;

   //         return {
   //           level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
   //           text: content,
   //           slug: content ? slugger.slug(content) : undefined
   //         }

   //       })

   //       return headings;
   //     }
   //   }
   // },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
