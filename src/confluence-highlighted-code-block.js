var highlightRegExp = /brush: ([a-z0-9]+);/

function indentedConfluenceHighlightedCodeBlock (turndownService) {
  turndownService.addRule('indentedConfluenceHighlightedCodeBlock', {
    filter: function (node, options) {
      var firstChild = node.firstChild
      return (
        options.codeBlockStyle === 'indented' &&
        node.nodeName === 'DIV' &&
        firstChild &&
        firstChild.nodeName === 'PRE' &&
        firstChild.className === 'syntaxhighlighter-pre'
      )
    },
    replacement: function (content, node, options) {
      return (
        '\n\n    ' +
        node.firstChild.textContent.replace(/\n/g, '\n    ') +
        '\n\n'
      )
    }
  })
}

function fencedConfluenceHighlightedCodeBlock (turndownService) {
  turndownService.addRule('fencedConfluenceHighlightedCodeBlock', {
    filter: function (node, options) {
      var firstChild = node.firstChild
      return (
        options.codeBlockStyle === 'fenced' &&
        node.nodeName === 'DIV' &&
        firstChild &&
        firstChild.nodeName === 'PRE' &&
        firstChild.className === 'syntaxhighlighter-pre'
      )
    },
    replacement: function (content, node, options) {
      var dataSyntaxhighlighterParams = node.firstChild.getAttribute('data-syntaxhighlighter-params') || ''
      var language = (dataSyntaxhighlighterParams.match(highlightRegExp) || [null, ''])[1]
      var code = node.firstChild.textContent

      var fenceChar = options.fence.charAt(0)
      var fenceSize = 3
      var fenceInCodeRegex = new RegExp('^' + fenceChar + '{3,}', 'gm')

      var match
      while ((match = fenceInCodeRegex.exec(code))) {
        if (match[0].length >= fenceSize) {
          fenceSize = match[0].length + 1
        }
      }

      var fence = repeat(fenceChar, fenceSize)

      return (
        '\n\n' + fence + language + '\n' +
        code.replace(/\n$/, '') +
        '\n' + fence + '\n\n'
      )
    }
  })
}

function repeat (character, count) {
  return Array(count + 1).join(character)
}

export {indentedConfluenceHighlightedCodeBlock, fencedConfluenceHighlightedCodeBlock}
