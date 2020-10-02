
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles') , path.join(__dirname , 'components/')],
  },
  pageExtensions: ['jsx', 'js', 'ts', 'tsx' , 'scss'],
}
