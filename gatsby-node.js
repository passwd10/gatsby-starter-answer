const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: `page` })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tag
              layout
            }
          }
        }
      }
    }
  `)

  const getPostsByTag = (posts, tag) => {
    return posts.filter(({ node }) => node.frontmatter.tag.includes(tag));
  };

  const sortPostsByDate = (posts) => {
    posts.sort((a, b) => {
      const targetPostDate = a.node.fields.slug.split("/").join("");
      const nextPostDate = b.node.fields.slug.split("/").join("");
      
      return `${targetPostDate}`+`${nextPostDate}` < `${nextPostDate}`+`${targetPostDate}` ? -1 : 1;
    });
  };

  const findIndexByTitle = (posts, title) => {
    return posts.findIndex(({ node }) => node.frontmatter.title == title);
  }

  const posts = result.data.allMarkdownRemark.edges.filter(
    ({ node }) => !node.frontmatter.layout
  )

  posts.forEach(({ node }, index) => {
    const currentNode = posts[index].node;
    const currentNodesTag = currentNode.frontmatter.tag[0];

    const postsMatchingCurrentTag = getPostsByTag(posts, currentNodesTag);
    sortPostsByDate(postsMatchingCurrentTag);

    const currentNodesTitle = currentNode.frontmatter.title;
    const indexInTagGroup = findIndexByTitle(postsMatchingCurrentTag, currentNodesTitle);

    const previousNodeByTag = postsMatchingCurrentTag[indexInTagGroup - 1]
      ? postsMatchingCurrentTag[indexInTagGroup - 1]
      : postsMatchingCurrentTag[postsMatchingCurrentTag.length - 1];
    const nextNodeByTag = postsMatchingCurrentTag[indexInTagGroup + 1]
      ? postsMatchingCurrentTag[indexInTagGroup + 1]
      : postsMatchingCurrentTag[0];

    const previous = index === posts.length - 1 ? null : previousNodeByTag.node;
    const next = index === 0 ? null : nextNodeByTag.node;

    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
        previous,
        next,
      },
    })
  });
}
