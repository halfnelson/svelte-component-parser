### DEPRECATED ###

Use the [`parse`](https://svelte.dev/docs#svelte_parse) function exposed in `svelte/compiler` instead.

------
 
Extracted parser class and method from the svelte compiler for use in preprocessors.


Usage

```js
import parse from 'svelte-template-parser'

const ast = parse(template, options as ParserOptions)

```