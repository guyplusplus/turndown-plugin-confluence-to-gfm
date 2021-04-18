var turndownPluginConfluence = (function (exports) {
'use strict';

var highlightRegExp = /brush: ([a-z0-9]+);/

function confluenceHighlightedCodeBlock (turndownService) {
  turndownService.addRule('highlightedConfluenceCodeBlock', {
    filter: function (node) {
      var firstChild = node.firstChild
      return (
        node.nodeName === 'DIV' &&
        firstChild &&
        firstChild.nodeName === 'PRE' &&
        firstChild.className === 'syntaxhighlighter-pre'
      )
    },
    replacement: function (content, node, options) {
      var dataSyntaxhighlighterParams = node.firstChild.getAttribute('data-syntaxhighlighter-params') || ''
      var language = (dataSyntaxhighlighterParams.match(highlightRegExp) || [null, ''])[1]

      // @TODO: implement fenceInCodeRegex
      return (
        '\n\n' + options.fence + language + '\n' +
        node.firstChild.textContent +
        '\n' + options.fence + '\n\n'
      )
    }
  })
}

function confluenceTaskListItems (turndownService) {
  turndownService.addRule('confluenceTaskListItems', {
    filter: function (node) {
      return (
        node.nodeName === 'LI' &&
        node.parentNode.nodeName === 'UL' &&
        node.parentNode.className === 'inline-task-list'
      )
    },
    replacement: function (content, node) {
      return (node.className === 'checked' ? '- [x]' : '- [ ]') + ' ' + content + '\n\n'
    }
  })
}

function confluenceSmiley (turndownService) {
  turndownService.addRule('confluenceSmiley', {
    filter: function (node) {
      var className = node.className || ''
      return className.includes('emoticon') && node.nodeName === 'IMG'
    },
    replacement: function (content, node) {
      return (node.getAttribute('data-emoji-shortname') || '')
    }
  })
}

function confluenceGfm (turndownService) {
  turndownService.use([
    confluenceHighlightedCodeBlock,
    confluenceTaskListItems,
    confluenceSmiley
  ])
}

exports.confluenceGfm = confluenceGfm;
exports.confluenceHighlightedCodeBlock = confluenceHighlightedCodeBlock;
exports.confluenceTaskListItems = confluenceTaskListItems;
exports.confluenceSmiley = confluenceSmiley;

return exports;

}({}));
