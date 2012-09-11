var fs = require('fs');
var path = require('path');

/*
 * HELPERS
 */

var getDirectoryInfo = function(filename) {

  var stats = fs.lstatSync(filename);
  var type = stats.isDirectory() ? "folder" : "file";
  var item = {
    type: type,
    path: filename,
    name: path.basename(filename)
  };

  if (type === "folder") {
    item.children = fs.readdirSync(filename).map(function(child) {
      return getDirectoryInfo(filename + '/' + child);
    });
  }

  return item;

};

/*
 * GET songs index page.
 */

exports.index = function(req, res){
  var info = getDirectoryInfo('./Music');
  info = JSON.stringify(info);
  res.send(info);
};
