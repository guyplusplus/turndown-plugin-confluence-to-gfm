# turndown-plugin-confluence-to-gfm

A [Turndown](https://github.com/domchristie/turndown) plugin which adds GitHub Flavored Markdown extensions for Confluence pages exported as HTML. It relies on the [turndown-plugin-gfm](https://github.com/guyplusplus/turndown-plugin-gfm) plugin.

This small plugin converts few non-standard features of Confluence HTML content to GFM, namely:
* Code block (indented and fenced)
* Tasks list
* Emoji

## Test Page

The test page can be found [here](https://guyplusplus.github.io/turndown-plugin-confluence-to-gfm/).

## Installation

npm:

```
npm install turndown-plugin-confluence-to-gfm
```

Browser:

```html
<script src="https://unpkg.com/turndown/dist/turndown.js"></script>
<script src="https://unpkg.com/@guyplusplus/turndown-plugin-gfm/dist/turndown-plugin-gfm.js"></script>
<script src="https://unpkg.com/turndown-plugin-confluence-to-gfm/dist/turndown-plugin-confluence-to-gfm.js"></script>
```

## Usage

```js
// For Node.js
var TurndownService = require('turndown')
var TurndownPluginGfmService = require('@guyplusplus/turndown-plugin-gfm')
var TurndownPluginConfluenceToGfmService = require('turndown-plugin-confluence-to-gfm')

var turndownService = new TurndownService()
TurndownPluginGfmService.gfm(turndownService)
TurndownPluginConfluenceToGfmService.confluenceGfm(turndownService)
var markdown = turndownService.turndown('<img class="emoticon emoticon-laugh" data-emoji-id="1f600" data-emoji-shortname=":grinning:" data-emoji-fallback="😀" src="images/icons/emoticons/biggrin.png" width="16" height="16" data-emoticon-name="laugh" alt="(big grin)"/>')
```

turndown-plugin-confluence-to-gfm is a suite of plugins which can be applied individually. The available plugins are as follows:

- `indentedConfluenceHighlightedCodeBlock` and `fencedConfluenceHighlightedCodeBlock`
- `confluenceEmoji`
- `confluenceTaskListItems`
- `confluenceGfm` (which applies all of the above)

So for example, if you only wish to convert tables:

```js
var confluenceEmoji = require('turndown-plugin-confluence-to-gfm').confluenceEmoji
var turndownService = new TurndownService()
TurndownPluginGfmService.gfm(turndownService)
turndownService.use(confluenceEmoji)
```

## License

turndown-plugin-confluence-to-gfm is copyright © 2021+ Guyplusplus and released under the MIT license.
