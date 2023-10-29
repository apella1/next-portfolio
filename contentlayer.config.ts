import { makeSource, defineDocumentType } from "@contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    isPublished: {
      type: "boolean",
      default: false,
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) =>
        `/posts/${post._raw.flattenedPath.replace(/posts\/?/, "")}`,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    imgSrc: {
      type: "string",
      required: true,
    },
    sourceCodeHref: {
      type: "string",
    },
    description: {
      type: "string",
      required: true,
    },
    isPublished: {
      type: "boolean",
      default: false,
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    techStack: {
      required: true,
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (project) =>
        `/project/${project._raw.flattenedPath.replace(/projects\/?/, "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: ".",
  contentDirInclude: ["posts", "projects"],
  documentTypes: [Post, Project],
});
