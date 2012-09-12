var fs = require('fs');
var util = require('util');

/*
 * GET STREAM music files
 */
exports.stream = function(req, res){

  var audio_path = '.' + unescape(req.url);
  var stat = fs.statSync(audio_path);

  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Content-Length': stat.size
  });

  var readStream = fs.createReadStream(audio_path);
  util.pump(readStream, res);

};
