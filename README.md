# turndown-plugin-confluence-to-gfm

The main project is based on [Dom Christie](https://github.com/domchristie) [turndown tool](https://github.com/domchristie/turndown) and its [GFM extension](https://github.com/domchristie/turndown-plugin-gfm) which converts HTML content to standard MD (Markdown) or GFM (Github Flavored Markdown).

This small plugin converts few non-standard features of Confluence HTML content to GFM, namely:
* Code block
* Tasks list
* Smileys
* Improved support of tables

First step, clone this repository and open the Turndown Demo page (Turndown%20Demo.html). Then export one or more pages of the Atlassian space as HTML, open the HTML and paste the content in Demo page.

## Project TODO List

- [ ] Some improvement in code fencing
- [ ] Support of indented code (currently only fencing block code supported)
- [ ] Table headers supported with left / medium / right indentation
