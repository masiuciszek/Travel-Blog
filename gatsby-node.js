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
};
