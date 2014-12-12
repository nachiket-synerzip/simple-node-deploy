require('shelljs/global');
var express = require('express');
var router = express.Router();

launchBuild = function(dirName, otherArgs){
  //cd into dirName
  var  gruntCmd = 'grunt launch';
  cd(dirName);
  console.log(otherArgs);
  exec(gruntCmd, function(exitCode, op){
    console.log(op);
  });
  console.log('Executed the command');
};

router.post('/', function(req, res){
  var directory = '/home/synerzip/Projects/Production2.0/dev/BUBBLE/dev/chorizo';
  launchBuild(directory, req.body);
  res.send(200, {code: 'ok'});
});

module.exports = router;
