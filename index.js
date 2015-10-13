var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.translate.google.com",
  contentScriptFile: './domContext.js'
});

var button = buttons.ActionButton({
  id: 'translate_google_com',
  label: 'translate.google.com',
  icon: {
    '16': './icon-16.png',
    '32': './icon-32.png',
    '64': './icon-64.png'
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open('https://translate.google.com');
}
