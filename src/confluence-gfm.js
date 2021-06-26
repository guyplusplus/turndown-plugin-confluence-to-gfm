import {indentedConfluenceHighlightedCodeBlock, fencedConfluenceHighlightedCodeBlock} from './confluence-highlighted-code-block'
import confluenceEmoji from './confluence-emoji'
import confluenceTaskListItems from './confluence-taskList-items'

function confluenceGfm (turndownService) {
  turndownService.use([
    indentedConfluenceHighlightedCodeBlock,
    fencedConfluenceHighlightedCodeBlock,
    confluenceEmoji,
    confluenceTaskListItems
  ])
}

export { confluenceGfm, indentedConfluenceHighlightedCodeBlock, fencedConfluenceHighlightedCodeBlock, confluenceEmoji, confluenceTaskListItems }
