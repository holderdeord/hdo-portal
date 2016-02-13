var fs = require('fs')
var path = require('path')

module.exports = function() {
    this.plugin('done', function(stats) {
        fs.writeFile(path.resolve(__dirname, '../../../build/hash'), stats.hash);
    });
}
