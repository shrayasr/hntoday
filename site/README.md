## Steps
- `npm install`
- Change `gifSource` in `config-automate.js` to point to the directory that contains the gif files. Currently points to a test directory with sample data  
- `npm run develop` or `npm run serve` to view how the site looks  

## Discussions
- `renderMDFiles.js` can be moved to `gatsby-node.js` if desired.  
- Right now I'm copying each gif to the folder to make it self contained. If required we can skip this and just reference the relevant path to save disk space.  
- All file operations are written using sync variation of the functions.  