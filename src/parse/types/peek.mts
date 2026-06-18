/**
 * @file Type Aliases - Peek
 * @module mark/parse/types/Peek
 */

import type { Code } from '@flex-development/mark/parse'

/**
 * Get the next character code without advancing the tokenizer.
 *
 * @see {@linkcode Code}
 *
 * @this {void}
 *
 * @return {Code}
 *  The peeked character code
 */
type Peek = (this: void) => Code

export type { Peek as default }
