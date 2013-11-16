// var wd = require("wd")
//   , assert = require("assert");

// //curl -u andrew_keig:16502c81-c87a-4a84-ab0d-6755ec59abad -X POST "http://saucelabs.com/rest/v1/storage/andrew_keig/TestApp.zip?overwrite=true" -H "Content-Type: application/octet-stream" --data-binary @assets/TestApp.zip

// var steps = function () {
//   this.Given(/^I want to add numbers$/, function(callback) {
//     //this.browser = wd.remote("localhost", 4723);

//     this.browser = wd.remote(
//       "ondemand.saucelabs.com"
//       , 80
//       , "andrew_keig"
//       , "16502c81-c87a-4a84-ab0d-6755ec59abad"
//     );

//     var options = {
//       device: "iPhone Simulator"
//       , name: "Appium: with WD"
//       , platform: "Mac"
//       , version: "5.0"
//       , app:  "sauce-storage:TestApp.zip"
//       , browserName: "iphone"
//       , newCommandTimeout: 60
//     };

//     this.browser.on("status", function(info) {
//       console.log('\x1b[36m%s\x1b[0m', info);
//     });

//     this.browser.on("command", function(meth, path, data) {
//       console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path, data || '');
//     });

//     this.browser.init(options, callback);
//   });

//   this.When(/^I enter "([^"]*)" and "([^"]*)"$/, function(arg1, arg2, callback) {
//     this.browser.elementsByTagName("textField", function(err, els) {
//       els[0].type(arg1, function(err) {
//         els[1].type(arg2, function(err) {
//           callback();
//         });
//       });
//     });
//   });

//   this.When(/^I click compute$/, function(callback) {
//     this.browser.elementsByTagName('button', function(err, btns) {
//       btns[0].click(function(err) {
//         callback();
//       });
//     });
//   });

//   this.Then(/^the answer should be "([^"]*)"$/, function(result, callback) {
//     var me = this;
//     this.browser.elementsByTagName('staticText', function(err, texts) {
//       texts[0].text(function(err, str) {
//         assert.equal(str, result);
//         me.browser.quit(callback());
//       })
//     })
//   });
// };

// module.exports = steps;