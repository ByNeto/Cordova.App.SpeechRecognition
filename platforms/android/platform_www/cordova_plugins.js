cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-speechrecognition.SpeechRecognition",
    "file": "plugins/cordova-plugin-speechrecognition/www/speechRecognition.js",
    "pluginId": "cordova-plugin-speechrecognition",
    "merges": [
      "window.plugins.speechRecognition"
    ]
  },
  {
    "id": "cordova-plugin-flashlight.Flashlight",
    "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
    "pluginId": "cordova-plugin-flashlight",
    "clobbers": [
      "window.plugins.flashlight"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-speechrecognition": "1.1.2",
  "cordova-plugin-flashlight": "3.2.0",
  "cordova-plugin-vibration": "3.1.0"
};
// BOTTOM OF METADATA
});