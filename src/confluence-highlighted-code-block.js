var highlightRegExp = /brush: ([a-z0-9]+);/

export default function confluenceHighlightedCodeBlock (turndownService) {
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

      // TODO: implement fenceInCodeRegex
      return (
        '\n\n' + options.fence + language + '\n' +
        node.firstChild.textContent +
        '\n' + options.fence + '\n\n'
      )
    }
  })
}
