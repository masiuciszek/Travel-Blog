const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.tours.edges.forEach(edge => {
    createPage({
      path: `tours/${edge.node.slug}`,
      component: path.resolve('./src/templates/tour-template.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  });

  data.posts.edges.forEach(edge => {
    createPage({
      path: `blog/${edge.node.slug}`,
      component: path.resolve('./src/templates/blog-template.js'),
      context: {
        slug: edge.node.slug,
      },
    });
  });
  // Pagination
  // amount of posts
  const posts = data.posts.edges;
  // posts per page
  const postPerPage = 5;
  // how many pages
  const numOfPages = Math.ceil(posts.length / postPerPage);

  // _ = item , wish I don't need in this case
  Array.from({ length: numOfPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/blog-list` : `/blog-list/${index + 1}`,
      component: path.resolve('./src/templates/blog-list-template.js'),
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        numOfPages,
        currentPage: index + 1,
      },
    });
  });
};
