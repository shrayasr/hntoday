const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)
const moment = require('moment')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(
          limit: 10000
        ) {
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
  const monthlyArchive = path.resolve("./src/templates/monthly-archive.js")
  const mainArchive = path.resolve("./src/templates/main-archive.js")

  const allPosts = graphqlResults.data.allMarkdownRemark.edges

  // aware of groupBy in _. Taking time to get it to work so wrote a custom function
  // easier to group here and keep it extensible rather than write a graphql query for grouping
  // so doing it here.
  const monthlyGroups = {};
  // key - year, values -> list of 2017-10, 2017-11 etc
  // for use with archives page
  const yearToYearMonth = {}
  // create individual date posts and also grouping by month
  _.each(allPosts, individualPost => {

    // grouping monthly
    var yearMonth = individualPost.node.frontmatter.date.slice(0, 7);
    // prefixing year because strings with only numbers are not allowed in the
    // context field of Gatsby's create page. Sigh
    var year = "year" + yearMonth.slice(0, 4); 

    if (monthlyGroups[yearMonth] === undefined) {
      monthlyGroups[yearMonth] = [individualPost];
    } else {
      monthlyGroups[yearMonth].push(individualPost);
    }


    if (yearToYearMonth[year] === undefined) {
      yearToYearMonth[year] = [yearMonth];
    } else {
        yearToYearMonth[year].push(yearMonth);
    }
   
    // creating individual day pages
    createPage({
      path: individualPost.node.frontmatter.path,
      component: blogPost,
      context: {
        path: individualPost.node.frontmatter.path
      }

    })
  }) // end of _.each

  // sorting monthly posts archives and
  // creating pages that show links of each and every month
  _.each(Object.keys(monthlyGroups), function(key) {

    // there's no need to sort as we anyways
    // have to go date wise in the monthly archive
    // moreover there's some weird bug
    // tried sorting it many times but doesn't get sorted
    
    createPage({
      path: key,
      component: monthlyArchive,
      context: {
        posts: monthlyGroups[key],
        yearMonth: key
      }
    })
  })
  
  // removing duplicates and sorting
  _.each(Object.keys(yearToYearMonth), function(key) {
    yearToYearMonth[key] = _.uniq(yearToYearMonth[key]);
    yearToYearMonth[key].sort(function(item1, item2) {
      return moment(item1) > moment(item2);
    })
  })


  // create an archive page linking to monthly archives
  createPage({
    path: "/archives",
    component: mainArchive,
    context: {
      yearMonths: yearToYearMonth
    }
  })
  

}