# turndown-plugin-confluence-to-gfm

The main project is based on [Dom Christie](https://github.com/domchristie) [turndown tool](https://github.com/domchristie/turndown) and its [GFM extension](https://github.com/domchristie/turndown-plugin-gfm) which converts HTML content to standard MD (Markdown) or GFM (Github Flavored Markdown).

This small plugin converts few non-standard features of Confluence HTML content to GFM, namely:
* Code block
* Tasks list
* Smileys
* Improved support of tables

First step, clone this repository and open the Turndown Demo page (Turndown%20Demo.html). Then export one or more pages of the Atlassian space as HTML, open the HTML and paste the content in Demo page.

## turndown-plugin-gfm bug fixes

There is a [pull request](https://github.com/domchristie/turndown-plugin-gfm/pull/31) that includes mandatory fixes. Until then the file `turndown-plugin-gfm-tmp.js` contains the fixes.

## Project TODO List

- [ ] Turn this project as a npm package with proper test cases!
- [ ] Some improvement in code fencing for possibly more than 3 \`
- [ ] Support of indented code (currently only fencing block code supported)
- [X] Table headers supported with left / medium / right indentation. Conclusion: no support since Confluence handles headers indentation via paragraph attribute inside the header cell
- [X] More test data with a richer Confluence page content, including with some characters (i.e. |)