var wd = require("wd")
  , assert = require("assert");

var steps = function () {
  this.Before(function(callback) {
    this.browser = wd.remote("localhost", 4723);

    var options = {
      device: ""
      , name: "Appium: with WD"
      , platform: "Mac"
      , app: "http://appium.s3.amazonaws.com/TestApp6.0.app.zip"
      , version: "6.0"
      , browserName: ""
      , newCommandTimeout: 60
    };

    this.browser.init(options, callback)

    this.browser.on("status", function(info) {
      //console.log('\x1b[36m%s\x1b[0m', info);
    });

    this.browser.on("command", function(meth, path, data) {
      //console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path, data || '');
    });
  });

  this.After(function(callback) {
    this.browser.quit();
    callback();
  });

  this.Exit(function(callback) {
    this.browser.quit();
    callback();
  });

  this.Given(/^I want to add numbers$/, function(callback) {
    callback();
  });

  this.When(/^I enter "([^"]*)" and "([^"]*)"$/, function(arg1, arg2, callback) {
    this.browser.elementsByTagName("textField", function(err, els) {
      els[0].type(arg1, function(err) {
        els[1].type(arg2, function(err) {
          callback();
        });
      });
    });
  });

  this.When(/^I click compute$/, function(callback) {
    this.browser.elementsByTagName('button', function(err, btns) {
      btns[0].click(function(err) {
        callback();
      });
    });
  });

  this.Then(/^the answer should be "([^"]*)"$/, function(result, callback) {
    this.browser.elementsByTagName('staticText', function(err, texts) {
      texts[0].text(function(err, str) {
        assert.equal(str, result);
        callback();
      })
    })
  });
};

module.exports = steps;