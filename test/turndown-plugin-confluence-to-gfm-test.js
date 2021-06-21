var Attendant = require('turndown-attendant')
var TurndownService = require('turndown')
var gfm = require('@guyplusplus/turndown-plugin-gfm').gfm
var confluenceGfm = require('../lib/turndown-plugin-confluence-to-gfm.cjs').confluenceGfm

var attendant = new Attendant({
  file: __dirname + '/index.html',
  TurndownService: TurndownService,
  beforeEach: function (turndownService) {
    turndownService.use(gfm)
    turndownService.use(confluenceGfm)
  }
})

attendant.run()
