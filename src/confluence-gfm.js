import confluenceHighlightedCodeBlock from './confluence-highlighted-code-block'
import confluenceSmiley from './confluence-smiley'
import confluenceTaskListItems from './confluence-taskList-items'

function confluenceGfm (turndownService) {
  turndownService.use([
    confluenceHighlightedCodeBlock,
    confluenceSmiley,
    confluenceTaskListItems
  ])
}

export { confluenceGfm, confluenceHighlightedCodeBlock, confluenceSmiley, confluenceTaskListItems }
