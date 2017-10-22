var fs = require('fs')
var path = require('path')
var _ = require('lodash')
var gifLocation = require('./gatsby-config').siteMetadata.gifSource
var pathToRenderedMDFiles = path.join('src', 'pages')
var moment = require('moment')

var getDirectoriesThatRepresentDates = function(pathToDirectory) {
    // right now assume all directories are dates.
    var contents = fs.readdirSync(pathToDirectory);

    var directoryList = contents.filter(function(identifier) {
        var completePath = path.join(pathToDirectory, identifier)
        return fs.lstatSync(completePath).isDirectory()
    })

    return directoryList;
}


var renderedDates = getDirectoriesThatRepresentDates(pathToRenderedMDFiles).map(function(dateInHumanFriendlyFormat) {
    // so that the folders can be compared with the data source
    return moment(dateInHumanFriendlyFormat).format('YYYYMMDD')
})
var allDates = getDirectoriesThatRepresentDates(gifLocation)
var datesToRender = _.difference(allDates, renderedDates)

_.forEach(datesToRender, function(date) {

    // Reader friendly folders. Hence YYYY-MM-DD
    var directoryForMDFile = path.join(pathToRenderedMDFiles, moment(date).format('YYYY-MM-DD'))
    fs.mkdirSync(directoryForMDFile)

    // copy gif
    fs.writeFileSync(path.join(directoryForMDFile, date + ".gif"), fs.readFileSync(path.join(gifLocation, date, date + ".gif")))

    var contentToWrite = [
        "---",
        'title: "HN as on ' + moment(date).format('DD-MMMM-YY') + '"',
        'path: ' + '"/' + moment(date).format('YYYY-MM-DD') + '/"',
        'date: "' + moment(date).format('YYYY-MM-DD') + '"',
        "---",
        "",
        "![Hacker News as on " + moment(date).format('YYYY-MM-DD') + " ](/" + date + ".gif)"
    ].join("\n")

    // fs.writeFileSync(path.join(directoryForMDFile, "index.md"), contentToWrite, function(err) {
    //     if (err) {
    //         console.log("Failed to write to ", directoryForMDFile, "index.md")
    //         console.log(err)
    //     }
    // })
    fs.writeFileSync(path.join(directoryForMDFile, "index.md"), contentToWrite)
})

var renderMonthlyMDfiles = function() {

}