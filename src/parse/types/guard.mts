/**
 * @file Type Aliases - Guard
 * @module mark/parse/types/Guard
 */

import type { Code, Context } from '@flex-development/mark/parse'

/**
 * Guard a character `code`.
 *
 * @see {@linkcode Code}
 * @see {@linkcode Context}
 *
 * @this {Context}
 *
 * @param {Code} code
 *  The character code to check
 * @return {boolean}
 *  `true` if `code` passes check, `false` otherwise
 */
type Guard = (this: Context, code: Code) => boolean

export type { Guard as default }
