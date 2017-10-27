const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
                title
                date
              }
            }
          }
        }
      }
    `
      ).then(result => generateStuff(createPage, result))
    )
  })
}

function generateStuff(createPage, graphqlResults) {
  if (graphqlResults.errors) {
    console.log("gatsby-node.js generateStuff graphqlError")
    return Promise.reject(graphqlResults.errors);
  }


  const blogPost = path.resolve("./src/templates/blog-post.js")
  const allPosts = graphqlResults.data.allMarkdownRemark.edges

  // aware of groupBy in _. Taking time to get it to work so wrote a custom function
  // easier to group here and keep it extensible rather than write a graphql query for grouping
  // so doing it here.
  const monthlyGroups = {};

  // create individual date posts and also grouping by month
  _.each(allPosts, individualPost => {
    var yearMonth = individualPost.node.frontmatter.date.slice(0, 7);
    if (monthlyGroups[yearMonth] === undefined) {
      monthlyGroups[yearMonth] = [individualPost];
    } else {
      monthlyGroups[yearMonth].push(individualPost);
    }
    
    createPage({
      path: individualPost.node.frontmatter.path,
      component: blogPost,
      context: {
        path: individualPost.node.frontmatter.path
      }

    })
  }) // end of _.each

  

}