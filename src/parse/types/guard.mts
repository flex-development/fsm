/**
 * @file Type Aliases - Guard
 * @module mark/parse/types/Guard
 */

import type { Code, TokenizeContext } from '@flex-development/mark/parse'

/**
 * Guard a character `code`.
 *
 * @see {@linkcode Code}
 * @see {@linkcode TokenizeContext}
 *
 * @this {TokenizeContext}
 *
 * @param {Code} code
 *  The character code to check
 * @return {boolean}
 *  `true` if `code` passes check, `false` otherwise
 */
type Guard = (this: TokenizeContext, code: Code) => boolean

export type { Guard as default }
