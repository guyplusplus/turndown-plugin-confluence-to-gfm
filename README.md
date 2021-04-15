# turndown-plugin-confluence-to-gfm

The main project is based on [Dom Christie](https://github.com/domchristie) [turndown tool](https://github.com/domchristie/turndown-plugin-gfm).

This small plugin converts few non standard features of Confluence HTML content to GFM, namely:
* Code block
* tasks list
* Smileys
* Improved support of tables

First step, clone this repository. Then export one or more pages of the space as HTML, open the HTML and paste the content in the Turndown Demo page (Turndown%20Demo.html) to be opened locally.

## Project TODO List

- [ ] Some improvement in code fencing
- [ ] Support of indented code (currently only fencing block code supported)
- [ ] Table headers supported with left / medium / right indentation
