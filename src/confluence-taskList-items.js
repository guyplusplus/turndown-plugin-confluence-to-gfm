export default function confluenceTaskListItems (turndownService) {
  turndownService.addRule('confluenceTaskListItems', {
    filter: function (node) {
      return (
        node.nodeName === 'LI' &&
        node.parentNode.nodeName === 'UL' &&
        node.parentNode.className === 'inline-task-list'
      )
    },
    replacement: function (content, node) {
      return (node.className === 'checked' ? '- [x]' : '- [ ]') + ' ' + content + '\n'
    }
  })
}
