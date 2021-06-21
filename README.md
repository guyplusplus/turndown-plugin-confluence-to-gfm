# turndown-plugin-confluence-to-gfm

A [Turndown](https://github.com/domchristie/turndown) plugin which adds GitHub Flavored Markdown extensions for Confluence pages. It relies on the [turndown-plugin-gfm](https://github.com/guyplusplus/turndown-plugin-gfm) plugin.

This small plugin converts few non-standard features of Confluence HTML content to GFM, namely:
* Code block
* Tasks list
* Smileys
* Improved support of tables

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
var TurndownPluginGfm = require('@guyplusplus/turndown-plugin-gfm')
var TurndownPluginConfluence = require('@guyplusplus/turndown-plugin-confluence-to-gfm')

var turndownService = new TurndownService()
TurndownPluginGfm.gfm(turndownService)
TurndownPluginConfluence.confluenceGfm(turndownService)
var markdown = turndownService.turndown('<strike>Hello world!</strike>')
```

turndown-plugin-gfm is a suite of plugins which can be applied individually. The available plugins are as follows:

- `strikethrough` (for converting `<strike>`, `<s>`, and `<del>` elements)
- `tables`
- `taskListItems`
- `gfm` (which applies all of the above)

So for example, if you only wish to convert tables:

```js
var tables = require('turndown-plugin-gfm').tables
var turndownService = new TurndownService()
turndownService.use(tables)
```

## License

turndown-plugin-gfm is copyright © 2017+ Dom Christie and released under the MIT license.
