import confluenceHighlightedCodeBlock from './confluence-highlighted-code-block'
import confluenceEmoji from './confluence-emoji'
import confluenceTaskListItems from './confluence-taskList-items'

function confluenceGfm (turndownService) {
  turndownService.use([
    confluenceHighlightedCodeBlock,
    confluenceEmoji,
    confluenceTaskListItems
  ])
}

export { confluenceGfm, confluenceHighlightedCodeBlock, confluenceEmoji, confluenceTaskListItems }
