var wd = require("wd")
  , assert = require("assert");

var steps = function () {
  
  this.After(function(callback) {
    global.browser.quit();
    
    var exec = require('child_process').exec,
        child;

    child = exec('osascript close.applescript',
      function (error, stdout, stderr) {
        setTimeout(callback, 2000);
    });
  });

  this.Before(function(callback) {
    var browser = wd.remote("localhost", 4723);
    global.browser = browser;

    //https://github.com/appium/appium/blob/master/docs/caps.md
    var options = {
      device: ""
      , name: "Appium: with WD"
      , platform: "Mac"
      , app: "/Users/andrewkeig/projects/appium-cuked/assets/TestApp.zip"
      , version: "6.0"
      , browserName: ""
      , newCommandTimeout: 60
    };

    global.browser.init(options, function(){
      callback();
    });

    global.browser.on("status", function(info) {
      //console.log('\x1b[36m%s\x1b[0m', info);
    });

    global.browser.on("command", function(meth, path, data) {
      //console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path, data || '');
    });
  });

  this.Given(/^I want to add numbers$/, function(callback) {
    callback();
  });

  this.When(/^I enter "([^"]*)" and "([^"]*)"$/, function(arg1, arg2, callback) {
    global.browser.elementsByTagName("textField", function(err, els) {
      els[0].type(arg1, function(err) {
        els[1].type(arg2, function(err) {
          callback();
        });
      });
    });
  });

  this.When(/^I click compute$/, function(callback) {
    global.browser.elementsByTagName('button', function(err, btns) {
      btns[0].click(function(err) {
        callback();
      });
    });
  });

  this.Then(/^the answer should be "([^"]*)"$/, function(result, callback) {
    var me = this;

    global.browser.elementsByTagName('staticText', function(err, texts) {
      texts[0].text(function(err, str) {
        assert.equal(str, result);
        callback();
      })
    })
  });
};

module.exports = steps;