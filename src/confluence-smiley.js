export default function confluenceSmiley (turndownService) {
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
