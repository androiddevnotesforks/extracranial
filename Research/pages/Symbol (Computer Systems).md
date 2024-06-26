---
lang: 'en'
slug: '/EC30D8'
aliases: ['Symbol']
---

- [[Undefined Symbol Vtable]]

There are three types of Symbols: Global Symbols, External Symbols, and Local Symbols.

Global Symbols are symbols that are not [[Static (Computer Systems)|static]].
They are usually function names and global variables.

External Global Symbols are also not static symbols, but they are undefined.
These can include global variables with `extern` (so we don't know the value) or function prototypes (so we don't see the function)

Local Symbols are static symbols — static global variables and functions.
Note that these are not local variables! Those are in the stack.
Duplicate local symbol causes an error.

When there are multiple global variables, we classify them into strong and weak symbols.
Weak variables mean uninitialized variables.
When there are multiple "strong" symbols, it errors.
When there are strong and weak symbols combined, the [[Link (Computer Systems)|linker]] chooses the strong one.
The [[Link (Computer Systems)|linker]] will arbitrarily select the symbol when there are multiple weak symbols, depending on the implementation.

When dealing with global variables, it is good to

- use `static` if possible
- initialize global variables (take advantage of the [[Link (Computer Systems)|linker]] for [[dx]])
- use `extern` keyword when referencing outside static global variables
