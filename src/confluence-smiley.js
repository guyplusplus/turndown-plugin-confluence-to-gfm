export default function confluenceSmiley (turndownService) {
  turndownService.addRule('confluenceSmiley', {
    filter: function (node) {
      var classes = (node.className || '').split(' ')
      return classes.includes('emoticon') && node.nodeName === 'IMG'
    },
    replacement: function (content, node) {
      return (node.getAttribute('data-emoji-shortname') || '')
    }
  })
}
